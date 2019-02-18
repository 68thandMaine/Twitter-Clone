import React from 'react';


const SideBar = (props)=> {
  const block = {
    width: '30%',
    backgroundColor: 'white'
  }

  console.log(props)
  return(
    <div style={ block }>
      {props.heartedTweets.map((tweet) =>
      <p key={tweet.id}><span onClick={()=> props.removeHeart(tweet.id)}>X </span>{tweet.message}</p>)}
    </div>
  );
}

export default SideBar;
