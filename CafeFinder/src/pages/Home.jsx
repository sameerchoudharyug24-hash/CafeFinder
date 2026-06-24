import { useEffect, useState } from "react";
import CafeCard from "../components/CafeCard";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [cafes, setCafes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/cafes`)
      .then((res) => res.json())
      .then((data) => {
        setCafes(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const filteredCafes = cafes.filter((cafe) =>
    cafe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <h1>Loading cafes...</h1>;
  }

  return (
    <div className="home-container">
      <h1>Nearby Cafes</h1>

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div className="cards-container">
        {filteredCafes.map((cafe) => (
          <CafeCard
            key={cafe._id}
            id={cafe._id}
            name={cafe.name}
            location={cafe.location}
            rating={cafe.rating}
            price={cafe.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;