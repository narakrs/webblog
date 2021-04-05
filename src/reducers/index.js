import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import login from './login';
import ui from './ui';
import modal from './modal';
import table from './table';

const appReducers = combineReducers({
  login,
  ui,
  modal,
  table,
  form: formReducer,
});
export default appReducers;
