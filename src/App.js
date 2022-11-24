import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { DevMenu } from "./components/devMenu/DevMenu";
import { add_click, add_cpc, add_cps, auto_add_coin, remove_coins } from "./redux/actions/coinsSet";
import {
  add_ingredient_level,
  add_ads_level,
} from "./redux/actions/upgradesSet";
import abbreviateNumber from "./scripts/abbreviateNumber";
import pizza from "./images/pizza.png";
import pizzacoin from "./images/pizza-coin.png";
import { BackgroundEmoji } from "./components/backgroundEmoji/BackgroundEmoji";
import {
  getAdsUpgradeData,
  getIngredientsUpgradeData,
} from "./scripts/getUpgrades";

function App() {
  const dispatch = useDispatch();
  const coins = useSelector((state) => state.coins.coinsAmmount);
  const coinsPerSecond = useSelector((state) => state.coins.coinsPerSecond);
  const coinsPerClick = useSelector((state) => state.coins.coinsPerClick);
  const [backgroundEmojis, setbackgroundEmojis] = useState([]);
  const upgradesData = useSelector((state) => state.upgrades);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(auto_add_coin())
    }, 1000);
    return () => {
      clearInterval(interval)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  

  const handlePizzaClick = () => {
    dispatch(add_click());
    setbackgroundEmojis([
      ...backgroundEmojis,
      <BackgroundEmoji key={new Date() / 1000} />,
    ]);
  };

  const handleIngredientsUpgradeButton = () => {
    dispatch(add_ingredient_level());
    dispatch(add_cpc(upgradesData.ingredients.bonusClick));
    dispatch(remove_coins(upgradesData.ingredients.price));
  };

  const handleAdsUpgradeButton = () => {
    dispatch(add_ads_level());
    dispatch(add_cps(upgradesData.ads.bonusClicksPerSecond))
    console.log(upgradesData.ads.bonusClicksPerSecond);
    dispatch(remove_coins(upgradesData.ads.price));
  };

  return (
    <div className="App">
      <DevMenu />
      <div className="score-container">
        <div className="score-area">
          {abbreviateNumber(coins)}
          <img src={pizzacoin} alt="pizzacoin" />
        </div>
        <div className="stats-area">
          CPC {coinsPerClick} | CPS: {coinsPerSecond}
        </div>
      </div>
      <div className="clicker-area">
        {backgroundEmojis.map((item) => {
          return item;
        })}
        <img
          src={pizza}
          alt="pizza"
          className="pizza"
          onClick={() => handlePizzaClick()}
        />
      </div>
      <div className="menu">
        <div className="upgrades-container">
          <div className="upgrade-box">
            <p className="upgrade-name">{upgradesData.ingredients.name}</p>
            <div className="upgrade-stats">
              <p>Level: {upgradesData.ingredients.level}</p>
              <p>
                Bonus <abbr title="coins per click">CPC</abbr>:{" "}
                {
                  getIngredientsUpgradeData(upgradesData.ingredients.level + 1)
                    .bonusClick
                }
              </p>
              <p>Price: {upgradesData.ingredients.price}</p>
            </div>
            <button
              onClick={() => handleIngredientsUpgradeButton()}
              disabled={coins < upgradesData.ingredients.price}
            >
              Buy Upgrade
            </button>
          </div>
          <div className="upgrade-box">
            <p className="upgrade-name">{upgradesData.ads.name}</p>
            <div className="upgrade-stats">
              <p>Level: {upgradesData.ads.level}</p>
              <p>
                Bonus <abbr title="coins per second">CPS</abbr>:{" "}
                {getAdsUpgradeData(upgradesData.ads.level + 1).bonusClicksPerSecond}
              </p>
              <p>Price: {upgradesData.ads.price}</p>
            </div>
            <button
              onClick={() => handleAdsUpgradeButton()}
              disabled={coins < upgradesData.ads.price}
            >
              Buy Upgrade
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
