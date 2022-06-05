import React from 'react';
import Black from '../../img/black.png';
import BtnOpen from '../BtnOpenComponent/BtnOpen';
import InfoCard from '../InfoCardComponent/InfoCard';
import Line from '../LineComponent/Line';

const BlackPage = () => {
  return (
    <div>
      <Line card="black"></Line>
      <section className="container">
        <InfoCard card="black" />
        <aside className="slide-right">
          <img className="card slide-left" src={Black} alt="" />
          <div>
            <p>
              Um cartão
              <span> sem limites</span> e <span>zero anuidade</span>
            </p>
          </div>
          <div className="">
            <p>
              <span>Zero taxas </span> em seus investimentos
            </p>
          </div>
          <BtnOpen btn_color="black" />
        </aside>
      </section>
    </div>
  );
};
export default BlackPage;
