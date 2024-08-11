import { Link } from "react-router-dom";
import "../App.css";

export const NavBar = () => {
  return (
    <div>
    <div className="Navbar">
      <Link to="/">Home</Link>
      <Link to="/login"> Admin </Link>
    </div>
    
    </div>
  );
};
