import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Navbar } from 'components';
import { CharactersPage, EpisodePage, EpisodesPage, LocationPage, LocationsPage } from 'containers';

interface IMain {}

const Main: React.FC<IMain> = (props) => {  
  return (
   <div>
      <Navbar />
      <Switch>
        <Route path="/characters" component={CharactersPage} />
        <Route exact={true} path="/locations" component={LocationsPage} />
        <Route path="/episodes" component={EpisodesPage} />
        <Route path="/locations/:locationId" component={LocationPage} />
        <Route path="/episodes/:episodeId" component={EpisodePage} />
        <Redirect to="/characters" />
      </Switch>
   </div>
  );
};

export default Main;
