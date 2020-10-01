import React from 'react';

import { ICharacter, LifeStatusConst } from 'store';
import { media, styled, theme as mainTheme } from 'theme';

const Card = styled.article`
  background: ${({ theme }) => theme.colors.main};
  display: flex;
  border-radius: 8px;
  overflow: hidden;
  margin: 12px;
  width: 740px;
  color: ${({ theme }) => theme.colors.text};

  .card-image {
    width: 100%;
  }

  ${media.tablet`
    width: 100%;
    word-break: break-all;
  `};

  ${media.tabletS`
    display: block;
    width: 300px;
    word-break: break-word;
  `};
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
    color: ${({ theme }) => theme.colors.text};

    :hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

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

const CardBodyElement = styled.div<{ margin: string }>`
  display: flex;
  flex-direction: column;
  margin: ${({ margin }) => margin};
  font-size: 20px;

  .card-text__gray {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.textSecondary};
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
