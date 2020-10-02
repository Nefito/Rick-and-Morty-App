import React, { useEffect } from 'react';

import { CharacterCardList, LocationCardList } from 'components';
import { 
  HandleGetCharactersAction, 
  HandleGetLocationsAction, 
  ICharactersInitialState, 
  IEpisodesInitialState, 
  ILocationsInitialState 
} from 'store';

interface IMain {
  characters: ICharactersInitialState;
  episodes: IEpisodesInitialState;
  locations: ILocationsInitialState;
  handleGetCharactersAction: HandleGetCharactersAction;
  handleGetLocationsAction: HandleGetLocationsAction;
}

const Main: React.FC<IMain> = (props) => {

  useEffect(() => {
    props.handleGetCharactersAction();
    props.handleGetLocationsAction();
  }, []);
  console.log(props);
  
  const characters = props.characters.characters.results;

  const locations = props.locations.locations.results;
  
  return (
    
   <div>
      <CharacterCardList characters={characters} />
      <LocationCardList locations={locations} />
   </div>
  );
};

export default Main;
