import { useState } from "react";

interface Props {
  shirtFront: string;
  shirtBack: string;
  shirtTitle: string;
  price: number;
}

const ShirtCell = ({ shirtFront, shirtBack, shirtTitle, price }: Props) => {
  const [showFront, showingFront] = useState(true);
  return (
    <div className="shirt_cell">
      <img
        src={showFront ? shirtFront : shirtBack}
        alt="front_shirt"
        className="shirt_img"
      />

      <div className="arrow_buttons">
        <button onClick={() => showingFront(!showFront)}>
          <img src="src/assets/arrow_left.svg" alt="arrow_left" />
        </button>
        <button onClick={() => showingFront(!showFront)}>
          <img src="src/assets/arrow_right.svg" alt="arrow_right" />
        </button>
      </div>
      {/* <div className="size_chart">
        <span>S</span>
        <span>M</span>
        <span>L</span>
        <span>XL</span>
      </div> */}
      <div className="price_title">
        <h3>{shirtTitle}</h3>
        <h3>
          {"$"}
          {price}
        </h3>
      </div>
      <button className="purchase_button">View</button>
    </div>
  );
};

export default ShirtCell;
