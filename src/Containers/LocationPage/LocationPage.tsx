import React from 'react';
import { useQuery } from 'react-query';
import { RouteComponentProps, withRouter } from 'react-router-dom'; 

import { Character } from 'components';
import { apiClientService } from 'services';
import { ILocation } from 'store';
import { styled } from 'theme';

const Location = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  background: ${({ theme }) => theme.colors.main};
  color: ${({ theme }) => theme.colors.text};

  padding: 20px;
  margin: 10px 0;

  .location-text-name {
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

  .location-resident-img {
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
  history: any;
  location: any;
  match: any;
}

interface ILocationInfo {
  text: string;
  info: string;
}

const LocationInfo: React.FC<ILocationInfo> = ({ text, info }) => {
  return (
    <LocationInfoStyle>
      <span className="location-text-secondary" >{text}</span>
      <h2 className="location-text-info">{info}</h2>
    </LocationInfoStyle>
  );
};

const LocationPage: React.FC<ILocationPage> = (props) => {
  const { match } = props;

  const { locationId } = match.params;

  const getLocation = apiClientService.get(`location/${locationId}`);

  const { data, status } = useQuery(`https://rickandmortyapi.com/api/location/${locationId}` , () => getLocation);

  if (status === 'loading') {
    return (
      <h1>Loading...</h1>
    );
  }
  if (status === 'error') {
    return (
      <h1>Some error has ocurred</h1>
    );
  }

  const location: ILocation = data;

  const residents = location ? location.residents.map(resident => {
    return (
      <li className="list-item" key={resident}>
        <Character url={resident} divClass="location-resident" imgClass="location-resident-img" />
      </li>
    );
  }) : null;

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
