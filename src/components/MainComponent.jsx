import React, { useState } from 'react';
import Joystick from './Joystick';
import ControlledDiv from './ControlledDiv';

function MainComponent() {
    const [controlledDivPosition, setControlledDivPosition] = useState({ left: 100, top: 100 });

    const handleJoystickMove = (deltaX, deltaY) => {
        setControlledDivPosition((prevPos) => ({
            left: Math.max(0, Math.min(window.innerWidth - 100, prevPos.left + deltaX)),
            top: Math.max(0, Math.min(window.innerHeight - 100, prevPos.top + deltaY)),
        }));
    };

    return (
        <div>
            <Joystick onMove={handleJoystickMove} />
            <ControlledDiv />
        </div>
    );
}

export default MainComponent;
