import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { DevMenu } from "./components/devMenu/DevMenu";
import { add_click } from "./redux/actions/coinsSet";
import abbreviateNumber from "./scripts/abbreviateNumber";
import pizza from "./images/pizza.png";
import pizzacoin from "./images/pizza-coin.png";
import { BackgroundEmoji } from "./components/backgroundEmoji/BackgroundEmoji";

function App() {
  const dispatch = useDispatch();
  const coins = useSelector((state) => state.coins.coinsAmmount);
  const coinsPerClick = useSelector((state) => state.coins.coinsPerClick);
  const [backgroundEmojis, setbackgroundEmojis] = useState([]);
  const [menuOption, setMenuOption] = useState('upgrades')
  const handlePizzaClick = () => {
    dispatch(add_click());
    setbackgroundEmojis([
      ...backgroundEmojis,
      <BackgroundEmoji key={(new Date() / 1000)} />,
    ]);
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
            <span onClick={()=>setMenuOption('upgrades')}>Upgrades</span>
            <span onClick={()=>setMenuOption('stats')}>Stats</span>
            <span onClick={()=>setMenuOption('settings')}>Settings</span>
        </div>
        <div className="menu-bottom">

        </div>
      </div>
    </div>
  );
}

export default App;
