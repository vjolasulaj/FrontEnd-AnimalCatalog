import React from 'react'
import './Explorecatalog.css'
import { useNavigate } from "react-router-dom";

const Explorecatalog = () => {
    const navigate = useNavigate();
    return (
            <div className='catalog container' id='catalog-explorer'>
            <h2>Explore Our Gallery</h2>
            <div className="explore-catalog-list">
                <div className="card">
                    <img src='./dog.png' alt="" />
                    <h4>Dogs</h4>
                </div>
                <div className="card">
                    <img src='./cat.png' alt="" />
                    <h4>Cats</h4>
                </div>
                <div className="card">
                    <img src='./bird.png' alt="" />
                    <h4>Birds</h4>
                </div>
            </div>
            <button onClick={() => {
              navigate("/gallery");
            }}>Explore All</button>
        </div>
        
    )
}

export default Explorecatalog