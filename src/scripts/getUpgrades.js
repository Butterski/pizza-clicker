export const getIngredientsUpgradeData = ( level ) => {
  if (level < 20) {
    return {
      name: "Additional Ingredients",
      level: level + 1,
      bonusClick: 1,
      price: parseInt(((level ** 2) / 4) * 30),
    };
  } else if (level < 40) {
    return {
      name: "Best Ingredients",
      level: level + 1,
      bonusClick: 2,
      price: parseInt(((level ** 2) / 3) * 40),
    };
  } else  {
    return {
      name: "Cosmic Ingredients",
      level: level + 1,
      bonusClick: 3,
      price: parseInt(((level ** 2) / 2) * 50),
    };
  }
};

export const getAdsUpgradeData = ( level ) => {
    if (level < 20) {
      return {
        name: "More Ads",
        level: level + 1,
        bonusClicksPerSecond: 1,
        price: parseInt(((level ** 2) / 2) * 15),
      };
    } else if (level < 40) {
      return {
        name: "More Internet Ads",
        level: level + 1,
        bonusClicksPerSecond: 3,
        price: parseInt(((level ** 2) / 2) * 25),
      };
    } else {
      return {
        name: "Pay people to come",
        level: level + 1,
        bonusClicksPerSecond: 5,
        price: parseInt(((level ** 2) / 2) * 35),
      };
    }
  };

