import { createStore } from 'redux'
import combineReducers from '../reducers/index'

export default function configureStore(initialState) {
  const store = createStore(combineReducers, {}, initialState, applyMiddleware(ReduxThunk));

  // const store = createStore(combineReducers, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}