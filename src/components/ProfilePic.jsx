import React from 'react';
export function ProfilePic(props) {
  const block = {
    gridColumnStart: 'left'
  };
  const imgStyling = {
    borderRadius: '100%'
  };
  return (
    <div style={block}>
      <img src={props.icon} style={imgStyling} />
    </div>
  );
}
