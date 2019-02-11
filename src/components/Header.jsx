import React from 'react';
import Search from './Search'
import User from './User'
import Navigation from './Navigation'

function Header() {
  const block = {
    "borderBottom":"1px solid rgba(0,0,0,0.05)",
    "position":"fixed",
    "top":"0",
    "right":"0",
    "left":"0",
    "zIndex":"1000"
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
