// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import { destinationsData } from "../Data/DestinationsData";
// import { useBudget } from "../context/BudgetContext";
// import  "../Styles/Destinations.css";
// import { Pie } from "react-chartjs-2";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// ChartJS.register(ArcElement, Tooltip, Legend);

// const DestinationDetails = () => {
//   const { name } = useParams();
//   const { addExpense } = useBudget();

//   const destination = destinationsData.find((d) => d.name.toLowerCase() === name.toLowerCase()
//   );

//   const [activeTab, setActiveTab] = useState("overview");

//   if (!destination) {
//     return <h2 className="text-center mt-5">Destination not found</h2>;
//   }


//   const handleAddToBudget = () => {
//     if (destination.estimatedCosts) {
//       destination.estimatedCosts.forEach((costItem) => {
//         addExpense({ 
//           name: `${costItem.name} - ${destination.name}`, 
//           cost: costItem.cost 
//         });
//       });
//     } else {
//       addExpense({ 
//         name: `Average Trip - ${destination.name}`, 
//         cost: destination.averageCost 
//       });
//     }

//     alert("Costs added to your Budget!");
//   };

//   return (
//     <div className="container mt-4">

//       <h2 className="destination-title">
//   {destination.name}, {destination.country}
// </h2>

// <div className="destination-tabs">
//   <button className="btn btn-outline-primary"
//     onClick={() => setActiveTab("overview")}>
//     Overview
//   </button>

//   <button className="btn btn-outline-primary"
//     onClick={() => setActiveTab("activities")}>
//     Activities
//   </button>

//   <button className="btn btn-outline-primary"
//     onClick={() => setActiveTab("costs")}>
//     Estimated Costs
//   </button>
// </div>


    
//       {activeTab === "overview" && (
//   <div>
//     <img
//       src={destination.overviewImage}
//       alt={destination.name}
//       className="destination-overview-image"
//     />
//    <p className="overview-text">{destination.description}</p>

//   </div>
// )}


//    {activeTab === "activities" && (
//   <div className="activities-grid">
//     {destination.activities.map((activity, index) => (
//       <a
//         key={index}
//         href={activity.mapLink}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="activity-card"
//       >
//         {activity.image && (
//           <img src={activity.image} alt={activity.name} className="activity-image" />
//         )}
//         <p>{activity.name}</p>
//       </a>
//     ))}
//   </div>
// )}



 
//       {activeTab === "costs" && (
//   <div className="chart-container">
//     {destination.estimatedCosts ? (
//       <>
//         {/* Pie Chart Data */}
//         <div className="chart-container">
//   <h4 className="chart-title">Cost Breakdown</h4>
//         <Pie
//           data={{
//             labels: destination.estimatedCosts.map((item) => item.name),
//             datasets: [
//               {
//                 data: destination.estimatedCosts.map((item) => item.cost),
//                 backgroundColor: [
//                   "#FF6384",
//                   "#36A2EB",
//                   "#FFCE56",
//                   "#4BC0C0",
//                   "#9966FF",
//                 ],
//               },
//             ],
//           }}
//         />

//       </div>

//         {/* Breakdown List */}
//         <ul className="mt-4">
//           {destination.estimatedCosts.map((item, index) => (
//             <li key={index}>
//               {item.name}: ${item.cost}
//             </li>
//           ))}
//         </ul>

//         <button
//           className="btn btn-primary mt-3"
//           onClick={handleAddToBudget}
//         >
//           Add All to Budget
//         </button>
//       </>
//     ) : (
//       <>
//         <p>No detailed cost breakdown available.</p>
//         <p>Estimated average trip cost: ${destination.averageCost}</p>

//         <button
//           className="btn btn-primary mt-3"
//           onClick={handleAddToBudget}
//         >
//           Add Estimated Cost to Budget
//         </button>
//       </>
//     )}
//   </div>
// )}

//     </div>
//   );
// };

// export default DestinationDetails;



import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "../Styles/Destinations.css";

import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

const DestinationDetails = () => {
  const { id } = useParams();
  const user = JSON.parse(localStorage.getItem("user"));

  

  const [destination, setDestination] = useState(null);
  const [activities, setActivities] = useState([]);
  const [costs, setCosts] = useState([]);
  const [activeTab, setActiveTab] = useState("overview");
  const [loading, setLoading] = useState(true);



useEffect(() => {
  setLoading(true);

  axios
    .get(`http://localhost:5000/api/destinations/${id}/full`)
    .then(res => {
      setDestination(res.data.destination);
      setActivities(res.data.activities);
      setCosts(res.data.costs);
      setLoading(false);
    })
    .catch(() => {
      setDestination(null);
      setLoading(false);
    });

}, [id]);



  if (loading) {
  return <h2 className="text-center mt-5">Loading...</h2>;
}

if (!destination) {
  return <h2 className="text-center mt-5">Destination not found</h2>;
}

 const handleAddToBudget = async () => {
  if (!user) {
    alert("Please login to add items to your budget.");
    return;
  }

  try {
    for (const item of costs) {
      await axios.post("http://localhost:5000/api/budget", {
        user_id: user.id,
        trip_id: null, // can be linked later
        category: `${item.category} - ${destination.name}`,
        amount: Number(item.amount)
      });
    }

    alert("Estimated costs added to your budget!");
  } catch (error) {
    console.error(error);
    alert("Failed to add to budget");
  }
};


  return (
    <div className="container mt-4">
      <h2 className="destination-title">
        {destination.name}, {destination.country}
      </h2>

      <div className="destination-tabs">
        <button className="btn btn-outline-primary" onClick={() => setActiveTab("overview")}>
          Overview
        </button>
        <button className="btn btn-outline-primary" onClick={() => setActiveTab("activities")}>
          Activities
        </button>
        <button className="btn btn-outline-primary" onClick={() => setActiveTab("costs")}>
          Estimated Costs
        </button>
      </div>

      {activeTab === "overview" && (
        <>
         <img
  src={`/images/${destination.city_image}`}
  alt={destination.name}
  className="destination-overview-image"
/>

          <p className="overview-text">{destination.description}</p>
        </>
      )}

      {activeTab === "activities" && (
        <div className="activities-grid">
         {activities.map(a => (
  <a
    key={a.id}
    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      a.location_query
    )}`}
    target="_blank"
    rel="noopener noreferrer"
    className="activity-card"
  >
    <img src={`/images/${a.image}`} alt={a.title} />
    <p>{a.title}</p>
  </a>
))}

        </div>
      )}

      {activeTab === "costs" && (
        <div className="chart-container">
          <Pie
            data={{
              labels: costs.map(c => c.category),
              datasets: [
                {
                  data: costs.map(c => c.amount),
                  backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"]
                }
              ]
            }}
          />

          <ul className="mt-4">
            {costs.map(c => (
              <li key={c.id}>{c.category}: ${c.amount}</li>
            ))}
          </ul>

          <button className="btn btn-primary mt-3" onClick={handleAddToBudget}>
            Add All to Budget
          </button>
        </div>
      )}
    </div>
  );
};

export default DestinationDetails;
