import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { episodesSelector, getEpisodesAction, IStoreState } from 'store';

import EpisodesPage from './EpisodesPage';

export const mapStateToProps = (state: IStoreState) => {
  return {
    episodes: episodesSelector(state)
  };
};

export const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    getEpisodes: (page?: number, name?: string, season?: number) => dispatch(getEpisodesAction(page, name, season))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EpisodesPage);
