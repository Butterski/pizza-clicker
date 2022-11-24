import { COINS_SET } from "../action";

export const add_coins = (value) => {
  return {
    type: COINS_SET.ADD_COINS,
    value,
  };
};

export const auto_add_coin = () => {
  return {
    type: COINS_SET.AUTO_ADD_COIN,
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

export const add_cpc = (value) =>{
  return {
    type: COINS_SET.ADD_CPC,
    value,
  }
}
export const add_cps = (value) =>{
  return {
    type: COINS_SET.ADD_CPS,
    value,
  }
}
