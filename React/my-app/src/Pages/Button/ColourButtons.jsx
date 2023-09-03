import React, {useState} from 'react'
import "./ColourButton.css"

function ColourButtons() {
  const [Background, setBackground] = useState(['black','black','black','black' ]);
  const Click=(bnum)=>{
    const NewBackground=Background.map((color,index)=>index===bnum?'green':'red');
    setBackground(NewBackground);
  };
  return (
    <div>
        <div className='main'>
        <button onClick={()=>Click(0)} style={{backgroundColor:Background[0]}}>Button 1</button>
        <button onClick={()=>Click(1)} style={{backgroundColor:Background[1]}}>Button 2</button>
        <button onClick={()=>Click(2)} style={{backgroundColor:Background[2]}}>Button 3</button>
        <button onClick={()=>Click(3)} style={{backgroundColor:Background[3]}}>Button 4</button>


        </div>
    </div>
  )
}

export default ColourButtons