import { useState } from "react";

const AddCafe = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    rating: "",
    price: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

   await fetch(`${import.meta.env.VITE_API_URL}/cafes`, {
  method: "POST",
  headers: {
  "Content-Type": "application/json",
  Authorization: localStorage.getItem("token"),
},
  body: JSON.stringify({
    ...formData,
    rating: Number(formData.rating),
  }),
});

    alert("Cafe added successfully");
  };

  return (
    <div className="home-container">
      <h1>Add Cafe</h1>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Cafe name" onChange={handleChange} />
        <input name="location" placeholder="Location" onChange={handleChange} />
        <input name="rating" placeholder="Rating" onChange={handleChange} />
        <input name="price" placeholder="Price" onChange={handleChange} />
        <input name="description" placeholder="Description" onChange={handleChange} />
        <input name="image" placeholder="Image URL" onChange={handleChange} />

        <button type="submit">Add Cafe</button>
      </form>
    </div>
  );
};

export default AddCafe;