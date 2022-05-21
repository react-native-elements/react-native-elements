import React from 'react';

const colors = {
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

export const Palette = () => {
  return (
    <div
      style={{
        display: 'flex',
        gap: '20px',
        flexWrap: 'wrap',
      }}
    >
      {Object.entries(colors).map(([key, color]) => {
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
