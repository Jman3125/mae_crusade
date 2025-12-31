import "./App.css";
import ItemGridCell from "./cells/ItemGridCell";
import { PresetData } from "./Models/PresetData";
import ComicImage from "./assets/comic-book.jpg";
import ComicImageSoldOut from "./assets/comic-book-soldout.png";
import variants from "./assets/variants.png";
const item = () => {
  // Fetch all shirts from PresetData
  const items = PresetData.getAllPresets();

  return (
    <div className="shop_main">
      <div className="main_content">
        <div className="shopimg-container">
          <img
            rel="preload"
            src={ComicImageSoldOut}
            alt="cowboy's crusade"
            fetchPriority="high"
          />
          <a href="#variants">Alternative Covers Available →</a>
        </div>

        <div className="description_buy">
          <div>
            <h1>Volume 1</h1>
            <h2>About</h2>
            <span>
              In a futuristic world built upon the idea of survival of the
              fittest, the Champions run society. A lone cowboy is on a
              mysterious quest—until he meets a man who changes everything. The
              story of <i>The Cowboy's Crusade</i> is only beginning, and you
              won't want to miss the start! <a href="/faq"> More Info.</a>
            </span>
          </div>
          <div className="button-policy">
            <button>{"SOLD OUT - Restock Soon!"}</button>
            <p>
              By continuing to purchase you agree to our{" "}
              <a href="/terms">Terms</a> and{" "}
              <a href="/privacy">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>

      <div className="variant-shop" id="variants">
        <img src={variants} alt="variants" />
        <div className="variant-info">
          <h1>Shop Limited Edition Variants.</h1>
          <button onClick={() => (document.location.href = "/variants")}>
            See More
          </button>
        </div>
      </div>

      <h1>APPAREL</h1>

      <div className="item_layout">
        {items.map((item) => (
          <ItemGridCell
            key={item.id}
            itemId={item.id}
            itemFront={item.item1}
            itemBack={item.item2 || ""}
            itemTitle={item.title}
            price={item.price}
            hasBack={item.hasBack}
          />
        ))}
      </div>
    </div>
  );
};

export default item;
