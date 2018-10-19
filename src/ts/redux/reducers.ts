import { combineReducers } from 'redux';
import nightReducer from '../containers/night/redux/reducer';
import drumReducer from '../containers/drum/redux/reducer';

const reducers = combineReducers({
  night: nightReducer,
  drum: drumReducer,
});

export default reducers;
