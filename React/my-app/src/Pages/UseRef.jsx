import React, { useEffect, useRef } from "react";
// change style
function UseRef() {
  const Sampleref = useRef();
  const Sampleref1 = useRef();
  const Input1=useRef();

  const show = () => {
    Sampleref.current.style.backgroundColor = "red";
    Sampleref1.current.innerText = "Welcome Guysss";
    Sampleref.current.innerHTML='<h1>how r you</h1>'
  };

  useEffect(()=>{
    Input1.current.focus()
  },[])

  return (
    <div ref={Sampleref}>
      <h1 ref={Sampleref1}>helloo</h1>
      <button onClick={show}>click</button>

      <div>
        <input  type="text" placeholder="Name"/>
        <input ref={Input1} type="text" placeholder="Name"/>
        <input  type="text" placeholder="Name"/>

      </div>
    </div>
  );
}

export default UseRef;
