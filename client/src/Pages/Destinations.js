// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { destinationsData } from "../Data/DestinationsData";

// const Destinations = () => {
//   const [search, setSearch] = useState("");
//   const [countryFilter, setCountryFilter] = useState("");

//   const filteredDestinations = destinationsData.filter((destination) => {
//     return (
//       destination.name.toLowerCase().includes(search.toLowerCase()) &&
//       (countryFilter === "" ||
//         destination.country.toLowerCase() === countryFilter.toLowerCase())
//     );
//   });

//   const uniqueCountries = [
//     ...new Set(destinationsData.map((d) => d.country)),
//   ];

//   return (
//     <div className="container mt-4">
//       <h2 className="text-center mb-4">Popular Destinations</h2>

//       {/* Search + Filter */}
//       <div className="row mb-4">
//         <div className="col-md-6 mb-2">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Search destination..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//           />
//         </div>

//         <div className="col-md-6">
//           <select
//             className="form-select"
//             value={countryFilter}
//             onChange={(e) => setCountryFilter(e.target.value)}
//           >
//             <option value="">Filter by Country</option>
//             {uniqueCountries.map((country, index) => (
//               <option key={index} value={country}>
//                 {country}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>

//       {/* Destination Cards */}
//       <div className="row">
//         {filteredDestinations.map((destination, index) => (
//           <div key={index} className="col-md-4 mb-4">
//             <Link
//               to={`/destinations/${destination.name.toLowerCase()}`}
//               className="text-decoration-none text-dark"
//             >
//               <div className="card h-100">
//                 <img
//                   src={destination.image}
//                   className="card-img-top"
//                   alt={destination.name}
//                 />

//                 <div className="card-body text-center">
//                   <h5 className="card-title">{destination.name}</h5>
//                   <p className="card-text">{destination.country}</p>
//                 </div>
//               </div>
//             </Link>
//           </div>
//         ))}
//       </div>

//       {/* No results message */}
//       {filteredDestinations.length === 0 && (
//         <p className="text-center mt-4">No destinations found.</p>
//       )}
//     </div>
//   );
// };

// export default Destinations;





import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);
  const [search, setSearch] = useState("");
  const [countryFilter, setCountryFilter] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/destinations")
      .then((res) => setDestinations(res.data))
      .catch((err) => console.error(err));
  }, []);

  const filteredDestinations = destinations.filter((destination) => {
    return (
      destination.name.toLowerCase().includes(search.toLowerCase()) &&
      (countryFilter === "" ||
        destination.country.toLowerCase() === countryFilter.toLowerCase())
    );
  });

  const uniqueCountries = [...new Set(destinations.map((d) => d.country))];

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Popular Destinations</h2>

      {/* Search + Filter */}
      <div className="row mb-4">
        <div className="col-md-6 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Search destination..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="col-md-6">
          <select
            className="form-select"
            value={countryFilter}
            onChange={(e) => setCountryFilter(e.target.value)}
          >
            <option value="">Filter by Country</option>
            {uniqueCountries.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Destination Cards */}
      <div className="row">
        {filteredDestinations.map((destination) => (
          <div key={destination.id} className="col-md-4 mb-4">
            <Link
              to={`/destinations/${destination.id}`}
              className="text-decoration-none text-dark"
            >
              <div className="card h-100">
                <img
                  src={`/images/${destination.image}`}
                  className="card-img-top"
                  alt={destination.name}
                />

                <div className="card-body text-center">
                  <h5 className="card-title">{destination.name}</h5>
                  <p className="card-text">{destination.country}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {filteredDestinations.length === 0 && (
        <p className="text-center mt-4">No destinations found.</p>
      )}
    </div>
  );
};

export default Destinations;
