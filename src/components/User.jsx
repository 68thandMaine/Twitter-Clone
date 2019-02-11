import React from 'react';

const User =() => {
  const block = {
    float: 'right',
    display: 'inline',
    marginRight: '35px',
    fontSize: "1.2em",
    fontFamily: 'sans-serif'
  }

  const icon = {
    margin: '20px'
  };

  const name = "Ralph"

  return(
    <div style={ block }>
      <i className="far fa-user-circle" style={ icon }></i>
      { name }
      <i className="fas fa-unlock-alt" style={ icon }></i>
      <i className="fas fa-angle-down" ></i>
    </div>
  );
};

export default User;
