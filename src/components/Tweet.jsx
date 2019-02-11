import React from 'react';

const db = [
  {
    icon: 'https://pbs.twimg.com/profile_images/1087413985698332680/OkCW4GZs_bigger.jpg',
    handle: `j cole`,
    message: `i don’t never wanna be propped up by tearing somebody else down. Seeing Cardi b win a Grammy make me feel like I won. Same with jay rock and Anderson. I feel for Travis cuz he really deserved that acknowledgement as well, but his moment is way bigger than the awards could say`
  }
];

function ProfilePic(props) {
  const block = {
    gridColumnStart: 'left'
  }

  return (
    <div style={ block }>



    <p>{props.icon}</p>
    </div>
  )
}

function Message(props) {
  const block = {
    gridColumnStart: 'right'
  }

  return (
    <div style={ block }>
    <p>{props.message}</p>
    </div>
  )
}

function Status() {
  const icon = {
    marginRight: '2em',
    fontSize: '1.4em',
    color: '#868686',
    gridColumnStart: 'right'
  }

  return (
    <div style ={ icon }>
      <i className="far fa-comment" style={ icon }></i>
      <i className="fas fa-retweet" style={ icon }></i>
      <i className="far fa-heart" style={ icon }></i>
      <i className="far fa-share-square" style={ icon }></i>
    </div>
  )
}

const Tweet = () => {
  const block = {
    display: 'grid',
    gridTemplateColumns: '[left] 90px [right] auto',
    gridTemplateRows: 'auto 40px',
    backgroundColor: 'red'
  }

  return(
    <div style={ block }>
      <ProfilePic
        icon={db[0].icon}/>
      <Message
        message={db[0].message}/>
      <Status/>

    </div>
  );
  }

export default Tweet
