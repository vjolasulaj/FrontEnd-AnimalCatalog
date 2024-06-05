import React, { useState } from "react";
import "./Searchbar.css";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Search.."
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <img
        onClick={() => {
          navigate("/gallery?search=" + search);
        }}
        src="/search.png"
        width="18"
        alt=""
      />
    </div>
  );
};

export default Searchbar;
