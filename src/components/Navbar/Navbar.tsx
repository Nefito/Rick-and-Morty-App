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

  .nav-item__link {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;

    :hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

const Navbar: React.FC = () => {
  return (
    <Nav>
      <Link to={'/characters'} className="nav-item">
        <a className="nav-item__link" href="/"> Characters </a>
      </Link>
      <Link to={'/locations'} className="nav-item">
        <a className="nav-item__link" href="/"> Locations </a>
      </Link>
      <Link to={'/episodes'} className="nav-item">
        <a className="nav-item__link" href="/"> Episodes </a>
      </Link>
    </Nav>
  );
};

export default Navbar;
