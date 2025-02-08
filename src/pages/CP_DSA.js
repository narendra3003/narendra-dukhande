import React from "react";
import "../assets/styles/CP_DSA.css";

const codingProfiles = [
  {
    name: "Codolio Profile Card",
    link: "https://codolio.com/profile/narendra3003/card",
    imgSrc: "data:image/jpeg;base64,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",
    alt: "Codolio",
    featured: true,
  },
  {
    name: "LeetCode",
    link: "https://leetcode.com/u/Narendra_3003/",
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
    alt: "LeetCode",
  },
  {
    name: "Codeforces",
    link: "https://codeforces.com/profile/Narendra_3003",
    imgSrc: "https://sta.codeforces.com/s/66472/images/codeforces-logo-with-telegram.png",
    alt: "Codeforces",
  },
  {
    name: "CodeChef",
    link: "https://www.codechef.com/users/narendra3003",
    imgSrc: "https://image.pngaaa.com/134/6179134-middle.png",
    alt: "CodeChef",
  },
  {
    name: "GeeksforGeeks",
    link: "https://www.geeksforgeeks.org/user/narendra_3003/",
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg",
    alt: "GeeksforGeeks",
  },
  {
    name: "Naukri 360",
    link: "https://www.naukri.com/code360/profile/6af8d9f2-9c02-4ea6-8b3a-c19ee3982659",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbRWFMWR0ZVJByGadksSMu-4evEfgQfORMEg&s",
    alt: "Naukri 360",
  },
  {
    name: "InterviewBit",
    link: "https://www.interviewbit.com/profile/narendra-3003/",
    imgSrc: "data:image/jpeg;base64,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wWxTUR6ZrY873TtrbxiWQl0zHN1Dc3LTp+ggsVJhcdLNNMxzy+fLnBdcDKDazeFE/s8qGihiBe295NCRf+I62iYGP+o4h7qf/wCHLR6BwKlqqSKZ9PG6QOcc5HnXbIcpv7LD5ILwiBEBERAREQEREBERBzmOkl/fZf4cmTMXZsrsuXwLXzWta+izhdHK3GpHmOQNzSHMWnLYssDm21uF0SyZUHO/2k0ctRU05jikeMtrta5wvnGlwNFjrzD6iCsiq4onSNZ4Z80F1nRvzWcG62Itqui2SyChVEtR1tSStNOYnwvY5l7gPNnXaMwFja/s1HtURhePfuiMQVGGZ5I9ASwAntmu0k+8Lqlksg5/i0lRieFvL6TwneIwtjYwi7MzTmybjc/K6sHQUDoKCFr2ua76Q2cCDYyvI0O2hB+KsFllBTf2mYSayBszAS+nOttyx2h+RsfmtP8AZjhjrS1Uty6Q5Wk72vme7Xe5t/Sr6RdALIOetpJBjmfw5Mly7NlOW3k+W+a1t9FG1NFN0pVvkdS+PDIXWJbmGVzsw1scrxtrvr3XVLJZBRun8efiVSwQYayOPXPJlsQLHUPAA3tpqVoftPw10EkdTGHeeDG4tvo4XynTu0kf+q6RZCLoOV9Q9OuwyipZWNcJGXEtr3vKM2tu2rfird+z7C/3bSNLhZ8/0jr6Gx9Af02+ZVmypZBROnccZgvlDJoqm7qmZ4ywvcMpIAN7ewrZE8nU9VA9kEscFI5zy+RuQveRYBrTxp+PsvcrJZBWsEic3EK8lrg1wp7OIIBsx17HlR/SmInAmNo54agPa9zQ4RudG4OeSHB40tqrrZLIAWURAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREH/9k=",
    alt: "InterviewBit",
  },
  {
    name: "HackerRank",
    link: "https://www.hackerrank.com/profile/Narendra_3003",
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png",
    alt: "HackerRank",
  },
  {
    name: "AtCoder",
    link: "https://atcoder.jp/users/narendra3003",
    imgSrc: "https://img.atcoder.jp/assets/atcoder.png",
    alt: "AtCoder",
  },
];

const CP_DSA = () => {
  return (
    <div className="cp-dsa-container">
      <h2 style={{ textAlign: "center", color: "white" }} className="section-title">Competitive Programming & DSA Profiles</h2>

      {/* Featured Codolio Profile Card */}
      <div className="featured-card">
        <a
          href={codingProfiles[0].link}
          target="_blank"
          rel="noopener noreferrer"
          className="featured-card-link"
        >
          <img
            src={codingProfiles[0].imgSrc}
            alt={codingProfiles[0].alt}
            className="featured-img"
          />
          <p>Check out my Codolio Profile Card</p>
        </a>
      </div>

      {/* Other Coding Profiles */}
      <div className="profile-grid">
        {codingProfiles.slice(1).map((profile, index) => (
          <a
            key={index}
            href={profile.link}
            target="_blank"
            rel="noopener noreferrer"
            className="profile-card"
          >
            <img src={profile.imgSrc} alt={profile.alt} className="profile-img" />
            <p>{profile.name}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CP_DSA;
