import React from "react";
import "./FeatureGrid.css";

const features = [
  {
    title: "Enjoy on your TV",
    desc: "Watch on smart TVs, PlayStation, Xbox, Apple TV, and more.",
    icon: "🖥️",
  },
  {
    title: "Download your shows to watch offline",
    desc: "Save your favourites easily.",
    icon: "⬇️",
  },
  {
    title: "Watch everywhere",
    desc: "Stream on your phone, tablet, laptop and TV.",
    icon: "📱",
  },
  {
    title: "Create profiles for kids",
    desc: "Send kids on adventures with their favourite characters.",
    icon: "🧒",
  },
];

function FeatureGrid() {
  return (
    <div className="feature-grid">
      <h2>More reasons to join</h2>
      <div className="grid">
        {features.map((feature, i) => (
          <div className="feature-card" key={i}>
            <div className="icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeatureGrid;
