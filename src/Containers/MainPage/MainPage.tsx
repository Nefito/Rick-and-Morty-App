import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchCharacters, fetchEpisodes, fetchLocations } from 'store/actions';
import { RootState } from 'store/configureStore';

const mapStateToProps = (state: RootState) => {
  return {
    characters: state.characters,
    locations: state.locations,
    episodes: state.episodes
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  fetchCharacters: () =>  { dispatch(fetchCharacters()); },
  fetchLocations: () =>  { dispatch(fetchLocations()); },
  fetchEpisodes: () =>  { dispatch(fetchEpisodes()); }
});

const Main = (props: any) => {

  useEffect(() => {
    props.fetchCharacters();
    props.fetchLocations();
    props.fetchEpisodes();
  }, []);

  const test = props.characters.characters.results;

  return (
    <div>
      <h1>{test ? test[0].name : null }</h1>
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
