import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import HeroSection from "./HeroSection";
import TrendingNow from "./TrendingNow";
import FeatureGrid from "./FeatureGrid";
import Future from "./Future";
import FAQ from "./FAQ";
import MovieDetails from "./MovieDetails";
import Footer from "./Footer";
import Login from "./Login";
import Signup from "./Signup";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <HeroSection />
              <TrendingNow />
              <Future />
              <FAQ />
              <Footer />
            </>
          } />
          <Route path="/movie" element={<MovieDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
