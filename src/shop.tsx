import "./App.css";
import ShirtCell from "./cells/ShirtCell.tsx";

const item = () => {
  return (
    <div className="shop_main">
      {/* <h1>The Cowboy's Crusade</h1> */}
      <div className="main_content">
        <img
          className="comic_img"
          src="src/assets/comic-book.png"
          alt="cowboy's crusade"
        />

        <div className="description_buy">
          <div>
            <h2>About</h2>
            <span>
              Mammals don't lay eggs as their primary method of reproduction due
              to evolutionary adaptations favoring internal development and live
              birth. While some mammals, like platypuses and echidnas, are
              monotremes and still lay eggs, the vast majority of mammals have
              evolved to gestate their young internally, nourishing them through
              a placenta. This shift offers advantages like a more protected
              environment for development and the ability to move freely during
              pregnancy.{" "}
            </span>
          </div>

          <button>{"$5 - "}Buy Now</button>
        </div>
      </div>

      <h1>Apparel</h1>

      <div className="shirt_layout">
        <ShirtCell
          shirtFront={"src/assets/shirt_1.webp"}
          shirtBack={"src/assets/shirt_back.avif"}
          shirtTitle={"Light dark mens T"}
          price={15}
        />
        <ShirtCell
          shirtFront={"src/assets/shirt_1.webp"}
          shirtBack={"src/assets/shirt_back.avif"}
          shirtTitle={"Light dark mens T"}
          price={15}
        />
        <ShirtCell
          shirtFront={"src/assets/shirt_1.webp"}
          shirtBack={"src/assets/shirt_back.avif"}
          shirtTitle={"Light dark mens T"}
          price={15}
        />
        <ShirtCell
          shirtFront={"src/assets/shirt_1.webp"}
          shirtBack={"src/assets/shirt_back.avif"}
          shirtTitle={"Light dark mens T"}
          price={15}
        />
        <ShirtCell
          shirtFront={"src/assets/shirt_1.webp"}
          shirtBack={"src/assets/shirt_back.avif"}
          shirtTitle={"Light dark mens T"}
          price={15}
        />
      </div>
    </div>
  );
};

export default item;
