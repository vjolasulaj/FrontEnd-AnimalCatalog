import "./Header.css";
import "../../App.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header container">
      <div className="header-content">
        <h2>Feeling Better With Your Little Friends</h2>
        <p>
          Looking to add a pet friend to your family? Our website has a wide
          catalog of lovable pets to choose from. From playful dogs to beautiful
          birds.
        </p>
        <div>
          <button
            onClick={() => {
              navigate("/gallery");
            }}
          >
            View Gallery
          </button>
        </div>
      </div>
      <img src="/header-pic.png" alt="" />
    </header>
  );
};

export default Header;
