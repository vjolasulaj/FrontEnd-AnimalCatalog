import React, { useEffect, useRef, useState } from "react";

const BirdTable = () => {
  const [animals, setAnimals] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [form, setForm] = useState({});
  const [isUpdating, setIsUpdating] = useState(false);
  const [isViewing, setIsViewing] = useState(false);
  const [selectedId, setSelectedId] = useState("");
  const ref = useRef();
  function handleInputChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    if (openModal) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [openModal]);

  useEffect(() => {
    let url = `${import.meta.env.VITE_BACKEND_URL}/birds`;

    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => setAnimals(response));
  }, []);

  return (
    <div className="dashboard">
      <div className="add-action">
        <button
          onClick={() => {
            setOpenModal(true);
            setForm({});
            setIsUpdating(false);
            setIsViewing(false);
          }}
        >
          Create
        </button>
        <dialog ref={ref} onCancel={() => setOpenModal(false)}>
          <form>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={form.name ?? ""}
              onChange={handleInputChange}
              readOnly={isViewing}
            />
            <input
              type="text"
              placeholder="Origin"
              name="origin"
              value={form.origin ?? ""}
              onChange={handleInputChange}
              readOnly={isViewing}
            />
            <input
              type="text"
              placeholder="Image Source"
              name="imgsrc"
              value={form.imgsrc ?? ""}
              onChange={handleInputChange}
              readOnly={isViewing}
            />
            <input
              type="text"
              placeholder="Species"
              name="species"
              value={form.species ?? ""}
              onChange={handleInputChange}
              readOnly={isViewing}
            />
            <input
              type="text"
              placeholder="Family"
              name="family"
              value={form.family ?? ""}
              onChange={handleInputChange}
              readOnly={isViewing}
            />
            <input
              type="text"
              placeholder="Habitat"
              name="habitat"
              value={form.habitat ?? ""}
              onChange={handleInputChange}
              readOnly={isViewing}
            />
            <input
              type="text"
              placeholder="Diet"
              name="diet"
              value={form.diet ?? ""}
              onChange={handleInputChange}
              readOnly={isViewing}
            />
            <input
              type="text"
              placeholder="Description"
              name="description"
              value={form.description ?? ""}
              onChange={handleInputChange}
              readOnly={isViewing}
            />
            <input
              type="text"
              placeholder="Wingspan"
              name="wingspan_cm"
              value={form.wingspan_cm ?? ""}
              onChange={handleInputChange}
              readOnly={isViewing}
            />
            <input
              type="text"
              placeholder="Weight"
              name="weight_kg"
              value={form.weight_kg ?? ""}
              onChange={handleInputChange}
              readOnly={isViewing}
            />
          </form>
          <div className="modal-buttons">
            {!isViewing && (
              <button
                onClick={() => {
                  setOpenModal(false);
                  console.log(form);
                  const createAnimal = async () => {
                    try {
                      const response = await fetch(
                        `${import.meta.env.VITE_BACKEND_URL}/birds`,
                        {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json",
                          },
                          body: JSON.stringify(form),
                        }
                      );

                      if (!response.ok) {
                        throw new Error("Creating was not ok.");
                      }

                      const data = await response.json();
                      let url = `${import.meta.env.VITE_BACKEND_URL}/birds`;

                      fetch(url, {
                        method: "GET",
                      })
                        .then((response) => response.json())
                        .then((response) => setAnimals(response));
                    } catch (error) {}
                  };
                  const updateAnimal = async () => {
                    try {
                      const response = await fetch(
                        `${import.meta.env.VITE_BACKEND_URL}/birds` + selectedId,
                        {
                          method: "PATCH",
                          headers: {
                            "Content-Type": "application/json",
                          },
                          body: JSON.stringify(form),
                        }
                      );

                      if (!response.ok) {
                        throw new Error("Updating was not ok.");
                      }

                      const data = await response.json();
                      let url = `${import.meta.env.VITE_BACKEND_URL}/birds`;

                      fetch(url, {
                        method: "GET",
                      })
                        .then((response) => response.json())
                        .then((response) => setAnimals(response));
                    } catch (error) {}
                  };
                  if (isUpdating) {
                    updateAnimal();
                  } else {
                    createAnimal();
                  }
                }}
              >
                {isUpdating ? "Update" : "Add"}
              </button>
            )}

            <button onClick={() => setOpenModal(false)}>Close</button>
          </div>
        </dialog>
      </div>
      <div className="animal-table">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Origin</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {animals.map((animal) => (
              <tr key={animal._id}>
                <td>{animal._id}</td>
                <td>{animal.name}</td>
                <td>{animal.origin}</td>
                <td className="actions">
                  <button
                    onClick={() => {
                      setSelectedId(animal._id);
                      setOpenModal(true);
                      setForm(animal);
                      setIsUpdating(true);
                      setIsViewing(false);
                    }}
                  >
                    Update
                  </button>
                  <button
                    onClick={() => {
                      const deleteAnimal = async () => {
                        try {
                          const response = await fetch(
                            `${import.meta.env.VITE_BACKEND_URL}/birds` + animal._id,
                            {
                              method: "DELETE",
                            }
                          );

                          if (!response.ok) {
                            throw new Error("Deleting was not ok.");
                          }

                          const data = await response.json();
                          let url = `${import.meta.env.VITE_BACKEND_URL}/birds`;

                          fetch(url, {
                            method: "GET",
                          })
                            .then((response) => response.json())
                            .then((response) => setAnimals(response));
                        } catch (error) {}
                      };
                      deleteAnimal();
                    }}
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => {
                      setOpenModal(true);
                      setIsViewing(true);
                      setForm(animal);
                    }}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BirdTable;
