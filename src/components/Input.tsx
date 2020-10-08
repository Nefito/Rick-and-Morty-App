import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  display: block;
  color: ${props => props.theme.colors.secondary};
  border: none;
  border-bottom: 3px solid ${props => props.theme.colors.textSecondary};
  background: ${props => props.theme.colors.main};
  border-radius: 4px;
  padding: 6px 4px 0 4px;

  &:focus {
    outline: none;
    border-bottom-color: ${props => props.theme.colors.secondary};
  }
`;

export const Input = (props: any) => {
  return (
    <StyledInput placeholder={ props.placeholder }/>
  );
};
