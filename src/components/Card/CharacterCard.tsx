import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

import { errorOrLoadingStatusMsg, getStatusColor, urlToLink } from 'commonUtil';
import { apiClientService } from 'services';
import { ICharacter, IEpisode, LifeStatusConst } from 'store';
import { styled } from 'theme';

import { CardBodyWrapper, CardWrapper } from './Card';
import { CardBodyItemWrapper } from './CardBodyItem';

const CharacterCardWrapper = styled(CardWrapper)`
  text-align: left;
 
  .card-image {
    width: 100%;
  }

  .card-text-name {
    font-size: 32px;
    font-weight: bold;
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

  const link = urlToLink(url, 's', 4);
  
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
  const getEpisode = apiClientService.get(urlToLink(firstEpisodeUrl, '', 4));

  const { data, status } = useQuery<IEpisode>(firstEpisodeUrl, () => getEpisode);

  if (!errorOrLoadingStatusMsg(status)) {
    return (
      <CharacterCardWrapper>
        <img className="card-image" src={character.image} alt={character.name} />
        <CardBodyWrapper>
          <div>
            <Link to={`/characters/${character.id}/`} className="card-text-name link-no-style">{character.name}</Link>
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
              url={firstEpisodeUrl}
              value={`${data.episode} - ${data.name}`} 
              title="First seen in:" 
            />
          }
        </CardBodyWrapper>
      </CharacterCardWrapper>
    );
  }
  return (errorOrLoadingStatusMsg(status));
};
