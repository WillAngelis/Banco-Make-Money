import React from 'react';

const Line = ({ card }) => {
  return (
    <div
      className={
        card === 'black'
          ? 'line color-change-black'
          : card === 'platinum'
          ? 'line color-change-platinum'
          : card === 'gold'
          ? 'line color-change-gold'
          : ''
      }
    ></div>
  );
};
export default Line;
