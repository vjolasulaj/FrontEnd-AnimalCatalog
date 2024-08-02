import React, { useEffect, useRef, useState } from "react";
import "./Gallery.css";
import AnimalCard from "../../components/AnimalCard/AnimalCard";
import { useLocation } from "react-router-dom";
import Searchbar from "../../components/Searchbar/Searchbar";

const Gallery = () => {
  const [animals, setAnimals] = useState([]);
  const [animalType, setAnimalType] = useState("dogs");
  const location = useLocation();
  const [searchValue, setSearchValue] = useState("");
  const ref = useRef();
  const [openModal, setOpenModal] = useState(false);
  const [selectedAnimal, setSelectedAnimal] = useState({});
  let title = "";

  useEffect(() => {
    if (openModal) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [openModal]);

  if (animalType === "dogs") {
    title = "Gallery of Dogs";
  } else if (animalType === "cats") {
    title = "Gallery of Cats";
  } else if (animalType === "birds") {
    title = "Gallery of Birds";
  }

  useEffect(() => {
    const searchParam = new URLSearchParams(location.search);
    setSearchValue(searchParam.get("search"));
  }, [location.search]);

  useEffect(() => {
    let url = "";
    if (animalType === "dogs") {
      url = `${process.env.BACKEND_URL}/dogs`;
    } else if (animalType === "cats") {
      url = `${process.env.BACKEND_URL}/cats`;
    } else if (animalType === "birds") {
      url = `${process.env.BACKEND_URL}/birds`;
    }

    if (searchValue) {
      fetch(url + "/search?name=" + searchValue, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((response) => setAnimals(response));
    } else {
      fetch(url, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((response) => setAnimals(response));
    }
  }, [searchValue, animalType]);

  return (
    <div className="container">
      <div className="c-container">
        <div className="gallery-layout">
          <div className="sidebar">
            <Searchbar />
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
          <div className="gallery-section">
            <section>
              <h3>{title}</h3>
              <div className="card-container">
                {animals.map((animal) => (
                  <div
                    key={animal._id}
                    onClick={() => {
                      setSelectedAnimal(animal);
                      setOpenModal(true);
                    }}
                  >
                    <AnimalCard
                      key={animal.name}
                      imgsrc={animal.imgsrc}
                      name={animal.name}
                      origin={animal.origin}
                    />
                  </div>
                ))}
              </div>
            </section>
            <dialog ref={ref} onCancel={() => setOpenModal(false)}>
              {animalType === "dogs" && (
                <div>
                  <p>
                    <strong>Name:</strong> {selectedAnimal.name}
                  </p>
                  <p>
                    <strong>Origin: </strong>
                    {selectedAnimal.origin}
                  </p>
                  <p>
                    <strong>Breed Group: </strong>
                    {selectedAnimal.breed_group}
                  </p>
                  <p>
                    <strong>Size: </strong>
                    {selectedAnimal.size}
                  </p>
                  <p>
                    <strong>Lifespan: </strong>
                    {selectedAnimal.lifespan}
                  </p>
                  <p>
                    <strong>Temperament:</strong> {selectedAnimal.temperament}
                  </p>
                  <p>
                    <strong>Colors: </strong>
                    {selectedAnimal.colors?.join()}
                  </p>
                  <p>
                    <strong>Description: </strong>
                    {selectedAnimal.description}
                  </p>
                </div>
              )}
              {animalType === "cats" && (
                <div>
                  <p>
                    <strong>Name: </strong>
                    {selectedAnimal.name}
                  </p>
                  <p>
                    <strong>Origin: </strong>
                    {selectedAnimal.origin}
                  </p>
                  <p>
                    <strong>Temperament: </strong>
                    {selectedAnimal.temperament}
                  </p>
                  <p>
                    <strong>Colors: </strong>
                    {selectedAnimal.colors?.join()}
                  </p>
                  <p>
                    <strong>Description: </strong>
                    {selectedAnimal.description}
                  </p>
                </div>
              )}
              {animalType === "birds" && (
                <div>
                  <p>
                    <strong>Name: </strong>
                    {selectedAnimal.name}
                  </p>
                  <p>
                    <strong>Origin: </strong>
                    {selectedAnimal.origin}
                  </p>
                  <p>
                    <strong>Species: </strong>
                    {selectedAnimal.species}
                  </p>
                  <p>
                    <strong>Family: </strong>
                    {selectedAnimal.family}
                  </p>
                  <p>
                    <strong>Habitat: </strong>
                    {selectedAnimal.habitat}
                  </p>
                  <p>
                    <strong>Diet: </strong>
                    {selectedAnimal.diet}
                  </p>
                  <p>
                    <strong>Description: </strong>
                    {selectedAnimal.description}
                  </p>
                  <p>
                    <strong>Wingspan (cm): </strong>
                    {selectedAnimal.wingspan_cm}
                  </p>
                  <p>
                    <strong>Weight (kg): </strong>
                    {selectedAnimal.weight_kg}
                  </p>
                </div>
              )}
              <button onClick={() => setOpenModal(false)}>Close</button>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
