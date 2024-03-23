import React, { useState, useEffect } from "react";
import "../Feedback/Feedback";
import "../Options/Options";
import "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Description from "../Description/Description";

const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  useEffect(() => {
    const storedFeedback = window.localStorage.getItem("feedback");
    if (storedFeedback) {
      setFeedback(JSON.parse(storedFeedback));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const changeFeedback = (type) => {
    console.log(type);
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };

  const handleReset = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const positivePercentage = Math.round(
    ((feedback.good + feedback.neutral) / totalFeedback) * 100
  );
  console.log(feedback);
  return (
    <div className="container">
      <Description />
      <Options
        onReset={handleReset}
        changeFeedback={changeFeedback}
        hasFeedback={totalFeedback > 0}
      />
      {totalFeedback > 0 ? (
        <Feedback
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          totalFeedback={totalFeedback}
          positivePercentage={positivePercentage}
        />
      ) : (
        <p>No feedback yet</p>
      )}
    </div>
  );
};
export default App;
