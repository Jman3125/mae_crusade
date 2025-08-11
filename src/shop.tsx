import "./App.css";
import ItemGridCell from "./cells/ItemGridCell";
import { PresetData } from "./Models/PresetData";
import ComicImage from "./assets/comic-book.jpeg";

const item = () => {
  // Fetch all shirts from PresetData
  const items = PresetData.getAllPresets();

  return (
    <div className="shop_main">
      {/* <h1>The Cowboy's Crusade</h1> */}
      <div className="main_content">
        <img className="comic_img" src={ComicImage} alt="cowboy's crusade" />

        <div className="description_buy">
          <div>
            <h2>About</h2>
            <span>
              In a futuristic society built upon the idea of survival of the
              fittest, the world is run by champions. Divided into three
              categories; guns, material arts, and sword. A lone Cowboy sets out
              on a mysterious quest. Filled with action, mystery, and fun; the
              story of The Cowboy’s Crusade is only beginning and you won’t want
              to miss the start. <a href="/faq">More Info</a>
            </span>
          </div>
          <button
            onClick={() =>
              (window.location.href =
                "https://buy.stripe.com/4gM9AMgaCgT5062aIQ77O00")
            }
          >
            {"$5 - "}Buy Now
          </button>
        </div>
      </div>

      <h1>Apparel</h1>

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
