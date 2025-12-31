import variant_1 from "./assets/variant_1.jpeg";
import variant_2 from "./assets/variant_2.jpeg";
import variant_2_sold_out from "./assets/variant_2_sold_out.png";
import VariantCell from "./cells/VariantCell";

const variants = () => {
  return (
    <div className="variants-container">
      <h1 className="variants-header">LIMITED TIME VARIANTS</h1>
      <h2>
        Volume 1 of <i>The Cowboy's Crusade</i> Alternative Covers
      </h2>
      <div className="variants-main">
        {/* swichting variant order because variant 1 is coming soon */}
        <VariantCell
          imageSrc={variant_2_sold_out}
          shop_url="https://buy.stripe.com/bJefZa1fI7iv0624ks77O0b"
          comingSoon={false}
          soldOut={true}
        />
        {/* Coming soon */}
        <VariantCell
          imageSrc={variant_1}
          shop_url=" "
          comingSoon={true}
          soldOut={false}
        />
      </div>
      <h3>
        Variants are exclusive and have limited stock, buy while you still can!
      </h3>
      <p>
        By continuing to purchase you agree to our <a href="/terms">Terms</a>{" "}
        and <a href="/privacy">Privacy Policy</a>
      </p>
    </div>
  );
};

export default variants;
