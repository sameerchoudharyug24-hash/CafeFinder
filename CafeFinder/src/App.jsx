import { Route, Routes } from "react-router-dom";
import  Home  from "./pages/Home";
import  Favorites  from "./pages/Favorites";
import  Profile  from "./pages/Profile";
import Navbar from "./components/Navbar";
import CafeDetails from "./pages/CafeDetails";
import AddCafe from "./pages/AddCafe";
import EditCafe from "./pages/EditCafe";
import Register from "./pages/Register";
import Login from "./pages/Login";

const App = () => {
  return (
    <div>

      <Navbar />

      <Routes >
        <Route path="/" element = {<Home />} />
        <Route path="/favorites" element = {<Favorites />} />
        <Route path="/profile" element = {<Profile />} />
        <Route path="/cafe/:id" element={<CafeDetails />} />
        <Route path="/add-cafe" element={<AddCafe />} />
        <Route path="/edit-cafe/:id" element={<EditCafe />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
        
    </div>
  )
}

export default App
