import React, { useEffect, useRef, useState } from "react";

export const Clicker = ({increment, keyName, color = 'darkOrchid'}) => { // darkOrchid is default color.

  // useState
  const [count, setCount] = useState(parseInt(localStorage.getItem(keyName) ?? 0));
  const buttonRef = useRef()

  useEffect(() => {
    buttonRef.current.style.backgroundColor = "salmon"
    buttonRef.current.style.color = "papayawhip"

    return () => 
    {
      console.log('component disposed'); // React will call that function when the component is being disposed of
      localStorage.removeItem(keyName)
    }

  }, []);

  // useEffect
  useEffect(() => {
    localStorage.setItem(keyName, count);
  }, [count]);

  const buttonClick = () => {
    setCount(count + 1);
    increment()
  };

  // useRef

  return (
    <>
      <div style={ { color: color } }>Clicks count: {count}</div>
      <button ref={ buttonRef } onClick={ buttonClick }>Click me</button>
    </>
  );
};
