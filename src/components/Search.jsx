import React from 'react';

const Search =() => {
  const block = {
    paddingLeft: '50px',
    fontSize: '2em',
    display: 'inline'
  };

  const styledInput = {
    backgroundColor: "#f5f8fa",
    borderRadius: "21px",
    border: "1px solid #e6ecf0",
    boxSizing: "border-box",
    color: "#14171a",
    fontSize: "12px",
    height: "32px",
    lineHeight: "16px",
    padding: "8px 32px 8px 12px",
    width: "50%"
  }

  return(
    <div style={ block }>
      <input style={ styledInput }></input>
    </div>
  );
};

export default Search;
