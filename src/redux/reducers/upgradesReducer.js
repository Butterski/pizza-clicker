import { getIngredientsUpgradeData, getAdsUpgradeData } from "../../scripts/getUpgrades";
import { UPGRADES_SET } from "../action";

const initialState = {
  ingredients: {
    name: "Additional Ingredients",
    level: 1,
    bonusClick: 1,
    price: 5,
  },
  ads: {
    name: "More Ads",
    level: 1,
    bonusClicksPerSecond: 1,
    price: 7,
  },
};

export const upgradesReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPGRADES_SET.ADD_INGREDIENT_LEVEL:
      let ingredientsUpgradeData = getIngredientsUpgradeData(state.ingredients.level);
      return {
        ...state,
        ingredients: ingredientsUpgradeData,
      };
    case UPGRADES_SET.ADD_ADS_LEVEL:
      let adsUpgradeData = getAdsUpgradeData(state.ads.level);
      return {
        ...state,
        ads: adsUpgradeData,
      };
    default:
      return state;
  }
};
