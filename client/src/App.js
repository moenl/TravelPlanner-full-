// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// import Navbar from "./Components/Navbar";
// import Footer from "./Components/Footer";

// import Home from "./Pages/Home";
// import Destinations from "./Pages/Destinations";
// import Planner from "./Pages/Planner";
// import Budget from "./Pages/Budget";
// import Contact from "./Pages/Contact";
// import DestinationDetails from "./Pages/DestinationDetails";

// const App = () => {
//   return (
//     <Router>
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/destinations" element={<Destinations />} />
//         <Route path="/planner" element={<Planner />} />
//         <Route path="/budget" element={<Budget />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/destinations/:id" element={<DestinationDetails />} />


//       </Routes>

//       <Footer />
//     </Router>
//   );
// };

// export default App;



import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import Destinations from "./Pages/Destinations";
import Planner from "./Pages/Planner";
import Budget from "./Pages/Budget";
import Contact from "./Pages/Contact";
import DestinationDetails from "./Pages/DestinationDetails";

import ProtectedRoute from "./Components/ProtectedRoute";


const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Destinations is allowed without login (Option A) */}
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/destinations/:id" element={<DestinationDetails />} />

        {/* BLOCK these pages if not logged in */}
        <Route
          path="/planner"
          element={
            <ProtectedRoute>
              <Planner />
            </ProtectedRoute>
          }
        />

        <Route
          path="/budget"
          element={
            <ProtectedRoute>
              <Budget />
            </ProtectedRoute>
          }
        />

        <Route path="/contact" element={<Contact />} />
     

      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
