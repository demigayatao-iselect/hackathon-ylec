import * as React from 'react';

export const Label = ({ text }) => (
  <div style={{ display: 'flex' }}>
    <div style={{ width: 10, backgroundColor: '#11BCD8' }} />
    <h3 style={{ paddingLeft: 10, margin: 0 }}>{text}</h3>
  </div>
);
