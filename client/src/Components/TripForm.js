import React, { useState } from "react";
import "../Styles/Planner.css"
const TripForm = ({ addTrip }) => {
  const [formData, setFormData] = useState({
    destination: "",
    date: "",
    activity: ""
  });

  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    setFormData({...formData,[field]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTrip(formData);
    setFormData({ destination: "", date: "", activity: "" });//kermel ye3mal reset w ysero fadyeen
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="destination"
        placeholder="Destination"
        value={formData.destination}
        onChange={handleChange}
        className="form-control mb-2"
      />

      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        className="form-control mb-2"
      />

      <input
        type="text"
        name="activity"
        placeholder="Activity"
        value={formData.activity}
        onChange={handleChange}
        className="form-control mb-2"
      />

      <button type="submit" className="btn btn-primary w-100">
        Add Trip
      </button>
    </form>
  );
};

export default TripForm;
