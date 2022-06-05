import React from 'react';
import { useState } from 'react';
import Black from '../../img/black.png';
import Gold from '../../img/white.png';
import Platinum from '../../img/platinum.png';

const InfoCard = ({ card }) => {
  return (
    <>
      <section className="infoCard slide-right">
        <div
          className={
            card === 'black'
              ? 'black'
              : card === 'platinum'
              ? 'platinum'
              : card === 'gold'
              ? 'gold'
              : ''
          }
        >
          <p>
            O <span>maior cashback</span> dos bancos digitais
          </p>
        </div>
        <div
          className={
            card === 'black'
              ? 'black '
              : card === 'platinum'
              ? 'platinum '
              : card === 'gold'
              ? 'gold'
              : ''
          }
        >
          <p>
            <span>Recompensas</span> a cada compra em nossa
            <span> moeda digital.</span>
          </p>
        </div>
        <div
          className={
            card === 'black'
              ? 'black cardBox'
              : card === 'platinum'
              ? 'platinum cardBox'
              : card === 'gold'
              ? 'gold cardBox'
              : ''
          }
        >
          <h1>
            Cartão
            {card === 'black'
              ? ' Black'
              : card === 'platinum'
              ? ' Platinum'
              : card === 'gold'
              ? ' Gold'
              : ''}
          </h1>
          <img
            src={
              card === 'black'
                ? Black
                : card === 'platinum'
                ? Platinum
                : card === 'gold'
                ? Gold
                : ''
            }
            className="cardHor slide-right"
            alt=""
          />
        </div>
      </section>
    </>
  );
};
export default InfoCard;
