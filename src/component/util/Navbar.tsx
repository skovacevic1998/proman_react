import { Link, useLocation } from "react-router-dom";
import user_img from "../../assets/user.png";
import logout_img from "../../assets/logout.png";
import logo_img from "../../assets/logo.png";
import { motion } from "framer-motion";

export const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? true : false;
  };

  return (
    <>
      <div className="topnav">
        <div className="logo_div">
          <img className="logo" src={logo_img} alt="logo" />
        </div>
        <Link to="/" className={`nav-link ${isActive("/") ? "active" : ""}`}>
          Home
        </Link>
        <div className="dropdown">
          <a className="dropdown-item">Projects</a>
          <div className="dropdown-content">
            <Link
              to="/reactprojects"
              className={`nav-link ${isActive("/reactprojects") ? "active" : ""}`}
            >
              React
            </Link>
            <Link
              to="/spring"
              className={`nav-link ${isActive("/spring") ? "active" : ""}`}
            >
              Spring
            </Link>
            
          </div>
        </div>
        <Link
          to="/contact"
          className={`nav-link ${isActive("/contact") ? "active" : ""}`}
        >
          Contact
        </Link>
        <Link
          to="/about"
          className={`nav-link ${isActive("/about") ? "active" : ""}`}
        >
          About
        </Link>
        <div className="profil">
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className="profil-item"
          >
            <img src={user_img} alt="Profile" />
          </motion.div>
          <div className="profil-content">
            <Link
              to="/profile/option1"
              className={`nav-link ${
                isActive("/profile/option1") ? "active" : ""
              }`}
            >
              Profile
            </Link>
            <Link
              to="/profile/option2"
              className={`nav-link ${
                isActive("/profile/option2") ? "active" : ""
              }`}
            >
              Patch notes
            </Link>
            <Link
              to="/profile/option3"
              className={`nav-link ${
                isActive("/profile/option3") ? "active" : ""
              }`}
            >
              Report bugs
            </Link>
          </div>
        </div>
        <motion.div
          className="logout"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
        >
          <img src={logout_img} alt="Logout" />
        </motion.div>
      </div>
    </>
  );
};
