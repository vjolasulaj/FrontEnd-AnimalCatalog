import "./AnimalCard.css";
const AnimalCard = (props) => {
  return (
    <div className="cards">
      <div className="card-image">
        <img src={props.imgsrc} alt="" />
      </div>
      <div className="card-content">
        <h4>{props.name}</h4>
        <p>Origin: {props.origin}</p>
      </div>
    </div>
  );
};

export default AnimalCard;
