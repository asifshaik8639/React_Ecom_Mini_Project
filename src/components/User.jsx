// VideoPlayer.js

import React from 'react';
import YouTube from 'react-youtube';
import '../assets/media.css';

const User = ({ videoId }) => {
  const opts = {
    height: '90vh',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <>
      <h2>YouTube Video Player 2</h2>
      <div className='video-container'>
        <YouTube videoId={'PuTe6i8A3Ug'} opts={opts} />
      </div>
    </>

  );
};

export default User;

