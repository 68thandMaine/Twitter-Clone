import React from 'react';
import PropTypes from 'prop-types'

export class Status extends React.Component{
  constructor(props) {
    super(props)

    this.heartClick = this.heartClick.bind(this)
  }




  heartClick(){
    this.props.onAddTweetToSidebar(this.props.theTweet.id)
  }

  render() {

    const block = {
      borderBotton: '1px solid black',
      fontSize: '1.4em',
      color: '#868686',
      gridColumnStart: 'right',
      padding: '10px 0 25px'
    };
    const icon = {
      marginRight: '2em'
    };

    return (
      <div style={block}>
        <i className='far fa-comment' style={icon} />
        <i className='fas fa-retweet' style={icon} />
        <i className='far fa-heart' onClick={this.heartClick} style={ this.props.theTweet.heart ? {...icon, color: 'red'}: {...icon, color: '#868686'} } />
        <i className='far fa-share-square' style={icon} />
      </div>
    );
// if true return color: red : color: '#868686'

  }

}

Status.propTypes = {
  theTweet: PropTypes.object,
  onAddTweetToSidebar: PropTypes.func

}


//
// theTweet={id} onAddTweetToSidebar={props.onAddTweetToSidebar}
