import React from 'react'
import PropTypes from 'prop-types'
import {Motion, spring} from 'react-motion';


export default class SidebarTweet extends React.Component {
  constructor(props) {
    super(props)
    this.state ={open: false}

  }

  slideTweet(tweetId){
    this.setState({open: !this.state.open});
    setTimeout(()=>{
      this.props.removeHeart(tweetId)}, 600)
  }

  render() {
    return(
      <div>
        <Motion style={{x: spring(this.state.open ? 450 : 0)}}>
          {({x}) =>
          <p style={{WebkitTransform: `translate3d(${x}px, 0, 0)`,
          transform: `translate3d(${x}px, 0, 0)`}}>
            <span onClick={()=> this.slideTweet(this.props.tweet.id)}>X </span>
            {this.props.tweet.message}
          </p>
        }
        </Motion>

    </div>)
  }

}

SidebarTweet.propTypes = {
  tweet: PropTypes.object
}
