// import React from "react";
// import { Link } from "react-router-dom";
// import "../Styles/Home.css";
// import { useState } from "react";
// const Home = () => {
//   const [agreed, setAgreed] = useState(false);
//   const [email, setEmail] = useState("");
// const [name, setName] = useState("");
// const [country, setCountry] = useState("");
// const handleSignup = () => {
//   if (!email || !name || !country) {
//     alert("Please fill all fields.");
//     return;
//   }

//   alert(
//     `Thank you ${name} from ${country}!\nWe will send updates to ${email}.`
//   );
//   setEmail("");
//   setName("");
//   setCountry("");
//   setAgreed(false);
// };


//   return (
//     <div className="home-container">

//       {/* MAIN HERO SECTION */}
//       <h1 className="home-title">Plan Your Perfect Journey</h1>
//       <p className="home-subtitle">
//         Organize destinations, manage your budget, and build your personalized travel experience.
//       </p>

//       <Link to="/destinations" className="home-button">
//         Explore Destinations
//       </Link>

//       <div className="home-image-wrapper">
//         <img
//           src="https://cdn-icons-png.flaticon.com/512/201/201623.png"
//           alt="Travel Illustration"
//           className="home-hero-image"
//         />
//       </div>


//       {/* NEWSLETTER SIGNUP SECTION */}
//       <div className="newsletter-section">

//         <h2 className="newsletter-title">Stay Updated!</h2>

//         <p className="newsletter-text">
//           Sign up to receive travel inspiration and exciting updates!
//         </p>

//         <div className="newsletter-form">
//           <input
//             type="email"
//             placeholder="Email address (required)"
//             className="newsletter-input"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />

//           <input
//             type="text"
//             placeholder="First name"
//             className="newsletter-input"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />

//           <select
//            className="newsletter-input"
//            value={country}
//            onChange={(e) => setCountry(e.target.value)}>
//             <option>Country</option>
//             <option>Lebanon</option>
//             <option>United Arab Emirates</option>
//             <option>France</option>
//             <option>USA</option>
//             <option>Japan</option>
//           </select>

//           <div className="newsletter-check">
//             <input type="checkbox"
//              id="agreeCheck"
//              checked={agreed}
//              onChange={(e) => setAgreed(e.target.checked)}   />

//             <label htmlFor="agreeCheck">
//               I agree to receive updates and accept the terms.
//             </label>
//           </div>

//           <button 
//           className="newsletter-button"
//           disabled={!agreed} 
//           onClick={handleSignup}>
//             Sign me up
//           </button>
//         </div>

//       </div>

//     </div>
//   );
// };

// export default Home;







import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../Styles/Home.css";

const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please fill all fields.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      localStorage.setItem("user", JSON.stringify(res.data.user));
      alert("Login successful!");

      // Clear fields
      setEmail("");
      setPassword("");

      // Refresh UI to reflect login state
      window.location.reload();
    } catch (err) {
      alert("Invalid email or password");
    }
  };

  const handleLogout = () => {
    if (!window.confirm("Are you sure you want to logout?")) return;

    localStorage.removeItem("user");
    alert("Logged out successfully");
    window.location.reload();
  };

  return (
    <div className="home-container">

      {/* HERO SECTION */}
      <h1 className="home-title">Plan Your Perfect Journey</h1>
      <p className="home-subtitle">
        Organize destinations, manage your budget, and build your personalized travel experience.
      </p>

      <Link to="/destinations" className="home-button">
        Explore Destinations
      </Link>

      <div className="home-image-wrapper">
        <img
          src="https://cdn-icons-png.flaticon.com/512/201/201623.png"
          alt="Travel Illustration"
          className="home-hero-image"
        />
      </div>

      {/* LOGIN / LOGOUT SECTION */}
      <div className="newsletter-section">

        {!user ? (
          <>
            <h2 className="newsletter-title">Login</h2>

            <p className="newsletter-text">
              Please log in to manage your trips and budget.
            </p>

            <div className="newsletter-form">
              <input
                type="email"
                placeholder="Email"
                className="newsletter-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="password"
                placeholder="Password"
                className="newsletter-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                className="newsletter-button"
                onClick={handleLogin}
              >
                Login
              </button>

             <p style={{ marginTop: "15px", textAlign: "center" }}>
  Don’t have an account?{" "}
  <Link to="/register" style={{ color: "#007bff" }}>
    Register
  </Link>
</p>

            </div>
          </>
        ) : (
          <>
            <h2 className="newsletter-title">
              Welcome, {user.name}
            </h2>

            <p className="newsletter-text">
              You are logged in. You can now plan trips and manage your budget.
            </p>

            <button
              className="newsletter-button"
              onClick={handleLogout}
              style={{ backgroundColor: "#dc3545" }}
            >
              Logout
            </button>
          </>
        )}

      </div>
    </div>
  );
};

export default Home;
