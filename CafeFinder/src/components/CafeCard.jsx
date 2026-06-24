import { Link } from "react-router-dom";
const CafeCard = ({ id, name, location, rating, price }) => {
  return (
    <Link to={`/cafe/${id}`}>

  <div className="card">
    <h2>{name}</h2>
    <p>{location}</p>
    <p>{rating} ⭐</p>
    <p>{price}</p>
  </div>

</Link>
);
};

export default CafeCard;