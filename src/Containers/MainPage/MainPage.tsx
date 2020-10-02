import React, { useEffect } from 'react';

import { CharactersPage, LocationsPage  } from 'containers';
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

  const characters = props.characters.characters.results;
  const locations = props.locations.locations.results;
  
  return (
    
   <div>
      <CharactersPage characters={characters} />
      <LocationsPage locations={locations} />
   </div>
  );
};

export default Main;
