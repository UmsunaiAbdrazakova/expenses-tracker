import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  border-radius: 12px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
`;

const Card = (props) => {
  return <StyledCard className={props.className}>{props.children}</StyledCard>;
};

export default Card;
