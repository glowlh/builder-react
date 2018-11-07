import { handleActions } from 'redux-actions';
import Actions from './actions';
import { INightReducer } from './interfaces/reduces';

const initialState: INightReducer = {
  photo: null,
};

const nightReducer = handleActions<any, any>(
  {
    [Actions.load(null).type]: (state: INightReducer, action: any): INightReducer => {
      const photo = action.payload.photo;
      return { ...state, photo };
    },
  },
  initialState,
);

export default nightReducer;
