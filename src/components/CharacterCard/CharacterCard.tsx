import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

import { ICharacter, LifeStatusConst } from 'store';
import { styled, theme as mainTheme } from 'theme';

import ApiClientService from 'services/ApiClient';
import { Card, CardBody, CardBodyElement } from '../styles';

const getStatusColor = (status: string) => {
  switch (status) {
    case (LifeStatusConst.Alive):
      return mainTheme.colors.alive;

    case (LifeStatusConst.Dead):
      return mainTheme.colors.dead;

    default:
      return mainTheme.colors.textSecondary;
  }
};

const CardStatus = styled.span<{ status: string }>` 
  color: ${({ status }) => getStatusColor(status)};
`;

interface ICharacterCard {
  character: ICharacter;
}

interface ICardBodyText {
  url: string;
  name: string;
  margin: string;
  spanText: string;
}

function urlToLink(url: string) {
  let link = url.split(/(\/)/g);

  link = link.slice(Math.max(link.length - 4, 0));
  link[1] += 's';
  const linkStr = link.join('');

  return linkStr;
}

const CardBodyText: React.FC<ICardBodyText> = (props) => { 

  const { url, name, margin, spanText } = props;

  const link = urlToLink(url);
  
  return (
    <CardBodyElement margin={margin}>
      <span className="card-text__gray">{spanText} </span>
      <Link to={link} className="link-no-style" href="/"> {name} </Link>
    </CardBodyElement>
  );
};

const CharacterCard: React.FC<ICharacterCard> = (props) => {

  const { character } = props;

  const getEpisode = new ApiClientService(character.episode[0]).get('/');

  const { data, status } = useQuery(character.episode[0], () => getEpisode);

  return (
    <Card>
      <img className="card-img" src={character.image} alt={character.name} />
      <CardBody>
        <div>
          <a href={character.url} className="card-text__name link-no-style">{character.name}</a>
          <div className="card-text__species-status">
            <CardStatus status={character.status}> {character.status}</CardStatus>
            <span className="card-text__species"> - {character.species}</span>
          </div>
        </div>
        <CardBodyText url={character.location.url} name={character.location.name} margin="16px 0 16px 0" spanText="Last known location:" />
        <CardBodyText 
          url={character.episode[0]} 
          name={status === 'loading' ? 'loading' : status === 'error' ? 'error' : `${data.episode} - ${data.name}`} 
          margin="32px 0 10px 0" 
          spanText="First seen in:" />
      </CardBody>
    </Card>
  );
};

export default CharacterCard;
