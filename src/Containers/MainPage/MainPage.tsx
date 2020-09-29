import React, { useEffect } from 'react';

const Main = (props: any) => {

  useEffect(() => {
    props.handleGetCharactersAction()
  }, []);

  const test = props.characters.characters.results;

  return (
    <div>
      <h1>{test ? test[0].name : null }</h1>
    </div>
  );
};

export default Main;
