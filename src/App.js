import { useState } from "react";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/new-expense/NewExpense";

const EXPENSES = [
  {
    id: "e1",
    title: "Food",
    amount: 94.12,
    date: new Date(2023, 7, 14),
  },
  {
    id: "e2",
    title: "Playstation 5",
    amount: 799.49,
    date: new Date(2022, 2, 12),
  },
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
    date: new Date(2020, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(EXPENSES);

  const addNewExpenseHandler = (newExpense = {}) => {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, newExpense];
    });
  };

  const deleteExpenseByIdHandler = (id) => {
    // const filteredExpenses = expenses.filter((expense) => expense.id !== id)

    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id)
    );
  };

  //? Отсортированный массив расходов по убыванию amount
  const sortedExpenses = [...expenses].sort((a, b) => b.amount - a.amount);
  
  //? Отсортированный массив расходов по возрастанию amount
  //const sortedExpenses = [...expenses].sort((a, b) => a.amount - b.amount);

  //? Сортировка расходов по новизне (дате)
  // const sortedExpenses = [...expenses].sort(
  //   (a, b) => b.date.getTime() - a.date.getTime()
  // );

  //? Сортировка расходов по названию (алфавитный порядок)
  // const sortedExpenses = [...expenses].sort((a, b) =>
  //   a.title.localeCompare(b.title)
  // );

  //? Sort expenses  in reverse alphabet
//   const sortedExpenses = [...expenses].sort((a, b) =>
//     b.title.localeCompare(a.title)
//   );

  return (
    <div>
      <NewExpense onAddNewExpense={addNewExpenseHandler} />
      <Expenses
        //expenses={expenses}
        expenses={sortedExpenses}
        onDeleteExpense={deleteExpenseByIdHandler}
      />
    </div>
  );
}

export default App;
