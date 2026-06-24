export const getFavorites = () => {
  return JSON.parse(
    localStorage.getItem("favorites")
  ) || [];
};

export const addToFavorites = (cafe) => {
  const favorites = getFavorites();

  favorites.push(cafe);

  localStorage.setItem(
    "favorites",
    JSON.stringify(favorites)
  );
};