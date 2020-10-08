import React from 'react';
import { useQuery } from 'react-query';
import { RouteComponentProps, withRouter } from 'react-router-dom'; 

import { Character } from 'components';
import { apiClientService } from 'services';
import { IEpisode } from 'store';
import { styled } from 'theme';

const Episode = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  background: ${({ theme }) => theme.colors.main};
  color: ${({ theme }) => theme.colors.text};

  padding: 20px;
  margin: 10px 0;

  .episode-text-name {
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
  
  .episode-character {
    padding: 0;
    margin: 10px;
  }
`;

const EpisodeInfoStyle = styled.div`
  
  .episode-text-secondary {
    font-size: 20px;
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  .episode-text-info {
    font-size: 26px;
    margin-bottom: 30px;
  }
`;

interface IRouteInfo  {
  episodeId: string;
}

interface IEpisodePage extends RouteComponentProps<IRouteInfo> {
  history: any;
  location: any;
  match: any;
}

interface IEpisodeInfo {
  text: string;
  info: string;
}

const EpisodeInfo: React.FC<IEpisodeInfo> = ({ text, info }) => {
  return (
    <EpisodeInfoStyle>
      <span className="episode-text-secondary" >{text}</span>
      <h2 className="episode-text-info">{info}</h2>
    </EpisodeInfoStyle>
  );
};

const EpisodePage: React.FC<IEpisodePage> = (props) => {
  const { match } = props;

  const { episodeId } = match.params;

  const getEpisode = apiClientService.get(`episode/${episodeId}`);

  const { data, status } = useQuery(`https://rickandmortyapi.com/api/episode/${episodeId}` , () => getEpisode);

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

  const episode: IEpisode = data; 

  const characters = episode ? episode.characters.map(character => {
    return (
      <li className="list-item" key={character}>
        <Character url={character} className="episode-character"/>
      </li>
    );
  }) : null;

  return (
    <Episode>
      <div>
        <h1 className="episode-text-name">{episode.name}</h1>
      </div>
      <EpisodeInfo text="Episode: " info={episode.episode} />
      <EpisodeInfo text="Air Date: " info={episode.air_date} />
      <div>
        <span className="episode-text-secondary" >Characters: </span>
        <ul className="list-no-style episode-text-info">
          {characters}
        </ul>
      </div>
    </Episode>
  );
};

export default withRouter(EpisodePage);
