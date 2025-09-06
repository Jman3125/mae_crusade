const privacy = () => {
  return (
    <div className="privacy">
      <header>
        <h1>Privacy Policy — MAE Comics</h1>
        <p className="small">Effective date: August 11, 2025</p>
      </header>
      <div>
        <h2>Introduction</h2>
        <p>
          MAE Comics ("we", "us", "our") operates the website for MAE Comics and
          sells products including the comic book <em>The Cowboy's Crusade</em>,
          posters, and shirts. This Privacy Policy explains how we collect, use,
          and disclose information when you visit or make a purchase through our
          website.
        </p>
      </div>
      <div>
        <h2>Information We Collect</h2>
        <p>
          <strong>Important:</strong> MAE Comics does <em>not</em> directly
          collect or store payment information or extensive customer personal
          data on our servers beyond what is necessary for order processing
          through our third-party providers. We rely on Stripe and Printful to
          collect and process payment, billing, and shipping details.
        </p>
        <ul>
          <li>
            <strong>Payment & billing details:</strong> Collected and processed
            by Stripe. We do not receive full card numbers or sensitive payment
            credentials.
          </li>
          <li>
            <strong>Order & shipping details:</strong> Shared with Printful for
            items fulfilled by Printful (posters and shirts) and with our
            shipping process for the author-shipped comic book. This includes
            name, shipping address, email, phone number (if provided), and order
            items.
          </li>
          <li>
            <strong>Transactional information:</strong> We keep basic order
            records (items purchased, date, order number) for bookkeeping and
            customer support.
          </li>
          <li>
            <strong>Contact info:</strong> If you email us or sign up for direct
            communications (e.g., by opting in), we may store your email address
            and message content. We do not collect additional data unless you
            explicitly provide it.
          </li>
        </ul>
      </div>
      <div>
        <h2>Third-Party Processors</h2>
        <p>
          We use trusted third parties to process payments, fulfill orders, and
          host certain functionality:
        </p>
        <ul>
          <li>
            <strong>Stripe</strong> — payment processing. Privacy and security
            are governed by Stripe's policies. We encourage you to review
            Stripe's privacy policy for details on how payment information is
            handled.
          </li>
          <li>
            <strong>Printful</strong> — order fulfillment and shipping for
            posters and shirts. Printful receives shipping and order details
            necessary to manufacture and ship the items.
          </li>
          <li>
            These providers may store, process, or transmit personal data on
            servers that may be outside your country. By using our site you
            consent to such transfers as necessary for order fulfillment and
            payment processing.
          </li>
        </ul>
      </div>
      <div>
        <h2>How We Use Your Information</h2>
        <p>We use information only as necessary to:</p>
        <ul>
          <li>
            Process purchases and coordinate shipping (via Stripe and Printful).
          </li>
          <li>
            Communicate about your order status, shipping updates, or customer
            support inquiries.
          </li>
          <li>Maintain records for legal and tax compliance.</li>
        </ul>
        <p>
          We do <strong>not</strong> use your information for marketing unless
          you opt in. We do not sell personal data to third parties.
        </p>
      </div>
      <div>
        <h2>Minors</h2>
        <p>
          Minors under 18 may make purchases only with parental permission. If
          you are a parent or guardian and believe your child has provided us
          with personal information without your consent, please contact us so
          we can remove that information.
        </p>
      </div>
      <div>
        <h2>International Orders & Shipping</h2>
        <p>
          We ship primarily within the United States and also support global
          orders. International shipping may incur additional charges, duties,
          taxes, and longer delivery times. For international orders, Stripe and
          Printful may transfer or process data internationally as necessary for
          payment and fulfillment.
        </p>
      </div>
      <div>
        <h2>No Additional Data Collection</h2>
        <p>
          We do not collect personal data beyond what Stripe and Printful handle
          during your purchase. However, for orders of The Cowboy’s Crusade
          comic book, information you provide to Stripe at checkout — including
          your name, shipping address, and email — will be securely accessed by
          MAE Comics in order to ship your comic directly to you. This process
          is separate from Printful’s fulfillment. We will not collect
          additional personal data for analytics, profiling, or marketing unless
          you explicitly opt in and provide it (for example, by subscribing or
          emailing us directly).
        </p>
      </div>
      <div>
        <h2>Security</h2>
        <p>
          We take reasonable steps to protect the information we maintain.
          However, no method of transmission or electronic storage is completely
          secure. Stripe and Printful have their own security measures for
          payment and fulfillment data.
        </p>
      </div>
      <div>
        <h2>Refunds and Returns</h2>
        <p>
          MAE Comics does not permit refunds. Please review product details
          carefully before purchasing. If you receive a defective or incorrect
          item, contact us at{" "}
          <a href="mailto:maecomic@gmail.com">maecomic@gmail.com</a> and we will
          work with you and the fulfillment provider to resolve the issue.
        </p>
      </div>
      <div>
        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. The "Effective
          date" at the top will reflect the most recent revision. Continued use
          of the site after changes constitutes acceptance of the revised
          policy.
        </p>
      </div>
      <div>
        <h2>Contact</h2>
        <p>
          If you have questions about this Privacy Policy, please contact us at{" "}
          <a href="mailto:maecomic@gmail.com">maecomic@gmail.com</a>.
        </p>
        <p className="small">
          Site owners: Mason Saunders and Eva Rosado. Site made by Jack
          Manfredi.
        </p>
      </div>
    </div>
  );
};

export default privacy;
