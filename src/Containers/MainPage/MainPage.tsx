import React, { useEffect } from 'react';

import { CharacterCardList, LocationCard } from 'components';
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

  const location = props.locations.locations.results[0];
  const location1 = props.locations.locations.results[1];
  
  return (
    
   <div>
      <CharacterCardList characters={characters} />
      {location ? <LocationCard location={location} /> : null}
      {location ? <LocationCard location={location1} /> : null}
   </div>
  );
};

export default Main;
