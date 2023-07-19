import React from "react";
import styled from "styled-components";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expenses = [], onDeleteExpense }) => {
  return (
    <ListWrapper>
      {expenses.length === 0 && <FallbackText>No Expenses</FallbackText>}
      {expenses.length > 0 && (
        <ul>
          {expenses.map((expense) => {
            return (
              <ExpenseItem
                key={expense.id}
                onDeleteExpense={onDeleteExpense}
                date={expense.date}
                title={expense.title}
                id={expense.id}
                amount={expense.amount}
              />
            );
          })}
        </ul>
      )}
    </ListWrapper>
  );
};

const ListWrapper = styled.div`
  ul {
    list-style: none;
    padding: 0;
  }
`;

const FallbackText = styled.h1`
  color: white;
  text-align: center;
`;

export default ExpenseList;
