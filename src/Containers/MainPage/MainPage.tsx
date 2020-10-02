import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Navbar } from 'components';
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
      <Navbar />
      <Switch>
        <Route path="/characters" component={() => <CharactersPage characters={characters} />} />
        <Route path="/locations" component={() => <LocationsPage locations={locations} /> }/>
        <Redirect to="/characters" />
      </Switch>
   </div>
  );
};

export default Main;
