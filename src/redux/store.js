import { applyMiddleware, combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from "redux-thunk";
import { coinsReducer } from './reducers/coinsReducer';
import { composeWithDevTools } from '@redux-devtools/extension';
import { upgradesReducer } from './reducers/upgradesReducer';
import { persistStore, persistReducer } from "redux-persist";
import localStorage from 'redux-persist/es/storage';

const initialState = {};
const middleware = [thunk];

const persistConfig = {
  key: 'root',
  storage: localStorage,
};


const reducers = combineReducers({
  coins: coinsReducer,
  upgrades: upgradesReducer,
})

const persistedReducer = persistReducer(persistConfig, reducers);


export const store = configureStore(
  {reducer: persistedReducer},
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export const persistor = persistStore(store);
