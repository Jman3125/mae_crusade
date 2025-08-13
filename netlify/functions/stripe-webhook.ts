import type { Handler } from '@netlify/functions';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

// Strictly store variant IDs as strings
const productMap: Record<string, string> = {

  // The Cowboys Crusade Tee
  'prod_SomrIFmfWMjGHo': '688c08d56887d1',
  'prod_SomwOja5vLCUah': '688c08d5688841',
  'prod_Son0d4SLLNgl74': '688c08d5688891',
  'prod_Son2nERugaFdfe': '688c08d56888d2',

  // MAE Comics Tee
  'prod_Son7EN2AZ6wBba': '68917090903d61',
  'prod_Son7HiaDq9AimI': '689bfb50543ea8',
  'prod_Son96RNGbuBlMY': '689bfb50543f73',
  'prod_SonA2RYcRR16nO': '68917090903f27',

  // Poster
  'prod_Son4miH1NsEduL': '68916703288a79',
};
// Printful API URL
const PRINTFUL_API_URL = 'https://api.printful.com/orders';

// Webhook handler
const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const sig = event.headers['stripe-signature'] as string;
  let stripeEvent;

  try {
    stripeEvent = stripe.webhooks.constructEvent(
      event.body as string,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET as string
    );
  } catch (err: any) {
    console.error('Webhook signature verification failed:', err.message);
    return { statusCode: 400, body: 'Webhook signature verification failed' };
  }

  if (stripeEvent.type === 'checkout.session.completed') {
    const session = stripeEvent.data.object as Stripe.Checkout.Session;

    // Fetch line items
    const lineItems = await stripe.checkout.sessions.listLineItems(session.id);

    for (const item of lineItems.data) {
      const productId = item.price?.product as string;
      const syncVariantId = productMap[productId];

      if (!syncVariantId) {
        console.error(`No variant ID found for product ${productId}`);
        continue;
      }

      // Create order in Printful
      const printfulOrder = {
        recipient: {
          name: session.customer_details?.name,
          address1: session.customer_details?.address?.line1,
          city: session.customer_details?.address?.city,
          state_code: session.customer_details?.address?.state,
          country_code: session.customer_details?.address?.country,
          zip: session.customer_details?.address?.postal_code,
          email: session.customer_details?.email,
        },
        items: [
          {
            sync_variant_id: Number(syncVariantId), //Convert it to a number when sending? It only breaks in this file
            quantity: item.quantity || 1,
          },
        ],
      };

      try {
        const res = await fetch(PRINTFUL_API_URL, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.PRINTFUL_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(printfulOrder),
        });

        const data = await res.json();
        console.log('Printful order response:', data);
      } catch (err) {
        console.error('Error creating Printful order:', err);
      }
    }
  }

  return { statusCode: 200, body: 'Webhook processed' };
};

export { handler };