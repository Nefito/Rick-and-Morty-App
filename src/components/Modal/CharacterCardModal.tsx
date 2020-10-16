import React from 'react';

import { useQuery } from 'react-query';

import { errorOrLoadingStatusMsg } from 'commonUtil';
import { CharacterCard } from 'components';
import { apiClientService } from 'services';

interface ICharacterCardModal {
  url: string;
}

export const CharacterCardModal: React.FC<ICharacterCardModal> = ({ url }) => {
  const characterId =  url.split(/(\/)/g).slice(-1).pop();
  
  const getCharacter = apiClientService.get(`character/${characterId}`);

  const { data, status } = useQuery(url, () => getCharacter);
  
  if (!errorOrLoadingStatusMsg(status)) {
    return (
      <CharacterCard character={data} />
    );
  }
  return errorOrLoadingStatusMsg(status);
};
