import React from "react";
import Navbar from "./Navbar";
import aboutimg from "./assets/about-hero.png";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <Navbar />

      <img src={aboutimg} alt="" className="about-hero" />

      <div className="about-page-content">
        <h1>Don't squeeze in a sedan when you could relax in a van.</h1>

        <p className="first-p">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>

        <p className="second-p">
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>

        <div className="cta">
          <h2>
            Your destination is waiting.
            <br />
            Your van is ready.
          </h2>
          <Link className="link-button" to="/vans">
            Explore our vans
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
