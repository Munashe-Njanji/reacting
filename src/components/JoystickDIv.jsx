import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import './Joystick.css';

function JoystickDiv() {
    const joystickRef = useRef(null);
    const originalPosition = useMemo(() => ({ left: window.innerWidth - 200, top: window.innerHeight - 200 }), []);
    const [position, setPosition] = useState(originalPosition);
    const [isDragging, setIsDragging] = useState(false);
    const allowableDistance = 50; // Set allowable movement distance

    const handleMouseDown = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleMouseMove = useCallback(
        (e) => {
            if (!isDragging) return;
            const joystick = joystickRef.current;
            if (joystick) {
                const rect = joystick.getBoundingClientRect();
                // Calculate distance from the original position
                const deltaX = e.clientX - (originalPosition.left + rect.width / 2);
                const deltaY = e.clientY - (originalPosition.top + rect.height / 2);
                const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
                // Limit movement to allowable distance
                if (distance <= allowableDistance) {
                    setPosition({
                        left: Math.max(0, Math.min(window.innerWidth - rect.width, e.clientX - rect.width / 2)),
                        top: Math.max(0, Math.min(window.innerHeight - rect.height, e.clientY - rect.height / 2)),
                    });
                } else {
                    // Calculate constrained position within allowable distance
                    const angle = Math.atan2(deltaY, deltaX);
                    setPosition({
                        left: originalPosition.left + allowableDistance * Math.cos(angle),
                        top: originalPosition.top + allowableDistance * Math.sin(angle),
                    });
                }
            }
        },
        [isDragging, originalPosition.left, originalPosition.top]
    );

    const handleMouseUp = useCallback(() => {
        setIsDragging(false);
        setPosition(originalPosition); // Snap back to the original position
    }, [originalPosition]);

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [handleMouseMove, handleMouseUp]);

    return (
        <div>
            <div
                ref={joystickRef}
                className="joystick"
                onMouseDown={handleMouseDown}
                style={{
                    position: 'absolute',
                    left: `${position.left}px`,
                    top: `${position.top}px`,
                    width: '100px',
                    height: '100px',
                    backgroundColor: 'red',
                    borderRadius: '50%',
                    cursor: 'grab',
                    transition: isDragging ? 'none' : 'transform 0.2s ease',
                    transform: `translate(${isDragging ? '0, 0' : '-50%, -50%'})`,
                }}
            >
                Drag me
            </div>
        </div>
    );
}

export default JoystickDiv;
