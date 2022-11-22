import { UPGRADES_SET } from "../action";

export const add_ingredient_level = () => {
  return {
    type: UPGRADES_SET.ADD_INGREDIENT_LEVEL,
  };
};

export const add_ads_level = () => {
  return {
    type: UPGRADES_SET.ADD_ADS_LEVEL,
  };
};
