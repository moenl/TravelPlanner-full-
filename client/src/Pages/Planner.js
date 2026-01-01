// import React, { useState } from "react";
// import TripForm from "../Components/TripForm";
// import { usePlanner } from "../context/PlannerContext";

// const Planner = () => {
//   const { trips, addTrip } = usePlanner();
//   const [sortOrder, setSortOrder] = useState("asc"); 
//   // asc = ascending (oldest first), desc = newest first

//   // Sorted list
//   const sortedTrips = [...trips].sort((a, b) => {
//     if (sortOrder === "asc") {
//       return new Date(a.date) - new Date(b.date);
//     } else {
//       return new Date(b.date) - new Date(a.date);
//     }
//   });

//   return (
//     <div className="container mt-5">
//       <h2 className="text-center mb-4">Plan Your Trip</h2>

//       <TripForm addTrip={addTrip} />

//       <div className="d-flex justify-content-between align-items-center mt-4">
//         <h4>Your Planned Trips</h4>

//         {/* SORT DROPDOWN */}
//         <select
//           className="form-select w-auto"
//           value={sortOrder}
//           onChange={(e) => setSortOrder(e.target.value)}
//         >
//           <option value="asc">Oldest first</option>
//           <option value="desc">Newest first</option>
//         </select>
//       </div>

//       {sortedTrips.length === 0 ? (
//         <p>No trips added yet.</p>
//       ) : (
//         <ul className="list-group mt-2">
//           {sortedTrips.map((trip) => (
//             <li key={trip.id} className="list-group-item">
//               <strong>{trip.destination}</strong> — {trip.date} — {trip.activity}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Planner;




import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Styles/AuthWarning.css";

const Planner = () => {
  const [destinations, setDestinations] = useState([]);
  const [trips, setTrips] = useState([]);

  const [destinationId, setDestinationId] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));

  // Load destinations + trips
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/destinations")
      .then(res => setDestinations(res.data))
      .catch(err => console.error(err));

    fetchTrips();
    // eslint-disable-next-line
  }, []);

  // Fetch trips (user-specific)
  const fetchTrips = () => {
    if (!user) {
      setTrips([]);
      return;
    }

    axios
      .get(`http://localhost:5000/api/trips?user_id=${user.id}`)
      .then(res => setTrips(res.data))
      .catch(err => console.error(err));
  };

  // Create trip
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      alert("Please login to create a trip.");
      return;
    }

    if (!destinationId || !startDate || !endDate) {
      alert("Please fill all fields");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/trips", {
        destination_id: destinationId,
        start_date: startDate,
        end_date: endDate,
        user_id: user.id
      });

      alert("Trip created successfully");

      setDestinationId("");
      setStartDate("");
      setEndDate("");

      fetchTrips();
    } catch (error) {
      console.error(error);
      alert("Error creating trip");
    }
  };

  // Delete trip
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this trip?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/trips/${id}`);
      fetchTrips();
    } catch (error) {
      console.error(error);
      alert("Error deleting trip");
    }
  };

  return (
    <div className="container mt-5">

      {/* AUTH WARNING */}
      {!user && (
        <p className="auth-warning">
          ⚠️ Please login to create or manage trips.
        </p>
      )}

      <h2>Create Trip</h2>

      <form onSubmit={handleSubmit} className="mb-5">

        <select
          className="form-control mb-3"
          value={destinationId}
          onChange={(e) => setDestinationId(e.target.value)}
        >
          <option value="">Select Destination</option>
          {destinations.map(dest => (
            <option key={dest.id} value={dest.id}>
              {dest.name}
            </option>
          ))}
        </select>

        <input
          type="date"
          className="form-control mb-3"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />

        <input
          type="date"
          className="form-control mb-3"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />

        <button
          className="btn btn-primary"
          disabled={!user}
        >
          {user ? "Create Trip" : "Login to Create Trip"}
        </button>
      </form>

      <h3>My Trips</h3>

      {trips.length === 0 ? (
        <p>No trips planned yet.</p>
      ) : (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Destination</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {trips.map(trip => (
              <tr key={trip.id}>
                <td>{trip.destination}</td>
                <td>{trip.start_date}</td>
                <td>{trip.end_date}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(trip.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

    </div>
  );
};

export default Planner;
