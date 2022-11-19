import { UPGRADES_SET } from "../action";

export const unlock_upgrade = (upgrade) => {
  return {
    type: UPGRADES_SET.UNLOCK_UPGRADE,
    upgrade,
  };
};

