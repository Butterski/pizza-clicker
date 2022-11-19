import { COINS_SET } from "../action";

const initialState = {
  coinsAmmount: 0,
  coinsPerClick: 1,
  coinsPerSecond: 0,
};

export const coinsReducer = (state = initialState, action) => {
  switch (action.type) {
    case COINS_SET.ADD_CLICK:
      return {
        ...state,
        coinsAmmount: state.coinsAmmount + state.coinsPerClick,
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
