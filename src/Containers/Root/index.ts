import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { 
         episodesSelector, 
         handleGetEpisodesAction, 
         IStoreState, 
         } from 'store';

import Main from './Root';

export const mapStateToProps = (state: IStoreState) => {
  return {
    episodes: episodesSelector(state)
  };
};

export const mapDispatchToProps = (dispatch: any) => bindActionCreators({ 
  handleGetEpisodesAction, 
}, dispatch);

const Root = connect(mapStateToProps, mapDispatchToProps)(Main);

export default Root;
