import React from 'react';

const lightColors = {
  primary: '#2089dc',
  secondary: '#ca71eb',
  background: '#ffffff',
  white: '#ffffff',
  black: '#242424',
  grey0: '#393e42',
  grey1: '#43484d',
  grey2: '#5e6977',
  grey3: '#86939e',
  grey4: '#bdc6cf',
  grey5: '#e1e8ee',
  greyOutline: '#bbb',
  searchBg: '#303337',
  success: '#52c41a',
  error: '#ff190c',
  warning: '#faad14',
  disabled: 'hsl(208, 8%, 90%)',
};

const darkColors = {
  primary: '#439ce0',
  secondary: '#aa49eb',
  background: '#080808',
  white: '#080808',
  black: '#f2f2f2',
  grey5: '#393e42',
  grey4: '#43484d',
  grey3: '#5e6977',
  grey2: '#86939e',
  grey1: '#bdc6cf',
  grey0: '#e1e8ee',
  greyOutline: '#bbb',
  searchBg: '#303337',
  success: '#439946',
  error: '#bf2c24',
  warning: '#cfbe27',
  disabled: 'hsl(208, 8%, 90%)',
};

export const Palette = ({ dark = false }) => {
  return (
    <div
      style={{
        display: 'flex',
        gap: '20px',
        flexWrap: 'wrap',
      }}
    >
      {Object.entries(dark ? darkColors : lightColors).map(([key, color]) => {
        return (
          <div>
            <div
              style={{
                background: color,
                width: '80px',
                height: '70px',
                display: 'block',
                borderRadius: '6px',
              }}
            ></div>
            <small>{key}</small>
          </div>
        );
      })}
    </div>
  );
};
