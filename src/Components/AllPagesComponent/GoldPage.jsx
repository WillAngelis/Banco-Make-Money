import React from 'react';
import Gold from '../../img/white.png';
import BtnOpen from '../BtnOpenComponent/BtnOpen';
import InfoCard from '../InfoCardComponent/InfoCard';
import Line from '../LineComponent/Line';

const GoldPage = () => {
  return (
    <div>
      <Line card="gold"></Line>
      <section className="container ">
        <InfoCard card="gold" />
        <aside className="slide-right">
          <img className="card slide-left" src={Gold} alt="" />
          <div>
            <p>
              Um cartão
              <span> zero anuidade</span>
            </p>
          </div>
          <div className="">
            <p>
              <span>Taxas menores</span> em seus investimentos
            </p>
          </div>
          <BtnOpen btn_color="gold" />
        </aside>
      </section>
    </div>
  );
};
export default GoldPage;
