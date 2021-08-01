import thunk from 'redux-thunk';
import rootReducer from './../reducers/index';
import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';

export default function configureStore() {
  const store = createStore(rootReducer, applyMiddleware(thunk));
  const persistor = persistStore(store as any);
  return { store, persistor };
}
