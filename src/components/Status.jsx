import React from 'react';
export function Status() {
  const block = {
    borderBotton: '1px solid black',
    fontSize: '1.4em',
    color: '#868686',
    gridColumnStart: 'right',
    padding: '10px 0 25px'
  };
  const icon = {
    marginRight: '2em'
  };
  return (
    <div style={block}>
      <i className='far fa-comment' style={icon} />
      <i className='fas fa-retweet' style={icon} />
      <i className='far fa-heart' style={icon} />
      <i className='far fa-share-square' style={icon} />
    </div>
  );
}
