import { COINS_SET } from "../action";

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
  return {
    type: COINS_SET.ADD_CLICK,
  };
};
