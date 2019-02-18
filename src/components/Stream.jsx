import React from 'react';
import QuickTweet from './QuickTweet';
import Tweet from './Tweet';
import { db } from './db';

class Stream extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweetsDb: []
    };

    this.block = {
      width: '65%'
      // backgroundColor: 'white'
    };

    this.handleAddTweetToDb = this.handleAddTweetToDb.bind(this);
  }

  handleAddTweetToDb(tweet) {
    this.setState(state => {
      return { tweetsDb: [tweet, ...state.tweetsDb] };
    });
  }

  render() {
    return (
      <div style={this.block}>
        <QuickTweet onAddTweetToDb={this.handleAddTweetToDb} />
        <Tweet allTweets={this.state.tweetsDb} />
      </div>
    );
  }
}

export default Stream;
