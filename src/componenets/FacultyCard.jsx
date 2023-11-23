import React from "react";

const FacultyCard = ({ teacher, onFeedbackSubmit }) => {
  const aspects = ["Knowledge", "Teaching Style", "Communication", "Punctuality"];

  const handleFeedbackSubmit = (aspect, rating) => {
    onFeedbackSubmit({
      teacherId: teacher.id,
      aspect,
      rating,
    });
  };

  return (
    <div className="teacher-card">
      <h2>{teacher.name}</h2>
      <p>Select a rating for each aspect:</p>
      {aspects.map((aspect) => (
        <div key={aspect}>
          <p>{aspect}:</p>
          {[1, 2, 3, 4, 5].map((rating) => (
            <button key={rating} onClick={() => handleFeedbackSubmit(aspect, rating)}>
              {rating}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};


export default FacultyCard;