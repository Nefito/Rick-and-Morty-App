import React from 'react';
import { Link } from 'react-router-dom';

import { Modal } from 'components';
import { ILocation } from 'store';
import { styled } from 'theme';

import { Card, CardBody, CardBodyElement } from '../styles';

const LinkButton = styled(Link)`
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  background: ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.secondary};
  border-radius: 8px; 
  cursor: pointer;
  padding: 12px 8px;
  font-size: 16px;
  font-weight: bold;
  max-width: 90px;
  display: flex;
  position: absolute;
  right: 20px;
  bottom: 0;
  margin-bottom: 10px;
  
  &:hover {
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.secondary};
    border-color: ${({ theme }) => theme.colors.text};
  }

  &:focus {
    outline: none;
  }
`;

const LocationCardStyled = styled(Card)`
  min-height: 456px;
  min-width: 400px;
  text-align: center;
`;

interface ILocationCard {
  location: ILocation;
}

interface ICardBodyText {
  name: string;
  margin: string;
  spanText: string;
}

const CardBodyText: React.FC<ICardBodyText> = (props) => { 

  const { name, margin, spanText } = props;

  return (
    <CardBodyElement margin={margin}>
      <span className="card-text__gray">{spanText} </span>
      <span>{name}</span>
    </CardBodyElement>
  );
};

interface IResidentsList {
  residents: string[];
  margin: string;
}

const ResidentsList: React.FC<IResidentsList> = (props) => {

  const residentsCropped = props.residents.slice(0, 6).map(resident => {
    return (
      <li key={resident}>
        <Modal residentUrl={resident} />
      </li>
    );
  });

  return (
    <>
      <CardBodyElement margin={props.margin}>
        <span className="card-text__gray">Residents:  </span>
        <ul className="list-no-style">
          {residentsCropped.length > 0 ? residentsCropped : <span>No Residents</span>}
        </ul>
      </CardBodyElement>
    </>
  );
};

const LocationCard: React.FC<ILocationCard> = (props) => {

  const { location } = props;

  return (
    <LocationCardStyled>
      <CardBody>
        <div>
          <a href={location.url} className="card-text__name link-no-style">{location.name}</a>
        </div>
        <div>
          <CardBodyText name={location.type} margin="32px 0 10px 0" spanText="Type:" />
          <CardBodyText name={location.dimension} margin="32px 0 10px 0" spanText="Dimension:" />
        </div>
        <ResidentsList residents={location.residents} margin="16px 0 46px 0" />
        <LinkButton to={`/locations/${location.id}/`} href="/">More...</LinkButton>
      </CardBody>
    </LocationCardStyled>
  );
};

export default LocationCard;
