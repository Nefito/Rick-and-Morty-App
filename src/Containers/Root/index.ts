import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { 
         charactersSelector, 
         episodesSelector, 
         handleGetCharactersAction,
         handleGetEpisodesAction, 
         handleGetLocationsAction, 
         IStoreState, 
         locationsSelector
         } from 'store';

import Main from './Root';

export const mapStateToProps = (state: IStoreState) => {
  return {
    characters: charactersSelector(state),
    locations: locationsSelector(state),
    episodes: episodesSelector(state)
  };
};

export const mapDispatchToProps = (dispatch: any) => bindActionCreators({ 
  handleGetCharactersAction,
  handleGetEpisodesAction, 
  handleGetLocationsAction 
}, dispatch);

const Root = connect(mapStateToProps, mapDispatchToProps)(Main);

export default Root;
