import { UPGRADES_SET } from "../action";

const initialState = {
  "Dodatkowe składniki": {
    level: 0,
    bonusClick: 1,
  }

};

export const upgradesReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
