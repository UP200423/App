import React from "react";
import Hero from "../../components/Hero/Hero.jsx";
import Container from "../../components/Card_container/Card_Container.jsx";
import "./HomePage.css";

function HomePage() {
  return (
    <>

      <Hero/>
      <div className="Back">
      <Container/>
      </div>
    </>
  );
}

export default HomePage;
