
import React, { useState } from "react";

import NewExpense from "./components/NewExpenses/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  // Imperative: cara lama kalo di JS biasa, kalau mau append element
  // const para = document.createElement('p');
  // para.textContent = 'This is also visible';
  // document.getElementById('root').append(para)

  // Kalo gk pake JSX code, lebih ribet. Dan harus 'import React from 'react' di semua page yang render element
  // Makannya React gk bisa pake 2 root element (Harus pake 1 wrapper), karena mana bisa return 2 kali.
  // return React.createElement(
  //   'div', {[atribut_div_nya]}, 
  //   React.createElement ('h2', {}, 'Lets get started'),
  //   React.createElement(Expenses {expenses=expenses})
  // );



  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    });
  };


  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
