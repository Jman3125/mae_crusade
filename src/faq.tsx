import { useState } from "react";
import plus from "./assets/add.svg";
import minus from "./assets/remove.svg";

const faq = () => {
  const [showingAnswer1, showAnswer1] = useState(false);
  const [showingAnswer2, showAnswer2] = useState(false);
  const [showingAnswer3, showAnswer3] = useState(false);
  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <hr />
      <div
        className="faq-question"
        onClick={() => showAnswer1(!showingAnswer1)}
      >
        <div className="question-arrow">
          <h2>Is "The Cowboy's Crusade" a one off series?</h2>
          <img src={showingAnswer1 ? minus : plus} alt="drop-down" />
        </div>

        {showingAnswer1 && (
          <div>
            <h3>Answer:</h3>
            <p>
              No, "The Cowboy's Crusade" plans ot be an ongoing series with new
              issues as soon as possible.
            </p>
          </div>
        )}
      </div>

      <div
        className="faq-question"
        onClick={() => showAnswer2(!showingAnswer2)}
      >
        <div className="question-arrow">
          <h2>
            Will MAE Comics publish more series outside of "The Cowboy's
            Crusade"?
          </h2>
          <img src={showingAnswer2 ? minus : plus} alt="drop-down" />
        </div>

        {showingAnswer2 && (
          <div>
            <h3>Answer:</h3>
            <p>
              Yes, MAE Comics has many other comic book series in the works.
            </p>
          </div>
        )}
      </div>

      <div
        className="faq-question"
        onClick={() => showAnswer3(!showingAnswer3)}
      >
        <div className="question-arrow">
          <h2>What Makes MAE Comics different from other publishers?</h2>
          <img src={showingAnswer3 ? minus : plus} alt="drop-down" />
        </div>

        {showingAnswer3 && (
          <div>
            <h3>Answer:</h3>
            <p>
              We differentiate oursevles by telling original stories that have
              bold twists and real stakes for the characters in them.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default faq;
