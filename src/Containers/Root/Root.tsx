import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Navbar } from 'components';
import { CharactersPage, EpisodePage, LocationPage, LocationsPage } from 'containers';
import { 
  HandleGetCharactersAction,
  HandleGetEpisodesAction, 
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
  handleGetEpisodesAction: HandleGetEpisodesAction;
  handleGetLocationsAction: HandleGetLocationsAction;
}

const Main: React.FC<IMain> = (props) => {

  const { 
    handleGetCharactersAction, 
    handleGetEpisodesAction, 
    handleGetLocationsAction,
    characters, 
    locations, 
    episodes 
  } = props;

  useEffect(() => {
    handleGetCharactersAction();
    handleGetEpisodesAction();
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
        <Route path="/episodes/:episodeId" component={() => 
          <EpisodePage episodes={episodes.episodes.results} /> } />
        <Redirect to="/characters" />
      </Switch>
   </div>
  );
};

export default Main;
