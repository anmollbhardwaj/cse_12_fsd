import React, { useState } from 'react';
import cat from '../images/cat.png';

function Imagemanipulation() {
  const [height, setHeight] = useState(200);
  const [width, setWidth] = useState(200);

  const [red, setRed] = useState(20);
  const [green, setGreen] = useState(200);
  const [blue, setBlue] = useState(140);

  const [angle, setAngle] = useState(0);

  
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  function enhanceHeight() {
    setHeight(prev => prev + 10);
  }

  function enhanceWidth() {
    setWidth(prev => prev + 10);
  }

  function rotateImage() {
    setAngle(prev => prev + 25);
  }

  
  function topMargin() {
    setY(prev => prev + 10);
  }

  
  function bottomMargin() {
    setY(prev => prev - 10);
  }

  
  function leftMargin() {
    setX(prev => prev + 10);
  }
  function rightMargin() {
    setX(prev => prev - 10);
  }

  return (
    <div>

      <h2
        style={{
          color: 'white',
          backgroundColor: 'brown'
        }}
      >
        Image Manipulation using React
      </h2>


      <div
        style={{
          border: '2px solid red',
          height: '400px',
          width: '500px',
          marginLeft: '300px',
          overflow: 'hidden'
        }}
      >

        <img
          src={cat}
          alt="Cat"
          style={{
            height: `${height}px`,
            width: `${width}px`,
            backgroundColor: `rgb(${red}, ${green}, ${blue})`,

            transform: `
              translate(${x}px, ${y}px)
              rotate(${angle}deg)
            `,

            transition: '0.2s'
          }}
        />

      </div>


      <div>
        <h3>Cat Height: {height}px</h3>
        <h3>Cat Width: {width}px</h3>
        <h3>Rotation: {angle}°</h3>
      </div>


      <button onClick={enhanceHeight}>
        Enhance Height
      </button>

      <button onClick={enhanceWidth}>
        Enhance Width
      </button>

      <button onClick={rotateImage}>
        Rotate
      </button>

      <br /><br />


      <button onClick={topMargin}>
        Top Margin
      </button>

      <button onClick={bottomMargin}>
        Bottom Margin
      </button>

      <button onClick={leftMargin}>
        Left Margin
      </button>

      <button onClick={rightMargin}>
        Right Margin
      </button>

    </div>
  );
}

export default Imagemanipulation;