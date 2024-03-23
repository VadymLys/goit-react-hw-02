import css from "../Feedback/FeedBack.module.css";

const Feedback = (good, neutral, bad, totalFeedback, positivePercentage) => {
  return (
    <div className="feedback">
      <h2></h2>
      <p>Good:{good}</p>
      <p>Neutral:{neutral}</p>
      <p>Bad:{bad}</p>
      <p>Good:{totalFeedback}</p>
      <p>Positive:{positivePercentage}%</p>
    </div>
  );
};
export default Feedback;
