import React from 'react';
import SideBar from './SideBar';
import Stream from './Stream';


class Content extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      tweetsDb:[]
    };
    this.handleAddTweetToDb = this.handleAddTweetToDb.bind(this);
    this.handleFavATweet = this.handleFavATweet.bind(this);
  }


handleAddTweetToDb(tweet) {
  this.setState(state => {
    return { tweetsDb: [tweet, ...state.tweetsDb] };
  });
}


handleFavATweet(tweetId){
  let newState = this.state.tweetsDb.slice();

  newState.forEach((tweet) =>
  {
    if (tweet.id === tweetId) {
      if (!tweet.heart) {
        tweet.heart = true;
      } else { tweet.heart = false; }

    }
  })
  this.setState({tweetsDb: newState});
}




render(){
  const bottom = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '2em',
  };

  return(
    <div style= { bottom }>
      <Stream allTweets={this.state.tweetsDb} onAddTweetToDb={this.handleAddTweetToDb} onAddTweetToSidebar={this.handleFavATweet}/>
      <SideBar removeHeart={this.handleFavATweet} heartedTweets={this.state.tweetsDb.filter((tweet) => tweet.heart)}/>
    </div>
  );

}
}

export default Content;
