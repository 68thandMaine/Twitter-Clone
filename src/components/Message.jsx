import React from 'react';
export function Message(props) {
  const block = {
    gridColumnStart: 'right',
    fontFamily: 'sans-serif'
  };
  return (
    <div style={block}>
      <h3>{props.handle}</h3>
      <p>{props.message}</p>
    </div>
  );
}
