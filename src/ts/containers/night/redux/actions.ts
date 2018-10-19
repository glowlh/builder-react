import { createAction } from 'redux-actions';

class Actions {
  static load = createAction('NIGHT/LOAD');
  static fetchLoad = createAction('NIGHT/FETCH_LOAD');
}

export default Actions;
