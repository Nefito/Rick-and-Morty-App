import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  border: 2px solid orange;
  background: white;
  color: orange;
  border-radius: 8px; 
  cursor: pointer;
  padding: 12px 8px;
  font-size: 16px;
  font-weight: bold;

  &:hover {
    color: white;
    background: orange;
    border-color: white;
  }

  &:focus {
    outline: none;
  }
`;

const Button = (props: any) => {
  return (
    <StyledButton>{props.btnText}</StyledButton>
  );
};

export default Button;
