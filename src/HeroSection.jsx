import React from "react";
import { useNavigate } from "react-router-dom";
import './HeroSection.css';

function HeroSection() {
  const navigate = useNavigate();
  return (
    <div className="hero">
      <div className="overlay" />
      <div className="hero-content">
        <h1>Unlimited movies, TV shows and more</h1>
        <h2>Starts at ₹149. Cancel at any time.</h2>
        <button className="signup-btn" onClick={() => navigate('/signup')}>Finish Sign-Up</button>
      </div>
    </div>
  );
}

export default HeroSection;
