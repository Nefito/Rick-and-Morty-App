import React from 'react';

import { RouteComponentProps, withRouter } from 'react-router-dom'; 

import { Character } from 'components';
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

  .episode-character {
    display: inline;
    position: relative;

    padding: 0;
    margin: 10px;

    transition: all .2s ease-in-out;

    &:hover {
      transform: scale(1.05);
    }
  }

  .episode-character-img {
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
  episodes: IEpisode[];
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
      <span className="episode-text__secondary" >{text}</span>
      <h2 className="episode-text__info">{info}</h2>
    </EpisodeInfoStyle>
  );
};

const EpisodePage: React.FC<IEpisodePage> = (props) => {
  const { episodes, match } = props;

  const { episodeId } = match.params;

  const episode = episodes.find(ep => ep.id === Number(episodeId));

  const characters = episode ? episode.characters.map(character => {
    return (
      <li className="list-item" key={character}>
        <Character url={character} divClass="episode-character" imgClass="episode-character-img" />
      </li>
    );
  }) : null;

  if (!episode) {
    return (
      <h1>No episode found</h1>
    );
  }
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
