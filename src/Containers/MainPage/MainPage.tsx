import React, { useEffect } from 'react';

import { Button, CharacterCard, Input } from 'components';

const Main = (props: any) => {

  useEffect(() => {
    props.handleGetCharactersAction();
  }, []);

  const test = props.characters.characters.results[0];
  const test2 =  props.characters.characters.results[1];

  return (
    <div>
      {test ? <CharacterCard character={test} /> : null}
      {test2 ? <CharacterCard character={test2} /> : null}
      <Button btnText="I am a button !"/>
      <div style={{ margin: '2rem' }}>
        <Input placeholder="I am an input!" />
      </div>
    </div>
  );
};

export default Main;
