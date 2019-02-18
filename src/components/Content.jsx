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
    this.addTweetToSidebar = this.addTweetToSidebar.bind(this);
  }


handleAddTweetToDb(tweet) {
  this.setState(state => {
    return { tweetsDb: [tweet, ...state.tweetsDb] };
  });
}


addTweetToSidebar(tweetId){
  let newState = this.state.tweetsDb.slice();

  newState.forEach((tweet) =>
  {
    if (tweet.id === tweetId) {
      tweet.heart = true;
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
      <Stream allTweets={this.state.tweetsDb} onAddTweetToDb={this.handleAddTweetToDb} onAddTweetToSidebar={this.addTweetToSidebar}/>
      <SideBar heartedTweets={this.state.tweetsDb.filter((tweet) => tweet.heart)}/>
    </div>
  );

}
}

export default Content;
