import React from "react";

interface Props {
  imageSrc: string;
  shop_url: string;
  comingSoon: boolean;
}

const VariantCell = ({ imageSrc, shop_url, comingSoon }: Props) => {
  return (
    <div className="variant">
      <img src={imageSrc} alt="Variant_1" />
      <div className="variant-desc">
        <h2 className="stock-variant">
          {comingSoon == false && "Less than 5 in stock"}
          {comingSoon && "Coming Soon"}
        </h2>
        {comingSoon == false && <h2>$8</h2>}
      </div>
      {comingSoon == false && (
        <button onClick={() => (document.location.href = shop_url)}>
          Buy Now
        </button>
      )}
    </div>
  );
};

export default VariantCell;
