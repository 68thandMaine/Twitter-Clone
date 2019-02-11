import React from 'react';
import SideBar from './SideBar';
import Stream from './Stream';

const Content = () =>{

  const bottom = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '2em',

  };

  return(
    <div style= { bottom }>
      <Stream/>
      <SideBar/>
    </div>
  );
}

export default Content;
