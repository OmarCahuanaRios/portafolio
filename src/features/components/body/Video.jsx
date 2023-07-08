import React , { useState, useEffect }from 'react';
import lora from './lora.mp4';
import "./Video.css"


const VideoComponent = () => {
    const [text, setText] = useState('');
    const [secondLine, setSecondLine] = useState('');
    const [thirdLine, setThirdLine] = useState('');
    const textToType = '¡Hola! Soy Omar :)';
    const typeSecondLine= 'Frontend Developer';
    const typeThirdLine= 'Junior'
    const [isBlinking, setIsBlinking] = useState(true);
    const character = '|';

    useEffect(() => {
        let currentIndex = 0;
        let currentIndex2 = 0;
        let currentIndex3 = 0;
        
    
         const intervalId = setInterval(() => {
            if (currentIndex < textToType.length) {
                const newText = textToType.substring(0, currentIndex + 1);
                setText(newText);
                currentIndex++;
              } else {
                clearInterval(intervalId);
              }
        }, 100); 
        

        const intervalId2 = setInterval(() => {
            if (currentIndex2 < typeSecondLine.length) {
                const newText = typeSecondLine.substring(0, currentIndex2 + 1);
                setSecondLine(newText);
                currentIndex2++;
              } else {
                clearInterval(intervalId2);
              }
        }, 100); 
    

        const intervalId3 = setInterval(() => {
            if (currentIndex3 < typeThirdLine.length) {
                const newText = typeThirdLine.substring(0, currentIndex3 + 1);
                setThirdLine(newText);
                currentIndex3++;
              } else {
                clearInterval(intervalId3);
              }
        }, 100); 

        const caracterInterval = setInterval(() => {
            setIsBlinking((prevIsBlinking) => !prevIsBlinking);
          }, 500); // Tiempo en milisegundos entre el parpadeo
      

        return () => {
          clearInterval(intervalId);
          clearInterval(intervalId2);
          clearInterval(intervalId3);
          clearInterval(caracterInterval);
        };
      }, []);

      const handlePause = (event) => {
        if (event.code=== 'Space') {
          event.preventDefault(); 
        }
        event.preventDefault();
      };

      document.addEventListener('keydown', handlePause);


      const codeStyle = {
        fontFamily: 'Consolas, monospace',
      };
      

  return (
    <div style={{ width: '100%',maxWidth:'100vw'}}>
        <div className="overlay"></div>
    <video   src={lora} controls autoPlay loop muted onClick={handlePause}/>
    
      
    
    <style>
        {`
        video::-webkit-media-controls-play-button,
        video::-webkit-media-controls-overflow-button,
        video::-webkit-media-controls-fullscreen-button,
        video::-webkit-media-controls-timeline,
        video::-webkit-media-controls-current-time-display,
        video::-webkit-media-controls-time-remaining-display {
          display: none !important;
        }
        `}
    </style>
      <div className='content'>
        <div className='columna'>
            <div className="maquinaType">
                <p style={codeStyle}>{text}</p>
                <br />
                <p style={codeStyle}>{secondLine}</p>
                <br />
                <p style={codeStyle}>{thirdLine}{isBlinking?character:null}</p>
            </div>
        </div> 
      </div>
    </div>
  );
};

export default VideoComponent;