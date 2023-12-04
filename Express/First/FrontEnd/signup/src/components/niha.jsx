import React, { useState } from 'react';

const Niha = () => {
  // Assuming that 'data' is an object
  var data = JSON.parse(JSON.parse(localStorage.getItem('persist:loginusers')).user).userInfo[0];

  // Wrap 'data' object in an array
  const fullData = [data];

  // State to control whether to display the data or not
  const [data1, setdata1] = useState(false);

  const handleButtonClick = () => {
    setdata1(true);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Display Data</button>
      <div>
            {data1 && fullData.map((value, index) => (
              <div key={index}>
                <h1>{value.firstname}</h1>
              </div>
            ))}
          </div>
    </div>
  );
}

export default Niha;

