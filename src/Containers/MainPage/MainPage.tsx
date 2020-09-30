import React, { useEffect } from 'react';

import { CharacterCard } from 'components';

const Main = (props: any) => {

  useEffect(() => {
    props.handleGetCharactersAction()
  }, []);

  const test = props.characters.characters.results[0];

  return (
    <div>
      {test? <CharacterCard character={test} /> : null}
    </div>
  );
};

export default Main;
