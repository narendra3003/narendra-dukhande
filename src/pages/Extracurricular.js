import React from "react";
import "../assets/styles/extracurricular.css";

const extracurriculars = [
  {
    title: "Design Team Core Member - DOMAIN Club",
    duration: "Oct 2023 - Mar 2024",
    achievements: [
      "Poster making",
      "Instagram handling",
      "Taught juniors in workshops",
      "Organized quiz competitions",
    ],
    link: "https://www.instagram.com/domain_dbit",
  },
  {
    title: "DSA Expert - Google Developers Group",
    duration: "Sept 2024 - Present",
    achievements: [
      "Solving DSA problems",
      {
        text: "Mentoring juniors in DSA and Competitive Programming",
        link: "https://www.youtube.com/watch?v=cg6h2Bzx2xQ&list=PLThUWR8Z9R_S1wIR8LLxs7_SRk5jrN9M5",
      },
    ],
    link: "https://www.instagram.com/gdgc.dbit",
  },
];

const Extracurricular = () => {
  return (
    <div className="extracurriculars-container">
      <h2 style={{ textAlign: "center", color: "white" }} className="section-title">Extracurricular Experience</h2>
      {extracurriculars.map((item, index) => (
        <div key={index} className="extracurricular-item">
          {/* Clickable Title */}
          <h3>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
          </h3>
          <p>
            <strong>Duration:</strong> {item.duration}
          </p>
          <ul>
            {item.achievements.map((achievement, idx) =>
              typeof achievement === "string" ? (
                <li key={idx}>{achievement}</li>
              ) : (
                <li key={idx}>
                  <a href={achievement.link} target="_blank" rel="noopener noreferrer">
                    {achievement.text}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Extracurricular;
