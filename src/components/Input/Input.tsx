import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  display: block;
  color: orange;
  border: none;
  border-bottom: 3px solid gray;
  background: #2e2e2e;
  border-radius: 4px;
  padding: 6px 4px 0 4px;

  &:focus {
    outline: none;
    border-bottom-color: orange;
  }
`;

const Input = (props: any) => {
  return (
    <StyledInput placeholder={ props.placeholder }/>
  );
};

export default Input;
