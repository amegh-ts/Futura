import React, { useState } from 'react';
import "./ColourButton.css"

function ColourButton2() {
  const [Background, setBackground] = useState(['black', 'black', 'black', 'black']);
  const Click = (bnum) => {
    const newBackground = Background.map((color, index) =>index === bnum ? 'green' : 'red');
    setBackground(newBackground);
  };
  return (
    <div className='main'>
      {Background.map((color, bnum) => (
        <div key={bnum}>
          <button onClick={() => Click(bnum)}style={{ backgroundColor: color }}>
            Click
          </button>
        </div>
      ))}
    </div>
  );
}

export default ColourButton2;
