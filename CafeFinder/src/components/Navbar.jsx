import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("Logged out successfully");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>

      <Link to="/favorites">Favorites</Link>

      <Link to="/profile">Profile</Link>

      {token ? (
        <>
          <Link to="/add-cafe">Add Cafe</Link>

          <button onClick={handleLogout}>
            Logout
          </button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>

          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;