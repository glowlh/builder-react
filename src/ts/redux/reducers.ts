import { combineReducers } from 'redux';
import nightReducer from '../containers/night/redux/reducer';

const reducers = combineReducers({
  night: nightReducer,
});

export default reducers;
