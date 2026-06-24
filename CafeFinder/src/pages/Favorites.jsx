import { getFavorites } from "../utils/favorites";

const Favorites = () => {
  const favorites = getFavorites();

  if (favorites.length === 0) {
    return (
      <h1>
        Nothing in favorites yet 😔
      </h1>
    );
  }

  return (
    <div>
      <h1>Favorites</h1>

      {favorites.map((cafe) => (
        <div key={cafe.id}>
          <h2>{cafe.name}</h2>
          <p>{cafe.location}</p>
        </div>
      ))}
    </div>
  );
};

export default Favorites;