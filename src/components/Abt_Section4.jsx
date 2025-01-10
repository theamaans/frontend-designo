import React from "react";

const Abt_Section4 = () => {
  const awards = [
    {
      platform: "Awards",
      description: "Developer Award, Site of the Day, Honorable Mention",
      count: "08 Awards",
    },
    {
      platform: "CSS Design Awards",
      description: "Website of the Day, Special Kudos",
      count: "06 Awards",
    },
    {
      platform: "Behance",
      description: "Featured UX/UI and XD Design",
      count: "04 Awards",
    },
    {
      platform: "CSS Light",
      description: "Featured Website, Featured Design",
      count: "12 Awards",
    },
    {
      platform: "FWA Awards",
      description: "FWA of the day, FWA of the month",
      count: "04 Awards",
    },
    {
      platform: "One Page Love",
      description: "Site of the Day",
      count: "10 Awards",
    },
    {
      platform: "SiteInspire",
      description: "Featured Website",
      count: "08 Awards",
    },
    {
      platform: "CSS Winner",
      description: "Site of the Day, Special Mention",
      count: "12 Awards",
    },
  ];

  return (
    <div className="awards-section">
      {/* Title */}
      <h2 className="section-title">
        <span className="highlighted-text">MORE AWARDS</span>
      </h2>

      {/* Awards List */}
      <div className="awards-list">
        {awards.map((award, index) => (
          <div
            key={index}
            className="award-item"
          >
            <h3 className="award-platform">{award.platform}</h3>
            <p className="award-description">{award.description}</p>
            <span className="award-count">{award.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Abt_Section4;
