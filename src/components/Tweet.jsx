import React from 'react';
import { ProfilePic } from './ProfilePic';
import { Message } from './Message';
import { Status } from './Status';
import PropTypes from 'prop-types';

const Tweet = props => {
  const block = {
    display: 'grid',
    gridTemplateColumns: '[left] 90px [right] auto',
    gridTemplateRows: 'auto 40px',
    padding: '15px',
    borderBottom: '2px solid #d2d2d2',
    backgroundColor: 'white'
  };

  return (
    <div>
      {props.allTweets.map(({ icon, handle, message, id }) => [
        <div key={id} style={block}>
          <ProfilePic icon={icon} />
          <Message handle={handle} message={message} />
          <Status theTweet={id} onAddTweetToSidebar={props.onAddTweetToSidebar}/>
        </div>
      ])}
    </div>
  );
};

Tweet.propTypes ={
  onAddTweetToSidebar: PropTypes.func
};

export default Tweet;
