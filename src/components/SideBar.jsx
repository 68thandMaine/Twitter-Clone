import React from 'react';
import {Motion, spring} from 'react-motion';
import SidebarTweet from './SidebarTweet'

export class SideBar extends React.Component {
  constructor(props) {
    super(props);
  };

render(){
  const block = {
    width: '30%',
    backgroundColor: 'white',
    overflow: 'hidden'
  }

  return(
    <div style={block}>
      {this.props.heartedTweets.map((tweet) =>
        <SidebarTweet removeHeart={this.props.removeHeart }tweet={tweet} key={tweet.id}/>)}

      </div>);
    }
  }

export default SideBar;
