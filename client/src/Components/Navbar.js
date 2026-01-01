// import React from "react";
// import { NavLink } from "react-router-dom";
// import "../Styles/Navbar.css";

// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg">
//       <span className="navbar-brand navbar-title">
//         <img
//           src="https://cdn-icons-png.flaticon.com/512/69/69906.png"
//           alt="plane"
//           className="navbar-icon"
//         />
//         Travel Planner
//       </span>

//       <div className="navbar-menu">
//         <NavLink to="/" className="nav-link">Home</NavLink>
//         <NavLink to="/destinations" className="nav-link">Destinations</NavLink>
//         <NavLink to="/planner" className="nav-link">Planner</NavLink>
//         <NavLink to="/budget" className="nav-link">Budget</NavLink>
//         <NavLink to="/contact" className="nav-link">Contact</NavLink>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




import React from "react";
import { NavLink } from "react-router-dom";
import "../Styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <span className="navbar-brand navbar-title">
        <img
          src="https://cdn-icons-png.flaticon.com/512/69/69906.png"
          alt="plane"
          className="navbar-icon"
        />
        Travel Planner
      </span>

      <div className="navbar-menu">
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/destinations" className="nav-link">Destinations</NavLink>
        <NavLink to="/planner" className="nav-link">Planner</NavLink>
        <NavLink to="/budget" className="nav-link">Budget</NavLink>
        <NavLink to="/contact" className="nav-link">Contact</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
