import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { handleGetLocationsAction, IStoreState, locationsSelector } from 'store';

import LocationsPage from './LocationsPage';

export const mapStateToProps = (state: IStoreState) => {
  return {
    locations: locationsSelector(state)
  };
};

export const mapDispatchToProps = (dispatch: any) => bindActionCreators({ handleGetLocationsAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LocationsPage);
