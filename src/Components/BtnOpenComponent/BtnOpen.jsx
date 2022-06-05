import React from 'react';
import { useState } from 'react';
import './style.css';
const BtnOpen = ({ btn_color }) => {
  return (
    <button
      className={
        btn_color === 'black'
          ? 'black_btn btn_bottom'
          : btn_color === 'platinum'
          ? 'platinum_btn btn_bottom'
          : btn_color === 'gold'
          ? 'gold_btn btn_bottom'
          : ''
      }
    >
      Abrir Conta
    </button>
  );
};
export default BtnOpen;
