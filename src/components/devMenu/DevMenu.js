import React from 'react';
import './devMenu.css';
import { useSelector } from 'react-redux';

export const DevMenu = () => {
  const states = useSelector((state) => state.coins)
  return (
    <div className="dev-menu">
      coins - {states.coinsAmmount}<br />
      cpc - {states.coinsPerClick}<br />
      cps - {states.coinsPerSecond}<br />
    </div>
  )
}
