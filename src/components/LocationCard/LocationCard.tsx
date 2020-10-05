import React from 'react';

import { Button, Modal } from 'components';
import { ILocation } from 'store';
import { styled } from 'theme';

import { Card, CardBody, CardBodyElement } from '../styles';

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
      <Button btnText="More..." />
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
      </CardBody>
    </LocationCardStyled>
  );
};

export default LocationCard;
