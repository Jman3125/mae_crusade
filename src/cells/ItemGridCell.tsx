import { useState } from "react";

interface Props {
  itemId: string;
  itemFront: string;
  itemBack: string;
  itemTitle: string;
  price: number;
  hasBack: boolean;
}

const ItemCell = ({
  itemFront,
  itemBack,
  itemTitle,
  price,
  itemId,
  hasBack,
}: Props) => {
  // useState to toggle between front and back of the item
  const [showFront, showingFront] = useState(true);

  return (
    <div className="item_cell">
      <img
        src={showFront ? itemFront : itemBack}
        alt="front_item"
        className="item_img"
      />
      {/* Renders arrows to switch to the back image if hasBack is true */}
      {hasBack && (
        <img
          onClick={() => showingFront(!showFront)}
          src={
            showFront
              ? "src/assets/arrow_right.svg"
              : "src/assets/arrow_left.svg"
          }
          alt="arrow"
          className={showFront ? "arrow_grid_right" : "arrow_grid_left"}
        />
      )}
      <div className="price_title">
        <h3>{itemTitle}</h3>
        <h3>
          {"$"}
          {price}
        </h3>
      </div>
      <button
        className="purchase_button"
        onClick={() => (document.location.href = `/item/${itemId}`)}
      >
        View
      </button>
    </div>
  );
};

export default ItemCell;
