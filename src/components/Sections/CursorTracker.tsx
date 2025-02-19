import { useEffect, useState } from 'react';

const CursorTracker = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none transition-transform duration-100"
      style={{
        transform: `translate(${position.x - 10}px, ${position.y - 10}px)`,
        width: '15px', // Make it smaller
        height: '15px',
        backgroundColor: '#f59e0b', // Orange color
        borderRadius: '50%',
        boxShadow: '0 0 10px rgba(245, 158, 11, 0.7)',
        mixBlendMode: 'difference',
      }}
    />
  );
};

export default CursorTracker;
