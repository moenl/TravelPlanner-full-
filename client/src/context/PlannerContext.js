import React, { createContext, useState, useContext } from "react";

const PlannerContext = createContext();

export const PlannerProvider = ({ children }) => {
  const [trips, setTrips] = useState([]);

  const addTrip = (tripData) => {
    const newTrip = {id: trips.length + 1,...tripData};
    setTrips([...trips, newTrip]);
  };

  return (
    <PlannerContext.Provider value={{ trips, addTrip }}>
      {children}
    </PlannerContext.Provider>
  );
};

export const usePlanner = () => useContext(PlannerContext);
