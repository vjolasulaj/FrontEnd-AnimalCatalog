import React from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import Explorecatalog from "../../components/ExploreCatalog/Explorecatalog";
import Aboutus from "../../components/Aboutus/Aboutus";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <div>
      <Header />
      <Explorecatalog />
      <Aboutus />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
