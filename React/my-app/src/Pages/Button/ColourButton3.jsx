import React, { useRef } from 'react';
import "./ColourButton.css"

function ColourButton3() {
  const [button1,button2,button3,button4] = [useRef(),useRef(),useRef(),useRef()];


  function task1() {
    button1.current.style.backgroundColor = 'green';
    button2.current.style.backgroundColor = 'red';
    button3.current.style.backgroundColor = 'red';
    button4.current.style.backgroundColor = 'red';
  }

  function task2() {
    button2.current.style.backgroundColor = 'green';
    button1.current.style.backgroundColor = 'red';
    button3.current.style.backgroundColor = 'red';
    button4.current.style.backgroundColor = 'red';
  }

  function task3() {
    button3.current.style.backgroundColor = 'green';
    button1.current.style.backgroundColor = 'red';
    button2.current.style.backgroundColor = 'red';
    button4.current.style.backgroundColor = 'red';
  }

  function task4() {
    button4.current.style.backgroundColor = 'green';
    button1.current.style.backgroundColor = 'red';
    button2.current.style.backgroundColor = 'red';
    button3.current.style.backgroundColor = 'red';
  }

  return (
    <div className='main'>
      <div>
        <button ref={button1} onClick={task1}>button1</button>
      </div>
      <div>
        <button ref={button2} onClick={task2}>button2</button>
      </div>
      <div>
        <button ref={button3} onClick={task3}>button3</button>
      </div>
      <div>
        <button ref={button4} onClick={task4}>button4</button>
      </div>
    </div>
  )
}

export default ColourButton3;
