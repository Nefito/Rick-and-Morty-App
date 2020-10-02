import React from 'react';

import { ILocation } from 'store';

import { Card, CardBody, CardBodyElement } from '../styles';

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

const LocationCard: React.FC<ILocationCard> = (props) => {

  const { location } = props;

  return (
    <Card>
      <CardBody>
        <div>
          <a href={location.url} className="card-text__name link-no-style">{location.name}</a>
        </div>
        <div>
          <CardBodyText name={location.dimension} margin="16px 0 16px 0" spanText="Dimension:" />
          <CardBodyText name={location.type} margin="32px 0 10px 0" spanText="Type:" />
        </div>
      </CardBody>
    </Card>
  );
};

export default LocationCard;
