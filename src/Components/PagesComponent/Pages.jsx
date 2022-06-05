import React from 'react';
import { useState } from 'react';
import Logo from '../../img/logoTransparent.png';
import BtnOpen from '../BtnOpenComponent/BtnOpen';
import GoldPage from '../AllPagesComponent/GoldPage';
import BlackPage from '../AllPagesComponent/BlackPage';
import PlatinumPage from '../AllPagesComponent/PlatinumPage';

const Pages = () => {
  const [activePage, setActivePage] = useState('gold');

  const handleTab1 = () => {
    // update the state to tab1
    setActivePage('gold');
  };

  const handleTab2 = () => {
    // update the state to tab2
    setActivePage('black');
  };

  const handleTab3 = () => {
    // update the state to tab2
    setActivePage('platinum');
  };

  return (
    <div className="pages">
      <nav>
        <div>
          <img src={Logo} />
        </div>
        {/* Navegação pelas páginas*/}
        <ul className="nav">
          <li
            className={activePage === 'gold' ? 'active' : ''}
            onClick={handleTab1}
          >
            Gold
          </li>
          <li
            className={activePage === 'platinum' ? 'active' : ''}
            onClick={handleTab3}
          >
            Platinum
          </li>
          <li
            className={activePage === 'black' ? 'active' : ''}
            onClick={handleTab2}
          >
            Black
          </li>
        </ul>
        <button className="btn_desktop">Abrir Conta</button>
      </nav>
      <div className="cards_page">
        {activePage === 'gold' ? (
          <GoldPage />
        ) : activePage === 'black' ? (
          <BlackPage />
        ) : (
          <PlatinumPage />
        )}
      </div>
    </div>
  );
};
export default Pages;
