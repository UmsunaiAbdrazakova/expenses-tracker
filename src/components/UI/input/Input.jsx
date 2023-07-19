import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  font: inherit;
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  width: 20rem;
  max-width: 100%;
`;

const Input = ({ type, value, onChange, ...rest }) => {
  return (
    <StyledInput value={value} onChange={onChange} {...rest} type={type} />
  );
}

export default Input;
