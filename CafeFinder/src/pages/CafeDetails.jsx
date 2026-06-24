import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const CafeDetails = () => {
  const { id } = useParams();
  const [cafe, setCafe] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://import.meta.env.VITE_API_URL/cafes/${id}`)
      .then((res) => res.json())
      .then((data) => setCafe(data))
      .catch((err) => console.log(err));
  }, [id]);

  const handleDelete = async () => {
    await fetch(`http://import.meta.env.VITE_API_URL/cafes/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });

    alert("Cafe deleted successfully");
    navigate("/");
  };

  if (!cafe) {
    return <h1>Loading...</h1>;
  }

  if (cafe.message === "Cafe not found") {
    return <h1>Cafe Not Found</h1>;
  }

  return (
    <div style={{ padding: "2rem" }}>
      <img src={cafe.image} alt={cafe.name} width="400" />

      <h1>{cafe.name}</h1>
      <p>{cafe.location}</p>
      <p>{cafe.rating} ⭐</p>
      <p>{cafe.price}</p>
      <p>{cafe.description}</p>

      <button onClick={handleDelete}>
        Delete Cafe
      </button>

      <button onClick={() => navigate(`/edit-cafe/${id}`)}>
        Edit Cafe
      </button>
    </div>
  );
};

export default CafeDetails;