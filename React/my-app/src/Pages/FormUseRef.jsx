import React, { useRef } from 'react';

const FormUseRef = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const telRef = useRef(null);

  const display = () => {
    console.log('Form values:');
    console.log('Name:', nameRef.current.value);
    console.log('Email:', emailRef.current.value);
    console.log('Password:', passwordRef.current.value);
    console.log('Phone:', telRef.current.value);
  };

  return (
    <div className="form-container">
      <input
        type="text"
        placeholder="Name"
        ref={nameRef}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            emailRef.current.focus();
          }
        }}
      />
      <input
        type="email"
        placeholder="Email"
        ref={emailRef}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            passwordRef.current.focus();
          }
        }}
      />
      <input
        type="password"
        placeholder="Password"
        ref={passwordRef}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            telRef.current.focus();
          }
        }}
      />
      <input
        type="tel"
        placeholder="Phone"
        ref={telRef}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            display();
          }
        }}
      />
      <button onClick={display}>Submit</button>
    </div>
  );
};

export default FormUseRef;
