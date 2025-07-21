import React from "react";
import "./FeatureGrid.css";

const features = [
  {
    icon: "🎬",
    title: "Unlimited Movies",
    description: "Watch as much as you want, anytime you want."
  },
  {
    icon: "📱",
    title: "Watch Anywhere",
    description: "Stream on your phone, tablet, laptop, and TV."
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "For Everyone",
    description: "Enjoy content for kids, teens, and adults."
  },
  {
    icon: "💾",
    title: "Download & Go",
    description: "Save your favorites and watch offline."
  }
];

function FeatureGrid() {
  return (
    <div className="feature-grid">
      <h2>Features</h2>
      <div className="grid">
        {features.map((feature, idx) => (
          <div className="feature-card" key={idx}>
            <div className="icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeatureGrid;
