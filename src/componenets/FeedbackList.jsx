import React from "react";

const FeedbackList = ({ feedbacks }) => {
  return (
    <div className="feedback-list">
      <h3>Feedbacks</h3>
      <ul>
        {feedbacks.map((feedback) => (
          <li key={feedback.id}>
            <strong>{feedback.teacherName}</strong>
            <p>Aspect: {feedback.aspect}</p>
            <p>Rating: {feedback.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackList;