import React from "react";

const EducationCard = ({ institution, degree, duration, location, details }) => {
  return (
    <div className="education-card">
      <h3 className="institution">{institution}</h3>
      <p>{degree}</p>
      <p><strong>Duration:</strong> {duration}</p>
      <p><strong>Location:</strong> {location}</p>
      {details && <p><strong>Details:</strong> {details}</p>}
    </div>
  );
};

export default EducationCard;
