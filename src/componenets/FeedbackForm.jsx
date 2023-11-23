import React, { useState } from "react";

const FeedbackForm = ({ faculty, onSubmit }) => {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ facultyId: faculty.id, comment, rating });
    setComment("");
    setRating(0);
  };

  return (
    <h1></h1>
    // <form onSubmit={handleSubmit}>
    //   <h3>Provide Feedback for {faculty.name}</h3>
    //   <div>
    //     <label>Comment:</label>
    //     <textarea
    //       value={comment}
    //       onChange={(e) => setComment(e.target.value)}
    //     />
    //   </div>
    //   <div>
    //     <label>Rating:</label>
    //     <input
    //       type="number"
    //       value={rating}
    //       onChange={(e) => setRating(e.target.value)}
    //     />
    //   </div>
    //   <button type="submit">Submit Feedback</button>
    // </form>
  );
};

export default FeedbackForm;