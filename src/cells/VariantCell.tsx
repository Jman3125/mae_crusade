import React from "react";

interface Props {
  imageSrc: string;
  shop_url: string;
  comingSoon: boolean;
  soldOut: boolean;
}

const VariantCell = ({ imageSrc, shop_url, comingSoon, soldOut }: Props) => {
  return (
    <div className="variant">
      <img src={imageSrc} alt="Variant_1" />
      <div className="variant-desc">
        <h2 className="stock-variant">
          {soldOut && "Sold Out"}
          {soldOut == false && comingSoon == false && "Less than 5 in stock"}
          {soldOut == false && comingSoon && "Coming Soon"}
        </h2>
        {comingSoon == false && <h2>$8</h2>}
      </div>
      {soldOut == false && comingSoon == false && (
        <button onClick={() => (document.location.href = shop_url)}>
          Buy Now
        </button>
      )}
      {soldOut && <button>Sold Out</button>}
    </div>
  );
};

export default VariantCell;
