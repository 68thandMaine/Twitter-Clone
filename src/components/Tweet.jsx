import React from 'react';

const db = [
  {
    icon: 'https://pbs.twimg.com/profile_images/1087413985698332680/OkCW4GZs_bigger.jpg',
    handle: `j cole`,
    message: `i don’t never wanna be propped up by tearing somebody else down. Seeing Cardi b win a Grammy make me feel like I won. Same with jay rock and Anderson. I feel for Travis cuz he really deserved that acknowledgement as well, but his moment is way bigger than the awards could say`
  },
  {
    icon: 'https://pbs.twimg.com/profile_images/1027369868025384960/rrMe4ORr_bigger.jpg',
    handle: `Monique`,
    message: `You don’t always need awards to solidify your mark in this world. Just the impact your music has on your fans can be just as gratifying. ♥️`
  },
  {
    icon: 'https://pbs.twimg.com/profile_images/1032611003408769025/wrCAEPLN_bigger.jpg',
    handle: `Know your worth`,
    message: `Ppl rapping your songs so you already won...think that's how Drake put it`
  }
];

function ProfilePic(props) {
  const block = {
    gridColumnStart: 'left'

  }

  const imgStyling = {
    borderRadius: '100%'
  }

  return (
    <div style={ block }>
      <img src={props.icon} style={ imgStyling }></img>
    </div>
  )
}

function Message(props) {
  const block = {
    gridColumnStart: 'right',
    fontFamily: 'sans-serif'
  }

  return (
    <div style={ block }>
      <h3>{props.handle}</h3>
      <p>{props.message}</p>
    </div>
  )
}

function Status() {
  const block = {
    borderBotton: '1px solid black',
    fontSize: '1.4em',
    color: '#868686',
    gridColumnStart: 'right',
    borderBottom: '1px solid #d2d2d2',
    padding: '10px 0 25px'
  }

  const icon = {
    marginRight: '2em'
  }

  return (
    <div style ={ block }>
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
    padding: '15px',

    }



  return(
    <div style={ block }>
      {
        db.map( ( {icon, handle, message} ) =>
        [
            <ProfilePic icon={icon}/>,
            <Message handle={handle} message={message}/>,
            <Status/>
        ]
      )}
    </div>
  )
}

export default Tweet
