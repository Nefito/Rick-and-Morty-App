import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom'; 

import { ILocation } from 'store';

interface IRouteInfo  {
  locationId: string;
}

interface ILocationPage extends RouteComponentProps<IRouteInfo> {
  locations: ILocation[];
  history: any;
  location: any;
  match: any;
}

const LocationPage: React.FC<ILocationPage> = (props) => {

  const { locations, match } = props;

  const { locationId } = match.params;

  const location = locations.find(loc => loc.id === locationId);

  if (!location) {
    return (
      <h4>Location not found</h4>
    );
  }
  return (
    <div>
      <h4>{location.name}</h4>
    </div>
  );
};

export default withRouter(LocationPage);
