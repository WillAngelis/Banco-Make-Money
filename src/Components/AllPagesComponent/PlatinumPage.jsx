import React from 'react';
import Platinum from '../../img/platinum.png';
import BtnOpen from '../BtnOpenComponent/BtnOpen';
import InfoCard from '../InfoCardComponent/InfoCard';
import Line from '../LineComponent/Line';

const PlatinumPage = () => {
  return (
    <div>
      <Line card="platinum"></Line>
      <section className="container">
        <InfoCard card="platinum" />
        <aside className="slide-right">
          <img className="card slide-left" src={Platinum} alt="" />
          <div>
            <p>
              Um cartão
              <span> zero anuidade</span>
            </p>
          </div>
          <div className="">
            <p>
              <span>Zero taxas </span> em seus investimentos
            </p>
          </div>
          <BtnOpen btn_color="platinum" />
        </aside>
      </section>
    </div>
  );
};
export default PlatinumPage;
