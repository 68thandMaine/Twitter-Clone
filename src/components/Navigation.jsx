import React from 'react';

const Navigation = () => {
  const block = {
    fontSize: '1.8em',
    display: 'inline'
  };

  const icon = {
    margin: '20px'
  };

  return(
    <div style={ block }>
      <i style={ icon } className="fas fa-home"></i>
      <i style={ icon } className="fas fa-search"></i>
      <i style={ icon } className="far fa-bell"></i>
      <i style={ icon } className="far fa-envelope"></i>
    </div>
  );
};

export default Navigation;
