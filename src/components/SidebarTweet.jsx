import React from 'react';
import PropTypes from 'prop-types';
import { Motion, spring } from 'react-motion';

export default class SidebarTweet extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  slideTweet(tweetId) {
    this.setState({ open: !this.state.open });
    setTimeout(() => {
      this.props.removeHeart(tweetId);
    }, 600);
  }

  render() {
    return (
      <div>
        <Motion style={{ x: spring(this.state.open ? 450 : 0) }}>
          {({ x }) => (
            <p
              style={{
                WebkitTransform: `translate3d(${x}px, 0, 0)`,
                transform: `translate3d(${x}px, 0, 0)`
              }}
            >
              <span
                onClick={() => this.slideTweet(this.props.tweet.id)}
                style={{
                  cursor: 'pointer',
                  width: '1em',
                  height: '1em',
                  padding: '.3em',
                  color: 'white',
                  borderRadius: '100%',
                  background: 'grey',
                  display: 'inline-block',
                  margin: '0 1em 0 0',
                  textAlign: 'center',
                  lineHeight: '1em'
                }}
              >
                &times;
              </span>
              {this.props.tweet.message}
            </p>
          )}
        </Motion>
      </div>
    );
  }
}

SidebarTweet.propTypes = {
  tweet: PropTypes.object
};
