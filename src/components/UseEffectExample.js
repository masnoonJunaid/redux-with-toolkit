import React, { useState, useEffect, useRef } from 'react';

export default function RenderCount() {
  const [name, setName] = useState('');
  const prevName = useRef('');
  const renderCount = useRef(1);
  const inputRef = useRef();

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  const focus = () => {
    inputRef.current.focus();
    inputRef.current.value = "Enter your name here"
  }

  return (
    <>
      <input ref={inputRef} value={name} onChange={e =>setName(e.target.value)} />
      <div>My name is {name}</div>
      <div>And unsed to be {prevName.current}</div>
      <button onClick={focus}>Focus</button>
    </>
  )
}