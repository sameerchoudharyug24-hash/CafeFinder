import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


const EditCafe = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    location: "",
    rating: "",
    price: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    fetch(`http://import.meta.env.VITE_API_URL/cafes/${id}`)
      .then((res) => res.json())
      .then((data) => setFormData(data))
      .catch((err) => console.log(err));
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch(`http://import.meta.env.VITE_API_URL/cafes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        ...formData,
        rating: Number(formData.rating),
      }),
    });

    alert("Cafe updated successfully");
    navigate(`/cafe/${id}`);
  };

  return (
    <div className="home-container">
      <h1>Edit Cafe</h1>

      <form onSubmit={handleSubmit}>
        <input name="name" value={formData.name} onChange={handleChange} />
        <input name="location" value={formData.location} onChange={handleChange} />
        <input name="rating" value={formData.rating} onChange={handleChange} />
        <input name="price" value={formData.price} onChange={handleChange} />
        <input name="description" value={formData.description} onChange={handleChange} />
        <input name="image" value={formData.image} onChange={handleChange} />

        <button type="submit">Update Cafe</button>
      </form>
    </div>
  );
};

export default EditCafe;