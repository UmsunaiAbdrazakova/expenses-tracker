import React from "react";
import styled from "styled-components";

const ExpensesFilter = ({ selectedYear, onSelectedYearChange }) => {
  return (
    <FilterWrapper>
      <FilterControl>
        <Label htmlFor="filter">Filter by year:</Label>
        <Select
          id="filter"
          value={selectedYear}
          onChange={onSelectedYearChange}
        >
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="All">All</option>
        </Select>
      </FilterControl>
    </FilterWrapper>
  );
};
const FilterWrapper = styled.div`
  color: white;
  padding: 0 1rem;
`;

const FilterControl = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Select = styled.select`
  font: inherit;
  padding: 0.5rem 3rem;
  font-weight: bold;
  border-radius: 6px;
`;

export default ExpensesFilter;
