import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  border: 2px solid ${props => props.theme.colors.secondary};
  background: ${props => props.theme.colors.text};
  color: ${props => props.theme.colors.secondary};
  border-radius: 8px; 
  cursor: pointer;
  padding: 12px 8px;
  font-size: 16px;
  font-weight: bold;

  &:hover {
    color: ${props => props.theme.colors.text};
    background: ${props => props.theme.colors.secondary};
    border-color: ${props => props.theme.colors.text};
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
