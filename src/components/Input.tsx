import styled from 'styled-components';

export const Input = styled.input`
  color: ${props => props.theme.colors.secondary};
  border: none;
  border-bottom: 3px solid ${props => props.theme.colors.textSecondary};
  background: none;
  border-radius: 4px;
  padding: 6px 4px 0 4px;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.secondary};
  }
  &:hover {
    outline: none;
    border-color: ${props => props.theme.colors.secondary};
  }
`;
