import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { handleGetCharactersAction, IStoreState } from 'store';

import Main from './mainPage';

export const mapStateToProps = (state: IStoreState) => {
  return {
    characters: state.characters,
    locations: state.locations,
    episodes: state.episodes
  };
};

export const mapDispatchToProps = (dispatch: any) => bindActionCreators({ handleGetCharactersAction }, dispatch);

const ConnectedMain = connect(mapStateToProps, mapDispatchToProps)(Main);

export default ConnectedMain;
