import React, { useState, useEffect } from 'react';
import Background from './Components/background/background';
import Hero from './Components/hero/hero';
import NavBar from './Components/nav-bar/navBar';
import './App.css';


document.title = "EC6: your journey";

const textData = [
  { text1: "Dive into", text2: "what you love" },
  { text1: "Indulge", text2: "your passion" },
  { text1: "Give in to", text2: "your passion" }
];

function App() {
  const [heroCount, setHeroCount] = useState(0);
  const [playStates, setPlayStates] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % textData.length);
      setHeroCount((prevCount) => (prevCount + 1) % textData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <NavBar />
      <Background
        playStates={playStates}
        heroCount={heroCount}
      />
      <Hero
        setPlayStatus={setPlayStates}
        text1={textData[textIndex].text1}
        text2={textData[textIndex].text2}
      />
    </>
  );
}

export default App;
