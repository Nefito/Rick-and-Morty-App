import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { 
         charactersSelector, 
         episodesSelector, 
         handleGetCharactersAction, 
         handleGetLocationsAction, 
         IStoreState, 
         locationsSelector
         } from 'store';

import Main from './MainPage';

export const mapStateToProps = (state: IStoreState) => {
  return {
    characters: charactersSelector(state),
    locations: locationsSelector(state),
    episodes: episodesSelector(state)
  };
};

export const mapDispatchToProps = (dispatch: any) => bindActionCreators({ 
  handleGetCharactersAction, 
  handleGetLocationsAction 
}, dispatch);

const ConnectedMain = connect(mapStateToProps, mapDispatchToProps)(Main);

export default ConnectedMain;
