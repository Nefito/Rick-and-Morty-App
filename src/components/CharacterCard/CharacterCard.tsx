import React from 'react';
import styled from 'styled-components';

import { ICharacter } from 'store';
import { Theme } from 'theme';

const Card = styled.article`
  background: ${props => props.theme.colors.main};
  display: flex;
  border-radius: 8px;
  overflow: hidden;
  margin: 12px;
  width: 740px;
  color: ${props => props.theme.colors.text};

  .card-image {
    width: 100%;
  }
`;

const CardBody = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  position: relative;

  .card-text__name {
    font-weight: bold;
    font-size: 32px;
    text-align: center;
    margin: 0;
  }

  .card-text__species-status {
    font-size: 24px;
    margin: 0 0 18px 8px;
  }

  .link-no-style {
    text-decoration: none;
    color: ${props => props.theme.colors.text};

    :hover {
      color: ${props => props.theme.colors.secondary};
    }
  }
`;

const getStatusColor = (status: string) => {
  switch (status) {
    case ('Alive'):
      return Theme.colors.alive;

    case ('Dead'):
      return Theme.colors.dead;

    default:
      return Theme.colors.textSecondary;
  }
};

const CardStatus = styled.span<{ status: string }>` 
  color: ${props => getStatusColor(props.status)};
`;

const CardBodyElement = styled.div<{ margin: string }>`
  display: flex;
  flex-direction: column;
  margin: ${props => props.margin};
  font-size: 20px;

.card-text__gray {
  font-size: 16px;
  color: ${props => props.theme.colors.textSecondary};
}
`;

interface ICharacterCard {
  character: ICharacter;
}

interface ICardBodyText {
  url: string;
  name: string;
  margin: string;
}

const CardBodyText: React.FC<ICardBodyText> = (props) => { 

  const { url, name, margin } = props;

  return (
    <CardBodyElement margin={margin}>
      <span className="card-text__gray">Last known location: </span>
      <a href={url} className="link-no-style">{name}</a>
    </CardBodyElement>
  );
};

const CharacterCard: React.FC<ICharacterCard> = (props) => {

  const { character } = props;

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
        <CardBodyText url={character.location.url} name={character.location.name} margin="16px 0 16px 0" />
        <CardBodyText url={character.episode[0]} name={character.episode[0]} margin="32px 0 10px 0" />
      </CardBody>
    </Card>
  );
};

export default CharacterCard;
