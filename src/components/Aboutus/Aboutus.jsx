import React from "react";
import "./Aboutus.css";

const Aboutus = () => {
  return (
    <div className="about-us container">
      <h2>Get to Know Us</h2>
      <div className="grid">
        <div className="grid-col-1">
          <h2>About Us</h2>
          <p>
            Welcome to Pet EXPO, your one-stop destination for all things
            pet-related! At Pet EXPO, we understand that your pets are more than
            just animals; they are family.
          </p>
        </div>

        <div className="grid-col-span-2">
          <h2>Our Story</h2>
          <p>
            Pet EXPO was founded by a group of passionate pet lovers who saw a
            need for a comprehensive, caring, and reliable pet resource. With
            years of experience in pet care, our founders set out to create a
            place where pet owners could find everything they need.
          </p>
        </div>

        <div className="grid-col-span-2">
          <h2>Our Commitment</h2>
          <p>
            At Pet EXPO, we are committed to promoting the welfare of all pets.
            We work closely with rescue organizations, and veterinarians to
            support pet adoption and responsible pet ownership.{" "}
          </p>
        </div>

        <div className="grid-col-1">
          <h2>Join Us</h2>
          <p>
            We invite you to explore our website and discover the many ways Pet
            EXPO can enhance your pet's life.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
