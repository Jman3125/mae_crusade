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
  'prod_Son7HiaDq9AimI': '68917090903e02',
  'prod_Son96RNGbuBlMY': '68917090903e97',
  'prod_SonA2RYcRR16nO': '68917090903f27',

  // Poster
  'prod_Som2h52y4Nm1k7': '68916703288a79',
};

const PRINTFUL_API_URL = 'https://api.printful.com/orders';

// Optional: define a type for clarity and safety
type PrintfulOrderItem = {
  variant_id: string;
  quantity: number;
};

export const handler: Handler = async (event) => {
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
    const lineItems = await stripe.checkout.sessions.listLineItems(session.id);

    for (const item of lineItems.data) {
      const productId = String(item.price?.product); // Ensure string type
      const variantId: string = productMap[productId];

      if (!variantId) {
        console.error(`No variant ID found for product ${productId}`);
        continue;
      }

      // Build Printful order with enforced string type
      const printfulOrder = {
        recipient: {
          name: session.customer_details?.name || '',
          address1: session.customer_details?.address?.line1 || '',
          city: session.customer_details?.address?.city || '',
          state_code: session.customer_details?.address?.state || '',
          country_code: session.customer_details?.address?.country || '',
          zip: session.customer_details?.address?.postal_code || '',
          email: session.customer_details?.email || '',
        },
        items: [
          <PrintfulOrderItem>{
            variant_id: `${variantId}`, // Template literal ensures string
            quantity: item.quantity || 1,
          },
        ],
      };

      // Log final JSON to verify string formatting
      const body = JSON.stringify(printfulOrder);
      console.log('Sending to Printful:', body);

      try {
        const res = await fetch(PRINTFUL_API_URL, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.PRINTFUL_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body,
        });

        const data = await res.json();
        console.log('Printful order response:', JSON.stringify(data, null, 2));
      } catch (err) {
        console.error('Error creating Printful order:', err);
      }
    }
  }

  return { statusCode: 200, body: 'Webhook processed' };
};