import React from "react";
import styled from "styled-components";

import ChartBar from "./ChartBar";

const Chart = ({ dataPoints }) => {
  const dataPointsValues = dataPoints.map((d) => d.value);
  console.log(dataPointsValues);

  const totalMax = Math.max(...dataPointsValues);

  return (
    <ChartStyle className="chart">
      {dataPoints.map((point) => {
        return (
          <ChartBar
            key={point.label}
            label={point.label}
            value={point.value}
            totalMax={totalMax}
          />
        );
      })}
    </ChartStyle>
  );
};

const ChartStyle = styled.div`
  padding: 1rem;
  border-radius: 12px;
  background-color: #f8dfff;
  text-align: center;
  display: flex;
  justify-content: space-around;
  height: 10rem;
`;
export default Chart;
