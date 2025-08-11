import { PresetData } from "./Models/PresetData.ts";
import "./App.css";
import { useState } from "react";
import arrowLeft from "./assets/arrow_left.svg";
import arrowRight from "./assets/arrow_right.svg";
import closedCircle from "./assets/closed_circle.svg";
import openCircle from "./assets/open_circle.svg";
import { useNavigate } from "react-router-dom";
import { GetPaymentLink } from "./Models/PayLink.ts";
import infoIcon from "./assets/info.svg";

const ItemView = () => {
  // Extract the item ID from the URL
  const itemId = window.location.pathname.split("/").pop();
  // Fetch the item data based on the ID
  const allPresets = PresetData.getAllPresets();
  // Find the item data that matches the ID
  const itemData = allPresets.find((preset) => preset.id === (itemId || ""));
  // State to manage the main item image url defaults to front image
  const [mainitemSRC, setMainItemSRC] = useState<string | null>(
    itemData?.item1 || null
  );
  // State to handle info showing
  const [showNotice, setShowNotice] = useState(false);
  //State to show info popup
  const showInfo = () => {
    setShowNotice(true);
    // Auto-hide after 3 seconds
    setTimeout(() => setShowNotice(false), 6000);
  };
  // State to manage arrow visibility for mobile view
  // This is used to toggle between front and back item images
  // This also manages dots indicating page number
  const [showFront, showingFront] = useState(true);
  // State to manage the selected size
  const [size, setSize] = useState<string | null>(null); // Default size
  // Function to handle size selection
  const handleSizeChange = (newSize: string) => {
    setSize(newSize);
  };
  // Use navigate from react-router-dom to handle navigation
  const [errorMessage, setErrorMessage] = useState(false);
  // This function is called when the user clicks the buy button
  const navigate = useNavigate();
  // Function to toggle the main item image between front and back
  const toggleMain = () => {
    // Toggle between front and back item images
    if (mainitemSRC === itemData?.item1) {
      setMainItemSRC(itemData?.item2 ?? null);
    } else {
      setMainItemSRC(itemData?.item1 ?? null);
    }
    showingFront(!showFront);
    // Toggle the page number
  };

  const purchaseItem = () => {
    // If itemData.showSize is false, we don't need to check for size
    if (itemData?.showSize === false) {
      console.log(`Purchasing item with ID: ${itemId}`);
      window.location.href = GetPaymentLink(itemId!, "") ?? "";
      return;
    }
    // If size is not selected, show an error message
    if (!size) {
      setErrorMessage(true);
      return;
    }
    // If size is selected, proceed to payment link
    console.log(`Purchasing item with ID: ${itemId}, Size: ${size}`);
    window.location.href = GetPaymentLink(itemId!, size) ?? "";
  };

  return (
    <div className="item_view_container">
      <div className="item_view_content">
        <div className="item_header" onClick={() => navigate("/")}>
          <img src={arrowLeft} alt="return" />
          <h1>{itemData?.title}</h1>
        </div>
        <div className="item_view">
          <div className="image_options">
            <img
              src={itemData?.item1}
              alt="item front"
              className={showFront ? "image_selected" : "image_unselected"}
              onClick={() => toggleMain()}
            />

            {itemData?.hasBack && (
              <img
                src={itemData?.item2}
                alt="item back"
                className={showFront ? "image_unselected" : "image_selected"}
                onClick={() => toggleMain()}
              />
            )}
          </div>
          {/* Conditional rendering of arrows based on item back availability */}
          {itemData?.hasBack && (
            <img
              onClick={() => toggleMain()}
              src={showFront ? arrowRight : arrowLeft}
              alt="arrow_right"
              className={showFront ? "arrow_main_right" : "arrow_main_left"}
            />
          )}

          <img
            src={mainitemSRC ?? undefined}
            alt="item"
            className="main_item"
          />
        </div>
        {/* Conditional rendering of pagination dots based on item back availability */}
        {itemData?.hasBack && (
          <div className="item_pagination">
            <img
              src={showFront ? closedCircle : openCircle}
              alt="firstcircle"
            />
            <img
              src={showFront ? openCircle : closedCircle}
              alt="secondcircle"
            />
          </div>
        )}
        {itemData?.showSize && (
          <div className="title_sizes">
            <h3>Size:</h3>
            <div className="item_sizes">
              <h2
                onClick={() => handleSizeChange("S")}
                className={size == "S" ? "size_option_selected" : "size_option"}
              >
                S
              </h2>
              <h2
                onClick={() => handleSizeChange("M")}
                className={size == "M" ? "size_option_selected" : "size_option"}
              >
                M
              </h2>
              <h2
                onClick={() => handleSizeChange("L")}
                className={size == "L" ? "size_option_selected" : "size_option"}
              >
                L
              </h2>
              <h2
                onClick={() => handleSizeChange("XL")}
                className={
                  size == "XL" ? "size_option_selected" : "size_option"
                }
              >
                XL
              </h2>
            </div>
          </div>
        )}

        <div className="item_details">
          <div className="description-info">
            <div>
              <h3>{itemData?.description}</h3>
            </div>
            {showNotice && (
              <div className="purchase-notice">
                <p>All purchases are final.</p>
                <hr />
                <p className="small">
                  Purchases are made on a trusted third-party site.
                </p>
              </div>
            )}
            <img src={infoIcon} alt="info" onClick={() => showInfo()} />
          </div>

          {errorMessage && (
            <h3 className="purchase_error">Please Select a Size</h3>
          )}
          <button className="main_button" onClick={() => purchaseItem()}>
            ${itemData?.price} - Buy Now
          </button>
          <p>
            By continuing to purchase you agree to our{" "}
            <a href="/terms">Terms</a> and <a href="/policy">Conditions</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItemView;
