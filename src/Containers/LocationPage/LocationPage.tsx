import React from 'react';
import { useQuery } from 'react-query';
import { RouteComponentProps, withRouter } from 'react-router-dom'; 

import { Modal } from 'components';
import { ILocation } from 'store';
import { styled } from 'theme';

import ApiClientService from 'services/ApiClient';

const Location = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  background: ${({ theme }) => theme.colors.main};
  color: ${({ theme }) => theme.colors.text};

  padding: 20px;
  margin: 10px 0;

  .location-text__name {
    font-size: 40px;
    margin-top: 20px;
    margin-bottom: 50px;
  }

  .location-resident {
    display: inline;
    position: relative;

    padding: 0;
    margin: 10px;

    transition: all .2s ease-in-out;

    &:hover {
      transform: scale(1.05);
    }
  }

  .location-resident__img {
    width: 150px;
    border-radius: 8px;
    border: 2px solid ${({ theme }) => theme.colors.text};

    &:hover {
      border-color: ${({ theme }) => theme.colors.secondary}
    }
  }

  .list-no-style {
    list-style-type: none;
    margin-top: 20px;
  }
  .list-item {
    display: inline;
  }

  .link-no-style {
    position: absolute;
    display: block;
    bottom: 100%;
    left: 2px;
    right: 2px;
    background: ${({ theme }) => theme.colors.main};
    color: ${({ theme }) => theme.colors.text};
    width: 97%;
    border: none;
    
    :hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;
const LocationInfoStyle = styled.div`
   

  .location-text__secondary {
    font-size: 20px;
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  .location-text__info {
    font-size: 26px;
    margin-bottom: 30px;
  }

`;

interface IRouteInfo  {
  locationId: string;
}

interface ILocationPage extends RouteComponentProps<IRouteInfo> {
  locations: ILocation[];
  history: any;
  location: any;
  match: any;
}

interface IRenderResident {
  url: string;
}

interface ILocationInfo {
  text: string;
  info: string;
}

const LocationInfo: React.FC<ILocationInfo> = ({ text, info }) => {
  return (
    <LocationInfoStyle>
      <span className="location-text__secondary" >{text}</span>
      <h2 className="location-text__info">{info}</h2>
    </LocationInfoStyle>
  );
};

const RenderResident: React.FC<IRenderResident> = ({ url }) => {

  const getResident = new ApiClientService(url).get('/');

  const { data, status } = useQuery(url, () => getResident);

  if (status === 'loading') {
    return (
      <span>Loading...</span>
    );
  }
  if (status === 'error') {
    return (
      <span>Some error has ocurred</span>
    );
  }
  return (
    <div className="location-resident">
      <img className="location-resident__img" src={data.image} alt={data.name} />
      <Modal residentUrl={data.url} />
   </div>
  );
};

const LocationPage: React.FC<ILocationPage> = (props) => {

  const { locations, match } = props;

  const { locationId } = match.params;

  const location = locations.find(loc => loc.id === Number(locationId));

  const residents = location ? location.residents.map(resident => {
    return (
      <li className="list-item" key={resident}>
        <RenderResident url={resident} />
      </li>
    );
  }) : null;

  if (!location) {
    return (
      <h1>No location found</h1>
    );
  }
  return (
    <Location>
      <div>
        <h1 className="location-text__name">{location.name}</h1>
      </div>
      <LocationInfo text="Type: " info={location.type} />
      <LocationInfo text="Dimension: " info={location.dimension} />
      <div>
        <span className="location-text__secondary" >Residents: </span>
        <ul className="list-no-style location-text__info">
          {residents}
        </ul>
      </div>
    </Location>
  );
};

export default withRouter(LocationPage);
