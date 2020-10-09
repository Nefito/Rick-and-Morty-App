import styled from 'styled-components';

export const Input = styled.input`
  display: block;
  color: ${props => props.theme.colors.secondary};
  border: none;
  border-bottom: 3px solid ${props => props.theme.colors.textSecondary};
  background: none;
  border-radius: 4px;
  padding: 6px 4px 0 4px;

  &:focus {
    outline: none;
    border-bottom-color: ${props => props.theme.colors.secondary};
  }
  &:hover {
    outline: none;
    border-bottom-color: ${props => props.theme.colors.secondary};
  }
`;
