import { applyMiddleware, combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from "redux-thunk";
import { coinsReducer } from './reducers/coinsReducer';
import { composeWithDevTools } from '@redux-devtools/extension';
// import { persistStore, persistReducer } from "redux-persist"; for later

const middleware = [thunk];

const reducers = combineReducers({
  coins: coinsReducer,
})

export const store = configureStore(
  {reducer: reducers},
  composeWithDevTools(applyMiddleware(...middleware)),
);
