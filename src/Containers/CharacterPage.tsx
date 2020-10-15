import React from 'react';
import { useQuery } from 'react-query';
import { RouteComponentProps, withRouter } from 'react-router-dom'; 

import { errorOrLoadingStatusMsg } from 'commonUtil';
import { apiClientService } from 'services';
import { ICharacter } from 'store';

import ApiClientService from 'services/ApiClient';

interface IRouteInfo  {
  characterId: string;
}

interface ICharacterPage extends RouteComponentProps<IRouteInfo> {
  history: any;
  location: any;
  match: any;
}

interface ICharacterEpisode {
  url: string;
  className?: string;
}

interface ICharacterItem {
  title: string;
  value: string;
}

const CharacterEpisode: React.FC<ICharacterEpisode> = ({ url, className }) => {
  const getEpisode = new ApiClientService(url).get('/');
  const { data, status } = useQuery(url, () => getEpisode);

  if (!errorOrLoadingStatusMsg(status)) {
    return (
      <span className={className}>{data.name}</span>
    );
  }
  return errorOrLoadingStatusMsg(status);
};

const CharacterItem: React.FC<ICharacterItem> = ({ title, value }) => {

  return (
    <div>
      <span>{title}</span>
      <span>{value}</span>
    </div>
  );
};

const CharacterPage: React.FC<ICharacterPage> = ({ match }) => {
  const { characterId } = match.params;

  const getCharacter = apiClientService.get(`character/${characterId}`);
  const { data, status } = useQuery(`https://rickandmortyapi.com/api/character/${characterId}` , () => getCharacter);
  
  if (!errorOrLoadingStatusMsg(status)) {
    const character: ICharacter = data;

    const episodes = character.episode.map(ep => {
      return (
        <li className="list-item" key={ep}>
          <CharacterEpisode url={ep} className="episode-character" />
        </li>
      );
    });

    return (
      <div>
        <img className="card-image" src={character.image} alt={character.name} />
        <span>{character.name}</span>
        <CharacterItem title="Status: " value={character.status} />
        <CharacterItem title="Species: " value={character.species} />
        <CharacterItem title="Status: " value={character.status} />
        <CharacterItem title="Type: " value={character.type} />
        <CharacterItem title="Gender: " value={character.gender} />
        <CharacterItem title="Origin: " value={character.origin.name} />
        <CharacterItem title="Last known location: " value={character.location.name} />
        <ul>
          {episodes}
        </ul>
      </div>
    );
  }
  return errorOrLoadingStatusMsg(status);
};

export default withRouter(CharacterPage);
