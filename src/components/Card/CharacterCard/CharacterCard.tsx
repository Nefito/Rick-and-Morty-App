import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

import { apiClientService } from 'services';
import { ICharacter, IEpisode, LifeStatusConst } from 'store';
import { styled, theme as mainTheme } from 'theme';

import { CardBodyWrapper, CardWrapper } from '../Card/Card';
import { CardBodyItemWrapper } from '../CardBodyItem/CardBodyItem';

const getStatusColor = (status: LifeStatusConst) => {
  switch (status) {
    case LifeStatusConst.Alive:
      return mainTheme.colors.alive;

    case LifeStatusConst.Dead:
      return mainTheme.colors.dead;

    default:
      return mainTheme.colors.textSecondary;
  }
};

const urlToLink = (url: string, str: string) => {
  let link = url.split(/(\/)/g);

  link = link.slice(Math.max(link.length - 4, 0));
  link[1] += str;
  const linkStr = link.join('');

  return linkStr;
};

const CharacterCardWrapper = styled(CardWrapper)`
  text-align: left;
 
  .card-image {
    width: 100%;
  }

  .card-text-species-status {
    font-size: 24px;
    margin: 0 0 18px 8px;
  }

  .card-location-episode {
    margin: 30px 0 10px 0;
  }

`;

const CharacterStatus = styled.span<{ status: LifeStatusConst }>` 
  color: ${({ status }) => getStatusColor(status)};
`;

interface ICharacterCard {
  character: ICharacter;
}

interface ICharacterCardBodyItem {
  url: string;
  title: string;
  value: string;
}

const CharacterCardBodyItem: React.FC<ICharacterCardBodyItem> = (props) => { 
  const { url, value, title } = props;

  const link = urlToLink(url, 's');
  
  return (
    <CardBodyItemWrapper className="card-location-episode">
      <span className="card-text-gray">{title}</span>
      <Link to={link} className="link-no-style" href="/">{value}</Link>
    </CardBodyItemWrapper>
  );
};

export const CharacterCard: React.FC<ICharacterCard> = (props) => {
  const { character } = props;
  
  const firstEpisodeUrl = character.episode[0];
  const getEpisode = apiClientService.get(urlToLink(firstEpisodeUrl, ''));

  const { data, status } = useQuery<IEpisode>(firstEpisodeUrl, () => getEpisode);

  return (
    <CharacterCardWrapper>
      <img className="card-image" src={character.image} alt={character.name} />
      <CardBodyWrapper>
        <div>
          <a href={character.url} className="card-text-name link-no-style">{character.name}</a>
          <div className="card-text-species-status">
            <CharacterStatus status={character.status}>{character.status}</CharacterStatus>
            <span className="card-text-species">{` - ${character.species}`}</span>
          </div>
        </div>
        <CharacterCardBodyItem 
          url={character.location.url} 
          value={character.location.name} 
          title="Last known location:" 
        />
        {data && 
          <CharacterCardBodyItem 
            url={firstEpisodeUrl} // make a util later
            value={status === 'loading' ? 'loading' : status === 'error' ? 'error' : `${data.episode} - ${data.name}`} 
            title="First seen in:" 
          />
        }
      </CardBodyWrapper>
    </CharacterCardWrapper>
  );
};
