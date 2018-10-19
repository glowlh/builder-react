import { createAction } from 'redux-actions';

class Actions {
  static load = createAction('DRUM/LOAD');
  static fetchLoad = createAction('DRUM/FETCH_LOAD');
}

export default Actions;
