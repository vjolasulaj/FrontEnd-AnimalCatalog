import React, { useEffect, useRef, useState } from "react";
import "./Admin.css";
import DogTable from "./DogTable";
import CatTable from "./CatTable";
import BirdTable from "./BirdTable";

const Admin = () => {
  const [animalType, setAnimalType] = useState("dogs");
  function getComponent() {
    if (animalType === "dogs") {
      return <DogTable />;
    } else if (animalType === "cats") {
      return <CatTable />;
    } else if (animalType === "birds") {
      return <BirdTable />;
    } else return null;
  }
  return (
    <div className="admin-layout container">
      <div className="sidebar">
        <div className="radio-container">
          <input
            type="radio"
            onChange={() => setAnimalType("dogs")}
            name="animal"
            id="dogs"
            checked={animalType === "dogs"}
          />
          <label htmlFor="dogs">Dogs</label>
        </div>
        <div className="radio-container">
          <input
            type="radio"
            onChange={() => setAnimalType("cats")}
            name="animal"
            id="cats"
            checked={animalType === "cats"}
          />
          <label htmlFor="cats">Cats</label>
        </div>
        <div className="radio-container">
          <input
            type="radio"
            onChange={() => setAnimalType("birds")}
            name="animal"
            id="birds"
            checked={animalType === "birds"}
          />
          <label htmlFor="birds">Birds</label>
        </div>
      </div>
      {getComponent()}
    </div>
  );
};

export default Admin;
