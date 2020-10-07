import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Navbar } from 'components';
import { CharactersPage, EpisodePage, LocationPage, LocationsPage } from 'containers';
import { 
  HandleGetEpisodesAction, 
  HandleGetLocationsAction, 
  IEpisodesInitialState, 
  ILocationsInitialState 
} from 'store';

interface IMain {
  episodes: IEpisodesInitialState;
  locations: ILocationsInitialState;
  handleGetEpisodesAction: HandleGetEpisodesAction;
  handleGetLocationsAction: HandleGetLocationsAction;
}

const Main: React.FC<IMain> = (props) => {
  const {  
    handleGetEpisodesAction, 
    handleGetLocationsAction,
    locations, 
    episodes 
  } = props;

  useEffect(() => { // use effect on separate containers
    handleGetEpisodesAction();
    handleGetLocationsAction();
  }, []);
  
  return (
   <div>
      <Navbar />
      <Switch>
        <Route path="/characters" component={CharactersPage} />
        <Route exact={true} path="/locations" component={() => 
          <LocationsPage locations={locations.locations.results} /> }/>
        <Route path="/locations/:locationId" component={() => 
          <LocationPage locations={locations.locations.results} /> } />
        {/* <Route exact={true} path="/episodes" component={() => 
          <EpisodesPage episodes={episodes.episodes.results} /> }/> */}
        <Route path="/episodes/:episodeId" component={() => 
          <EpisodePage episodes={episodes.episodes.results} /> } />
        <Redirect to="/characters" />
      </Switch>
   </div>
  );
};

export default Main;
