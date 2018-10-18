import {
  applyMiddleware,
  createStore,
  compose,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers'
import * as NightWatchers from '../containers/night/redux/sagas';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(NightWatchers.watchPhotoNight);

export default store;
