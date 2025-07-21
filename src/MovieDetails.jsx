import React from "react";
import { useLocation } from "react-router-dom";
import "./TrendingNow.css";
import Footer from "./Footer";

function MovieDetails() {
  const location = useLocation();
  const movie = location.state?.movie;

  if (!movie) {
    return <div className="trending-section">No movie data found.</div>;
  }

  const goBack = () => window.history.back();

  return (
    <div className="trending-section" style={{ padding: "16px", boxSizing: "border-box", background: "#181818", minHeight: "100vh" }}>
      <button onClick={goBack} style={{ marginBottom: 24, padding: "8px 16px", fontSize: "1rem", background: "#b30000", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>
        &larr; Back
      </button>
      <h2 style={{ fontSize: "2rem", marginBottom: 16 }}>{movie.Title}</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "32px",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <img
          src={movie.Poster}
          alt={movie.Title}
          style={{ width: "100%", maxWidth: 240, borderRadius: 12, marginBottom: 16 }}
        />
        <div style={{ minWidth: 220, maxWidth: 400 }}>
          <p><strong>Year:</strong> {movie.Year}</p>
          <p><strong>Genre:</strong> {movie.Genre}</p>
          <p><strong>Director:</strong> {movie.Director}</p>
          <p><strong>Actors:</strong> {movie.Actors}</p>
          <p><strong>Plot:</strong> {movie.Plot}</p>
        </div>
      </div>
      {/* Movie Trailer Embed */}
      <div style={{ marginTop: 40 }}>
        <h3 style={{ fontSize: "1.25rem", marginBottom: 12 }}>Trailer</h3>
        <div style={{ position: "relative", width: "100%", maxWidth: 560, margin: "0 auto" }}>
          <iframe
            width="100%"
            height="315"
            src={`https://www.youtube.com/embed?listType=search&list=${encodeURIComponent(movie.Title + ' trailer')}`}
            title="YouTube trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ borderRadius: 12, width: "100%", minHeight: 200, maxWidth: 560 }}
          ></iframe>
        </div>
      </div>
      {/* Responsive styles */}
      <style>{`
        @media (max-width: 700px) {
          .trending-section h2 {
            font-size: 1.3rem;
          }
          .trending-section > div {
            flex-direction: column !important;
            gap: 16px !important;
            align-items: center !important;
          }
          .trending-section img {
            max-width: 90vw !important;
            width: 100% !important;
          }
          .trending-section iframe {
            max-width: 100vw !important;
            min-height: 180px !important;
          }
        }
      `}</style>
      <Footer />
    </div>
  );
}

export default MovieDetails;
