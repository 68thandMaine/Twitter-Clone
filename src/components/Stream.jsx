import React from 'react';
import QuickTweet from './QuickTweet';
import Tweet from './Tweet';
import PropTypes from 'prop-types';

class Stream extends React.Component {
  constructor(props) {
    super(props);



    this.block = {
      width: '65%'
      // backgroundColor: 'white'
    };


  }



  render() {
    return (
      <div style={this.block}>
        <QuickTweet onAddTweetToDb={this.props.onAddTweetToDb} />
        <Tweet allTweets={this.props.allTweets} onAddTweetToSidebar={this.props.onAddTweetToSidebar} />
      </div>
    );
  }
}

Stream.propTypes ={
  onAddTweetToSidebar: PropTypes.func
};
export default Stream;
