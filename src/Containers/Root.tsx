import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Navbar } from 'components';
import { CharacterPage, CharactersPage, EpisodePage, EpisodesPage, LocationPage, LocationsPage } from 'containers';

interface IMain {}

const Root: React.FC<IMain> = (props) => {  
  return (
   <div>
      <Navbar />
      <Switch>
        <Route exact={true} path="/characters" component={CharactersPage} />
        <Route exact={true} path="/locations" component={LocationsPage} />
        <Route exact={true} path="/episodes" component={EpisodesPage} />
        <Route path="/characters/:characterId" component={CharacterPage} />
        <Route path="/locations/:locationId" component={LocationPage} />
        <Route path="/episodes/:episodeId" component={EpisodePage} />
        <Redirect to="/characters" />
      </Switch>
   </div>
  );
};

export default Root;
