// hero.jsx
import React, { useState } from 'react';
import './hero.css';
import PlayIcon from './../../assets/play.svg';
import PauseIcon from './../../assets/pause.svg';

const name = window.prompt('What is your name: ');

function Hero({ setPlayStatus, text1, text2 }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
    setPlayStatus(true); // Update playStatus in App.jsx to true
  };

  const handlePauseClick = () => {
    setIsPlaying(false);
    setPlayStatus(false); // Update playStatus in App.jsx to false
  };

  return (
    <>
      <div className="hero">
        <h1 id="head">Hello, {name}</h1>
        <div className="text text-animation">
          <span>{text1} <br />{text2}</span>
        </div>
        <button id="button" role="button">Shop now!</button>
      </div>
      
      <div id="vidbut">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" style={{ display: isPlaying ? 'none' : 'flex' }} onClick={handlePlayClick}><path d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" style={{ display: isPlaying ? 'flex' : 'none' }} onClick={handlePauseClick}><path d="M360-320h80v-320h-80v320Zm160 0h80v-320h-80v320ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
      </div>
    </>
  );
}

export default Hero;
