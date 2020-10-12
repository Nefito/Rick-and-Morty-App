import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { getLocationsAction, IStoreState, locationsSelector } from 'store';

import LocationsPage from './LocationsPage';

export const mapStateToProps = (state: IStoreState) => {
  return {
    locations: locationsSelector(state)
  };
};

export const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    getLocations: (page?: number, name?: string) => dispatch(getLocationsAction(page, name))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationsPage);
