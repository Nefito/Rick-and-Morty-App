import React from 'react';
import { useQuery } from 'react-query';
import { RouteComponentProps, withRouter } from 'react-router-dom'; 

import { errorOrLoadingStatusMsg } from 'commonUtil';
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

  .list-no-style {
    list-style-type: none;
    margin-top: 20px;
  }
  .list-item {
    display: inline;
  }
  .location-character {
    padding: 0;
    margin: 10px;
  }
`;
const LocationInfoStyle = styled.div`
  .location-text-secondary {
    font-size: 20px;
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  .location-text-info {
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

  const { data, status } = useQuery(`https://rickandmortyapi.com/api/location/${locationId}`, () => getLocation);

  if (!errorOrLoadingStatusMsg(status)) {
    const location: ILocation = data;
    const residents = location ? location.residents.map(resident => {
      return (
        <li className="list-item" key={resident}>
          <Character url={resident} className="location-character" />
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
  }
  return (errorOrLoadingStatusMsg(status));
};

export default withRouter(LocationPage);
