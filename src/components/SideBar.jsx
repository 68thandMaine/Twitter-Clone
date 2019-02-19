import React from 'react';
import SidebarTweet from './SidebarTweet';

export class SideBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const block = {
      width: '30%',
      backgroundColor: 'white',
      overflow: 'hidden',
      fontFamily: 'sans-serif',
      padding: '1em'
    };

    return (
      <div style={block}>
        <h3>{this.props.heartedTweets.length ? 'Favorited tweets' : null}</h3>
        {this.props.heartedTweets.map(tweet => (
          <SidebarTweet
            removeHeart={this.props.removeHeart}
            tweet={tweet}
            key={tweet.id}
          />
        ))}
      </div>
    );
  }
}

export default SideBar;
