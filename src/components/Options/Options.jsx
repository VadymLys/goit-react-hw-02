import css from "../Options/Options.module.css";
import clsx from "clsx";

const Options = ({ onReset, hasFeedback, changeFeedback }) => {
  return (
    <div>
      <button
        onClick={() => {
          changeFeedback("good");
        }}
      >
        Good
      </button>
      <button
        onClick={() => {
          changeFeedback("neutral");
        }}
      >
        Neutral
      </button>
      <button
        onClick={() => {
          changeFeedback("bad");
        }}
      >
        Bad
      </button>
      {hasFeedback > 0 && <button onClick={onReset}>Reset</button>}
    </div>
  );
};

export default Options;
