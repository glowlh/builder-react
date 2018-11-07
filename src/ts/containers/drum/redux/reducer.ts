import { handleActions } from 'redux-actions';
import Actions from './actions';
import { IDrumReducer } from './interfaces/reduces';

const initialState: IDrumReducer = {
  photo: null,
};

const drumReducer = handleActions<any, any>(
  {
    [Actions.load(null).type]: (state: IDrumReducer, action: any): IDrumReducer => {
      const photo = action.payload.photo;
      return { ...state, photo };
    },
  },
  initialState,
);

export default drumReducer;
