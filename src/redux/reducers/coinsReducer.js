import { COINS_SET } from "../action";
import { store } from "../store";

const initialState = {
  coinsAmmount: 0,
};

export const coinsReducer = (state = initialState, action) => {
  switch (action.type) {
    case COINS_SET.ADD_CLICK:
      console.log(action.clicks)
      return {
        ...state,
        coinsAmmount: state.coinsAmmount + action.clicks,
      };
    case COINS_SET.ADD_COINS:
      return {
        ...state,
        coinsAmmount: state.coinsAmmount + action.value,
      };
    case COINS_SET.REMOVE_COINS:
      return {
        ...state,
        coinsAmmount: state.coinsAmmount - action.value,
      };
    default:
      return state;
  }
};
