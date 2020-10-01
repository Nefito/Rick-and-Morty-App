import React, { useEffect } from 'react';

import { Button, CharacterCard, CharacterCardList, Input } from 'components';

const Main = (props: any) => {

  useEffect(() => {
    props.handleGetCharactersAction();
  }, []);

  const characters = props.characters.characters.results;
  
  return (
    <CharacterCardList characters={characters} />
  );
};

export default Main;
