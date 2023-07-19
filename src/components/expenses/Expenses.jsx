import React, { useState } from "react";
import styled from "styled-components";
import ExpenseList from "./ExpenseList";
import Card from "../UI/card/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = ({ expenses = [], onDeleteExpense }) => {
  const [selectedYear, setSelectedYear] = useState("All");

  const selectedYearChangeHandler = (e) => {
    setSelectedYear(e.target.value);
  };

  const filteredExpenses = expenses.filter((expense) => {
    if (expense.date.getFullYear().toString() === selectedYear) {
      return true;
    }
    return false;
  });

  const renderedExpenses = selectedYear === "All" ? expenses : filteredExpenses;

  return (
    <ExpensesCard>
      <ExpensesFilter
        selectedYear={selectedYear}
        onSelectedYearChange={selectedYearChangeHandler}
      />
      <ExpensesChart expenses={renderedExpenses} />
      <ExpenseList
        onDeleteExpense={onDeleteExpense}
        expenses={renderedExpenses}
      />
    </ExpensesCard>
  );
};

const ExpensesCard = styled(Card)`
  padding: 1rem;
  background-color: rgb(31, 31, 31);
  margin: 2rem auto;
  width: 50rem;
  max-width: 95%;
`;

export default Expenses;
