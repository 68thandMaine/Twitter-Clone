import React from 'react';
import Search from './Search'
import User from './User'
import Navigation from './Navigation'

function Header() {
  const block = {
    borderBottom:"1px solid rgba(0,0,0,0.05)",
    zIndex:"1000",
    padding: '0',
    margin: '0',
    backgroundColor: 'white'
  }

  return (
    <div style={ block }>
      <Navigation/>
      <Search/>
      <User/>
    </div>
  )
}

export default Header
