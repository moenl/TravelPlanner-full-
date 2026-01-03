// import React, { useEffect, useState } from "react";
// import api from "../api";
// import "../Styles/AuthWarning.css";

// const Budget = () => {
//   const user = JSON.parse(localStorage.getItem("user"));

//   const [budgetItems, setBudgetItems] = useState([]);
//   const [expenseData, setExpenseData] = useState({
//     category: "",
//     amount: ""
//   });

//   useEffect(() => {
//     if (!user) {
//       setBudgetItems([]);
//       return;
//     }

//     api
//       .get(`/budget?user_id=${user.id}`)
//       .then(res => setBudgetItems(res.data))
//       .catch(err => console.error(err));
//   }, [user]);

//   const handleChange = (e) => {
//     setExpenseData({
//       ...expenseData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleAdd = async (e) => {
//     e.preventDefault();

//     if (!user) {
//       alert("Please login to add budget items.");
//       return;
//     }

//     try {
//       await api.post("/budget", {
//         user_id: user.id,
//         trip_id: null,
//         category: expenseData.category,
//         amount: Number(expenseData.amount),
//       });

//       setExpenseData({ category: "", amount: "" });

//       const res = await api.get(`/budget?user_id=${user.id}`);
//       setBudgetItems(res.data);

//     } catch (err) {
//       console.error(err);
//       alert("Failed to add budget item");
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await api.delete(`/budget/${id}`);
//       setBudgetItems(prev => prev.filter(i => i.id !== id));
//     } catch (err) {
//       console.error(err);
//       alert("Failed to delete item");
//     }
//   };

//   const total = budgetItems.reduce(
//     (sum, item) => sum + Number(item.amount),
//     0
//   );

//   return (
//     <div className="container mt-5">
//       <h2 className="text-center mb-4">Budget Tracker</h2>

//       {!user && (
//         <p className="auth-warning">
//           ⚠️ Please login to view and manage your budget.
//         </p>
//       )}

//       <form onSubmit={handleAdd} className="mb-4">
//         <input
//           type="text"
//           name="category"
//           placeholder="Expense Category"
//           value={expenseData.category}
//           onChange={handleChange}
//           className="form-control mb-2"
//           disabled={!user}
//         />

//         <input
//           type="number"
//           name="amount"
//           placeholder="Cost"
//           value={expenseData.amount}
//           onChange={handleChange}
//           className="form-control mb-2"
//           disabled={!user}
//         />

//         <button className="btn btn-primary w-100" disabled={!user}>
//           Add Expense
//         </button>
//       </form>

//       <h4>Total: ${total.toFixed(2)}</h4>

//       {budgetItems.length === 0 ? (
//         <p>No expenses added yet.</p>
//       ) : (
//         <table className="table mt-3">
//           <thead>
//             <tr>
//               <th>Expense</th>
//               <th>Cost</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {budgetItems.map(item => (
//               <tr key={item.id}>
//                 <td>{item.category}</td>
//                 <td>${item.amount}</td>
//                 <td>
//                   <button
//                     className="btn btn-danger btn-sm"
//                     onClick={() => handleDelete(item.id)}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default Budget;






import React, { useEffect, useState } from "react";
import api from "../api";
import "../Styles/AuthWarning.css";

const Budget = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const [budgetItems, setBudgetItems] = useState([]);
  const [expenseData, setExpenseData] = useState({
    category: "",
    amount: "",
  });

  useEffect(() => {
    if (!user) {
      setBudgetItems([]);
      return;
    }

    api
      .get(`/budget?user_id=${user.id}`)
      .then((res) => setBudgetItems(res.data))
      .catch((err) => console.error(err));
  }, [user]);

  const handleChange = (e) => {
    setExpenseData({
      ...expenseData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAdd = async (e) => {
    e.preventDefault();

    if (!user) {
      alert("Please login to add budget items.");
      return;
    }

    try {
      await api.post("/budget", {
        user_id: user.id,
        trip_id: null,
        category: expenseData.category,
        amount: Number(expenseData.amount),
      });

      setExpenseData({ category: "", amount: "" });

      const res = await api.get(`/budget?user_id=${user.id}`);
      setBudgetItems(res.data);
    } catch (err) {
      console.error(err);
      alert("Failed to add budget item");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this expense?")) return;

    try {
      await api.delete(`/budget/${id}`);
      setBudgetItems((prev) => prev.filter((i) => i.id !== id));
    } catch (err) {
      console.error(err);
      alert("Failed to delete item");
    }
  };

  const total = budgetItems.reduce(
    (sum, item) => sum + Number(item.amount),
    0
  );

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Budget Tracker</h2>

      {!user && (
        <p className="auth-warning">
          ⚠️ Please login to view and manage your budget.
        </p>
      )}

      <form onSubmit={handleAdd} className="mb-4">
        <input
          type="text"
          name="category"
          placeholder="Expense Category"
          value={expenseData.category}
          onChange={handleChange}
          className="form-control mb-2"
          disabled={!user}
        />

        <input
          type="number"
          name="amount"
          placeholder="Cost"
          value={expenseData.amount}
          onChange={handleChange}
          className="form-control mb-2"
          disabled={!user}
        />

        <button className="btn btn-primary w-100" disabled={!user}>
          Add Expense
        </button>
      </form>

      <h4>Total: ${total.toFixed(2)}</h4>

      {budgetItems.length === 0 ? (
        <p>No expenses added yet.</p>
      ) : (
        <table className="table mt-3">
          <thead>
            <tr>
              <th>Expense</th>
              <th>Cost</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {budgetItems.map((item) => (
              <tr key={item.id}>
                <td>{item.category}</td>
                <td>${item.amount}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(item.id)}
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

export default Budget;
