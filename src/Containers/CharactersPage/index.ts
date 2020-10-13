import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { charactersSelector, getCharactersAction, IStoreState } from 'store';

import CharactersPage from './CharactersPage';

export const mapStateToProps = (state: IStoreState) => {
  return {
    characters: charactersSelector(state)
  };
};

export const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    getCharacters: (page?: number, name?: string, status?: string, gender?: string) => 
      dispatch(getCharactersAction(page, name, status, gender))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CharactersPage);
