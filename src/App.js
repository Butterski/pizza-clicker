import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { DevMenu } from "./components/devMenu/DevMenu";
import { add_click, remove_coins } from "./redux/actions/coinsSet";
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
  const coinsPerClick = useSelector((state) => state.coins.coinsPerClick);
  const [backgroundEmojis, setbackgroundEmojis] = useState([]);
  const [menuOption, setMenuOption] = useState("Upgrades");
  const upgradesData = useSelector((state) => state.upgrades);
  const handlePizzaClick = () => {
    dispatch(add_click());
    setbackgroundEmojis([
      ...backgroundEmojis,
      <BackgroundEmoji key={new Date() / 1000} />,
    ]);
  };

  const SectionButton = ({ type }) => {
    return (
      <div
        onClick={() => setMenuOption(type)}
        className="section-button"
        style={
          menuOption === type ? {
            borderWidth: "2px",
            borderStyle: "solid",
            borderColor: "rgb(204, 68, 0)",
          } : {opacity: .8}
        }
      >
        {type}
      </div>
    );
  };

  const handleIngredientsUpgradeButton = () => {
    dispatch(add_ingredient_level());
    dispatch(remove_coins(upgradesData.ingredients.price));
  };
  const handleAdsUpgradeButton = () => {
    dispatch(add_ads_level());
    dispatch(remove_coins(upgradesData.ads.price));
  };

  return (
    <div className="App">
      <DevMenu />
      <div className="score-area">
        {abbreviateNumber(coins)}
        <img src={pizzacoin} alt="pizzacoin" />
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
        <div className="menu-top">
          <SectionButton type="Upgrades" />
          <SectionButton type="Stats" />
          <SectionButton type="Settings" />
        </div>
        <div className="menu-bottom">
          <div className="upgrades-container">
            <div className="upgrade-box">
              <p className="upgrade-name">{upgradesData.ingredients.name}</p>
              <div className="upgrade-stats">
                <p>Level: {upgradesData.ingredients.level}</p>
                <p>Coins Per Click: {getIngredientsUpgradeData(upgradesData.ingredients.level + 1).bonusClick}</p>
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
                  Coins Per Second: {getAdsUpgradeData().bonusClicksPerSecond}
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
    </div>
  );
}

export default App;
