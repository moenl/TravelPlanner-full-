import React, { createContext, useContext, useState } from "react";

const BudgetContext = createContext();

export const BudgetProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses((prev) => [...prev,{ id: prev.length + 1, ...expense }]);
  };

  const deleteExpense = (id) => {
    setExpenses((prev) => prev.filter(item => item.id !== id));
  };

  return (
    <BudgetContext.Provider value={{ 
      expenses, 
      addExpense, 
      deleteExpense 
    }}>
      {children}
    </BudgetContext.Provider>
  );
};

export const useBudget = () => useContext(BudgetContext);
