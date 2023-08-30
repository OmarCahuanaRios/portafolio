import React, { useState, useEffect } from 'react';
import lora from './lora.mp4';
import './Video.css';
import Yo from './Yo.png';

const VideoComponent = () => {
  const [text, setText] = useState('');
  const [secondLine, setSecondLine] = useState('');
  const [isSpace, setIsSpace] = useState(true);
  const [showSoftwareEngineer, setShowSoftwareEngineer] = useState(true);

  const character = '|';

  
  const jobTitles = ['Software Engineer', 'Full Stack Developer'];

  useEffect(() => {
    let currentIndex = 0;
    let currentIndex2 = 0;

  

    const intervalId2 = setInterval(() => {
      if (currentIndex2 < (showSoftwareEngineer ? jobTitles[0] : jobTitles[1]).length) {
        const newText = (showSoftwareEngineer ? jobTitles[0] : jobTitles[1]).substring(0, currentIndex2 + 1);
        setSecondLine(newText);
        currentIndex2++;
      } else {
        // When the second line text reaches the end, clear the interval and reset the index
        clearInterval(intervalId2);
        currentIndex2 = 0;

        // Also, toggle the showSoftwareEngineer state to switch to the other job title
        setTimeout(() => {
          setShowSoftwareEngineer((prev) => !prev);
        }, 2000);
      }
    }, 100);

    const intervalId3 = setInterval(() => {
      setIsSpace((prevIsSpace) => !prevIsSpace);
    }, 500);

    return () => {
     
      clearInterval(intervalId2);
      clearInterval(intervalId3);
    };
  }, [showSoftwareEngineer]);

  const handleKeyDown = () => {
    // Do nothing when the user presses a key
  };

  return (
    <div style={{ width: '100%', maxWidth: '100vw' }}>
      <video src={lora} autoPlay loop />
      <div className="overlay"></div>

      
      <div className="content">
        <div class="imagen">
          <img src={Yo} class="fotoperfil" alt="foto perfil Eduardo" />
        </div>
        <div className="subContent">
          <p className="name" >
            Omar Cahuana
          </p>
          <div className="columna">
            <div className="maquinaType">
              <br />
              <p className="Mini" style={{ width: `${secondLine.length + 1}ch` }}>
                {secondLine}
                {isSpace ? character : null}
              </p>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoComponent;
