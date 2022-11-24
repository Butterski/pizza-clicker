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
    case COINS_SET.AUTO_ADD_COIN:
      return {
        ...state,
        coinsAmmount: state.coinsAmmount + state.coinsPerSecond,
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
    case COINS_SET.ADD_CPC:
    return {
      ...state,
      coinsPerClick: state.coinsPerClick + action.value,
    };
    case COINS_SET.ADD_CPS:
    return {
      ...state,
      coinsPerSecond: state.coinsPerSecond + action.value,
    };
    default:
      return state;
  }
};
