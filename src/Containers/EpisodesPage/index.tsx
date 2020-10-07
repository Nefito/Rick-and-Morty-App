import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { episodesSelector, handleGetEpisodesAction, IStoreState } from 'store';

import EpisodesPage from './EpisodesPage';

export const mapStateToProps = (state: IStoreState) => {
  return {
    episodes: episodesSelector(state)
  };
};

export const mapDispatchToProps = (dispatch: any) => bindActionCreators({ handleGetEpisodesAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EpisodesPage);
