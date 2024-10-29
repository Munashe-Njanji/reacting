import React, { useState } from 'react';

function ControlledDiv() {
  const [position, setPosition] = useState({ left: 100, top: 100 });

  const handleMove = (deltaX, deltaY) => {
    setPosition((prevPos) => ({
      left: Math.max(0, Math.min(window.innerWidth - 100, prevPos.left + deltaX)),
      top: Math.max(0, Math.min(window.innerHeight - 100, prevPos.top + deltaY)),
    }));
  };

  return (
    <div
      style={{
        position: 'absolute',
        left: `${position.left}px`,
        top: `${position.top}px`,
        width: '100px',
        height: '100px',
        backgroundColor: 'lightblue',
      }}
    >
      I'm moving with the joystick!
    </div>
  );
}

export default ControlledDiv;
