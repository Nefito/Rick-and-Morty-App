import React from 'react';
import { useQuery } from 'react-query';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom'; 

import { errorOrLoadingStatusMsg, getStatusColor, urlToLink } from 'commonUtil';
import { apiClientService } from 'services';
import { ICharacter, LifeStatusConst } from 'store';
import { styled } from 'theme';

const CharacterWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.main};
  color: ${({ theme }) => theme.colors.text};

  padding: 20px;
  margin: 10px 0; 

  .character-item {
    margin: 15px 0;
  }

  .character-text-gray {
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  .link-no-style {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
    border: none;
    background: none;

    :hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
  .list-no-style {
    list-style-type: none;
    margin-top: 20px;
    width: 100%;
    text-align: center;
  }
  
  .list-item {
    display: inline;
  }
  .episode {
    font-size: 20px;
    margin: 15px;
    word-break: normal;
  }
`;

const CharacterBody = styled.div`
  flex-direction: row;
  font-size: 24px;

  .character-image {
    width: 300px;
    float: left;
    border-radius: 6px;
    margin-right: 24px;
  }

  .character-name {
    font-size: 45px;
    font-weight: bold;
    margin-bottom: 15px;
  }

`;

const CharacterStatusColor = styled.span<{ status: LifeStatusConst }>` 
  color: ${({ status }) => getStatusColor(status)};
`;

interface IRouteInfo  {
  characterId: string;
}

interface ICharacterEpisode {
  url: string;
  className?: string;
}

interface ICharacterInfo {
  title: string;
  value: string;
  className?: string;
}

interface ICharacterStatus {
  status: LifeStatusConst;
  className?: string;
}

interface ICharacterOrigin {
  originName: string;
  originUrl: string;
  className: string;
}

interface ICharacterEpisodeList {
  episodes: string[];
  className?: string;
}

const CharacterEpisode: React.FC<ICharacterEpisode> = ({ url, className }) => {
  const getEpisode = apiClientService.get(urlToLink(url, '', 4));
  const { data, status } = useQuery(url, () => getEpisode);

  if (!errorOrLoadingStatusMsg(status)) {
    return (
      <Link to={`/episodes/${data.id}/`} className={`link-no-style ${className}`}>{data.name}</Link>
    );
  }
  return errorOrLoadingStatusMsg(status);
};

const CharacterEpisodeList: React.FC<ICharacterEpisodeList> = ({ episodes, className }) => {
  const renderedEps =  episodes.map(ep => {
    return (
      <li className="list-item episode" key={ep}>
        <CharacterEpisode url={ep} className="episode-character" />
      </li>
    );
  });
  return (
    <div className={className}>
      <h1 style={{ textAlign: 'center' }}>Appeared in:</h1>
      <ul className="list-no-style">
        {renderedEps}
      </ul>
    </div>
  );
};

const CharacterInfo: React.FC<ICharacterInfo> = ({ title, value, className }) => {
  return (
    <div className={className}>
      <span className="character-text-gray">{title}</span>
      <span>{value}</span>
    </div>
  );
};

const CharacterOrigin: React.FC<ICharacterOrigin> = ({ originName, originUrl, className }) => {
  const getLocation = apiClientService.get(urlToLink(originUrl, '', 4));
  const { data, status } = useQuery(originUrl, () => getLocation);

  if (!errorOrLoadingStatusMsg(status)) {
    return (
      <div className={className}>
        <span className="character-text-gray">{'Origin: '}</span>
        <Link to={`/locations/${data.id}/`} className="link-no-style">{originName}</Link>
      </div>
    );
  }
  return errorOrLoadingStatusMsg(status);
};

const CharacterStatus: React.FC<ICharacterStatus> = ({ status, className }) => {
  return (
    <div className={className}>
      <span className="character-text-gray">{'Status: '}</span>
      <CharacterStatusColor status={status}>{status}</CharacterStatusColor>
    </div>
  );
};

const CharacterPage = ({ match }: RouteComponentProps<IRouteInfo>) => {
  const { characterId } = match.params;

  const getCharacter = apiClientService.get(`character/${characterId}`);
  const { data, status } = useQuery(`https://rickandmortyapi.com/api/character/${characterId}` , () => getCharacter);
  
  if (!errorOrLoadingStatusMsg(status)) {
    const character: ICharacter = data;

    return (
      <CharacterWrapper>
        <CharacterBody>
          <img className="character-image" src={character.image} alt={character.name} />
          <h1 className="character-name" >{character.name}</h1>
          <CharacterStatus className="character-item" status={character.status} />
          <CharacterInfo className="character-item" title="Species: " value={character.species} />
          {<CharacterInfo className="character-item" title="Type: " value={character.type} /> && character.type}
          <CharacterInfo className="character-item" title="Gender: " value={character.gender} />
          <CharacterOrigin 
            className="character-item" 
            originName={character.origin.name} 
            originUrl={character.origin.url} 
          />
          <CharacterInfo title="Last known location: " value={character.location.name} />
        </CharacterBody>
        <CharacterEpisodeList className="character-item" episodes={character.episode} />
      </CharacterWrapper>
    );
  }
  return errorOrLoadingStatusMsg(status);
};

export default withRouter(CharacterPage);
