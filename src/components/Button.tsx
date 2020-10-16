import { styled } from 'theme';

export const Button = styled.button`
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  background: ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.secondary};
  border-radius: 8px; 
  cursor: pointer;
  padding: 12px 8px;
  font-size: 16px;
  font-weight: bold;
  max-width: 90px;
  
  &:hover {
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.secondary};
    border-color: ${({ theme }) => theme.colors.text};
  }

  &:focus {
    outline: none;
  }
`;
