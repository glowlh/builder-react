import { createAction } from 'redux-actions';

class ActionTypes {
  static load = createAction('NIGHT/LOAD');
  static fetchLoad = createAction('NIGHT/FETCH_LOAD');
}

export default ActionTypes;
