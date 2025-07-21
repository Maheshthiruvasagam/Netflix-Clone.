import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./TrendingNow.css";

const API_KEY = "55a41b6d";

function OMDBTrending() {
  const [movies, setMovies] = useState([]);

  const searchList = [
    "batman",
    "avengers",
    "Spider-Man",
    "inception",
    "joker",
    "interstellar",
    "matrix",
    "godfather",
    "parasite",
    "forrest gump",
    "iron man",
    "black panther"
  ];

  useEffect(() => {
    const fetchData = async () => {
      const results = await Promise.all(
        searchList.map((title) =>
          axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&t=${title}`)
        )
      );
      setMovies(results.map((res) => res.data));
    };

    fetchData();
  }, []);

  // Ref for scrolling
  const carouselRef = React.useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };
  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const navigate = useNavigate();

  const handleCardClick = (movie) => {
    navigate("/movie", { state: { movie } });
  };

  return (
    <div className="trending-section">
      <h2>Trending Now</h2>
      <div style={{ display: "flex", alignItems: "center" }}>
        <button className="arrow-btn" onClick={scrollLeft}>&lt;</button>
        <div className="omdb-carousel" ref={carouselRef} style={{ flex: 1 }}>
          {movies.map((movie, index) => (
            <div key={index} className="omdb-card" onClick={() => handleCardClick(movie)} style={{ cursor: "pointer" }}>
              <img src={movie.Poster} alt={movie.Title} />
              <p>{movie.Title}</p>
              <span>{movie.Year}</span>
            </div>
          ))}
        </div>
        <button className="arrow-btn" onClick={scrollRight}>&gt;</button>
      </div>
    </div>
  );
}

export default OMDBTrending;
