import React, { useState } from "react";
import FacultyCard from "./componenets/FacultyCard";
import FeedbackList from "./componenets/FeedbackList";

const App = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  const handleFeedbackSubmit = (feedback) => {
    setFeedbacks([...feedbacks, feedback]);
    // Here, you would typically send the feedback to the backend API
    // using a fetch or axios.
  };

  const teachers = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    // Add more teachers as needed
  ];

  return (
    <div className="app">
      <h1>Teacher Feedback System</h1>
      <div className="teacher-container">
        {teachers.map((teacher) => (
          <FacultyCard key={teacher.id} teacher={teacher} onFeedbackSubmit={handleFeedbackSubmit} />
        ))}
      </div>
      <FeedbackList feedbacks={feedbacks} />
    </div>
  );
};

export default App;
