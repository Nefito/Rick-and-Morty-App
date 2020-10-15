import React from 'react';
import { Link } from 'react-router-dom';

import { styled } from 'theme';

const Nav = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 12px;
  background: ${({ theme }) => theme.colors.main};

  .nav-item {
    display: inline;
    margin: 16px;
    font-weight: bold;
  }

  .nav-item-link {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;

    :hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

export const Navbar: React.FC = () => {
  return (
    <Nav>
      <li className="nav-item">
        <Link to={'/characters'} className="nav-item-link" href="/"> Characters </Link>
      </li>
      <li className="nav-item">
        <Link to={'/locations'} className="nav-item-link" href="/"> Locations </Link>
      </li>
      <li className="nav-item">
        <Link to={'/episodes'} className="nav-item-link" href="/"> Episodes </Link>
      </li>
    </Nav>
  );
};
