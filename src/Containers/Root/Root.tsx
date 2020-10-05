import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Navbar } from 'components';
import { CharactersPage, LocationPage, LocationsPage } from 'containers';
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

  const { handleGetCharactersAction, handleGetLocationsAction, characters, locations } = props;

  useEffect(() => {
    handleGetCharactersAction();
    handleGetLocationsAction();
  }, []);
  
  return (
    
   <div>
      <Navbar />
      <Switch>
        <Route path="/characters" component={() => <CharactersPage characters={characters.characters.results} />} />
        <Route exact={true} path="/locations" component={() => 
          <LocationsPage locations={locations.locations.results} /> }/>
        <Route path="/locations/:locationId" component={() => 
          <LocationPage locations={locations.locations.results} /> } />
        <Redirect to="/characters" />
      </Switch>
   </div>
  );
};

export default Main;
