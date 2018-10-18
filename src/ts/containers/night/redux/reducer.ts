import {handleActions} from 'redux-actions';
import Actions from './actions';
import { INightReducer } from './interfaces/reduces';

const initialState: INightReducer = {
  url: null,
};

const nightReducer = handleActions<any, any>(
  {
    [Actions.load(null).type]: (state: INightReducer, action: any): INightReducer => {
      return state;
    },
  },
  initialState,
);

export default nightReducer;
