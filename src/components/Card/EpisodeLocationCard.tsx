import { errorOrLoadingStatusMsg } from 'commonUtil';
import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

import { apiClientService } from 'services';
import { styled } from 'theme';

import { CardWrapper } from './Card';
import { CardBodyItemWrapper } from './CardBodyItem';

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

interface ICharacterNameLink {
  url: string;
}

const CharacterNameLink: React.FC<ICharacterNameLink> = ({ url }) => {
  const characterId =  url.split(/(\/)/g).slice(-1).pop();
  
  const getCharacter = apiClientService.get(`character/${characterId}`);
  const { data, status } = useQuery(url, () => getCharacter);

  if (!errorOrLoadingStatusMsg(status)) {
    return (
      <Link to={`/characters/${characterId}/`} className="card-text-name link-no-style">{data.name}</Link>
    );
  }
  return errorOrLoadingStatusMsg(status);
};

export const CharacterList: React.FC<ICharactersList> = ({ characters, className, title }) => {

  const charactersCropped = characters.slice(0, 6).map(characterUrl => {
    return (
      <li key={characterUrl}>
        <CharacterNameLink url={characterUrl} />
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
