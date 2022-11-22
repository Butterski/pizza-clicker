import { COINS_SET } from "../action";
import { store } from "../store";

export const add_coins = (value) => {
  return {
    type: COINS_SET.ADD_COINS,
    value,
  };
};
export const remove_coins = (value) => {
  return {
    type: COINS_SET.REMOVE_COINS,
    value,
  };
};

export const add_click = () => {
  let clicks = store.getState()['upgrades']['ingredients']['bonusClick']
  return {
    type: COINS_SET.ADD_CLICK,
    clicks
  };
};
