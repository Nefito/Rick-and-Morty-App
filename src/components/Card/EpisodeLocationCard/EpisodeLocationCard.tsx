import React from 'react';

import { Modal } from 'components';
import { styled } from 'theme';

import { CardWrapper } from '../Card/Card';
import { CardBodyItemWrapper } from '../CardBodyItem/CardBodyItem';

export const EpisodeLocationCardWrapper = styled(CardWrapper)`
  min-height: 456px;
  min-width: 400px;
  text-align: center;

  .card-info {
    margin: 32px 0 10px 0;
  }
  .card-characters {
    margin: 16px 0 46px 0;
  }
`;

interface ICharactersList {
  characters: string[];
  className: string;
  title: string;
}

export const CharacterList: React.FC<ICharactersList> = (props) => {
  const { characters, className, title } = props; 

  const charactersCropped = characters.slice(0, 6).map(character => {
    return (
      <li key={character}>
        <Modal url={character} />
      </li>
    );
  });

  return (
    <>
      <CardBodyItemWrapper className={className}>
        <span className="card-text-gray">{`${title}:`}</span>
        <ul className="list-no-style">
          {charactersCropped.length > 0 ? charactersCropped : <span>{`No ${title}`}</span>}
        </ul>
      </CardBodyItemWrapper>
    </>
  );
};
