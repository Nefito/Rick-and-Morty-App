import React, { useEffect } from 'react';

const Main = (props: any) => {

  useEffect(() => {
    props.handleGetCharactersAction()
  }, []);

  const test = props.characters.characters.results[0];

  return (
    <div>
      <h1>{test ? test.name : null }</h1>
    </div>
  );
};

export default Main;
