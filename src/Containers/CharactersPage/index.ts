import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { charactersSelector, handleGetCharactersAction, IStoreState } from 'store';

import CharactersPage from './CharactersPage';

export const mapStateToProps = (state: IStoreState) => {
  return {
    characters: charactersSelector(state)
  };
};

export const mapDispatchToProps = (dispatch: any) => bindActionCreators({ handleGetCharactersAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CharactersPage);
