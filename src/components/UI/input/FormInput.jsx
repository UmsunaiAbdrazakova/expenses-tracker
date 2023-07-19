import React from "react";
import styled from "styled-components";

const FormInput = ({
  inputType = "text",
  onChange,
  label,
  id,
  value,
  ...rest
}) => {
  return (
    <FormInputWrapper>
      <Label htmlFor={id}>{label}</Label>
      <StyledInput
        id={id}
        type={inputType}
        value={value}
        onChange={onChange}
        {...rest}
      />
    </FormInputWrapper>
  );
};
const StyledInput = styled.input`
  font: inherit;
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  width: 20rem;
  max-width: 100%;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
`;

const FormInputWrapper = styled.div``;

export default FormInput;
