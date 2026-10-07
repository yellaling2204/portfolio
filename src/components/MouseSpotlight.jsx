import React, { useEffect, useState } from 'react';

export default function MouseSpotlight() {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });
  const [isPointerVisible, setIsPointerVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isPointerVisible) setIsPointerVisible(true);
    };

    const handleMouseLeave = () => {
      setIsPointerVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isPointerVisible]);

  if (!isPointerVisible) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-500"
      style={{
        background: `radial-gradient(650px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(6, 182, 212, 0.09), rgba(59, 130, 246, 0.03) 40%, transparent 75%)`,
      }}
    />
  );
}

