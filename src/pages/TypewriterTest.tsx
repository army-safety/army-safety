import React, { useEffect, useState, useRef } from 'react';
import './TypewriterTest.css';

const testText = "This is a typewriter test — animated text should appear here.";

export default function TypewriterTest() {
  const [typedText, setTypedText] = useState("");
  const typeIndex = useRef(0);
  useEffect(() => {
    setTypedText("");
    typeIndex.current = 0;
    const interval = setInterval(() => {
      if (typeIndex.current < testText.length) {
        setTypedText((prev) => prev + testText[typeIndex.current]);
        typeIndex.current++;
      } else {
        clearInterval(interval);
      }
    }, 60);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="typewriter-test-container">
      <span className="typewriter-test-text">{typedText}<span className="typewriter-test-cursor">|</span></span>
    </div>
  );
}
