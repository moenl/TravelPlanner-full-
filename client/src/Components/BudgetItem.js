import React from "react";
import "../Styles/Budget.css"
const BudgetItem = ({ item, deleteItem }) => {
  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.cost}</td>
      <td>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => deleteItem(item.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default BudgetItem;
