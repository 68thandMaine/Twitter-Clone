import React from 'react';
import PropTypes from 'prop-types'

export class Status extends React.Component{
  constructor(props) {
    super(props)
    console.log(props)

    this.state = {
      color: '#868686'

      // color: 'red'
      // isHearted: false
    }

    this.heartClick = this.heartClick.bind(this)
  }




  heartClick(){
    console.log("you clicked on the heart ", this.props)

    this.setState({color: 'red'})




    this.props.onAddTweetToSidebar(this.props.theTweet)


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
        <i className='far fa-heart' onClick={this.heartClick} style={{...icon, color: this.state.color}} />
        <i className='far fa-share-square' style={icon} />
      </div>
    );


  }

}

Status.propTypes = {
  theTweet: PropTypes.string,
  onAddTweetToSidebar: PropTypes.func

}


//
// theTweet={id} onAddTweetToSidebar={props.onAddTweetToSidebar}
