import React from 'react';
import QuickTweet from './QuickTweet';
import Tweet from './Tweet';

const Stream = () => {
  const block = {
    width: '65%',
    backgroundColor: 'white'
  }

  return(
    <div style= { block }>
      <QuickTweet/>
      <Tweet/>
    </div>

  );
  }

export default Stream
