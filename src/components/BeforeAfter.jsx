// PicoArt v22 - BeforeAfter Comparison Slider
import React, { useState, useRef, useEffect } from 'react';

const BeforeAfter = ({ beforeImage, afterImage, className = '' }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging || !containerRef.current) return;
      updateSliderPosition(e.clientX);
    };

    const handleTouchMove = (e) => {
      if (!isDragging || !containerRef.current) return;
      updateSliderPosition(e.touches[0].clientX);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  const updateSliderPosition = (clientX) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    const clampedPercentage = Math.max(0, Math.min(100, percentage));
    setSliderPosition(clampedPercentage);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleClick = (e) => {
    if (!containerRef.current) return;
    updateSliderPosition(e.clientX);
  };

  return (
    <div 
      ref={containerRef}
      className={`before-after-container ${className}`}
      onClick={handleClick}
    >
      {/* Before Image (full width) */}
      <div className="before-image-wrapper">
        <img src={beforeImage} alt="Before" className="comparison-image" />
        <div className="image-label before-label">변환 전</div>
      </div>

      {/* After Image (clipped by slider) */}
      <div 
        className="after-image-wrapper"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img src={afterImage} alt="After" className="comparison-image" />
        <div className="image-label after-label">변환 후</div>
      </div>

      {/* Slider */}
      <div 
        className="slider-line"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        <div className="slider-handle">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18l-6-6 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18l6-6-6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      <style>{`
        .before-after-container {
          position: relative;
          width: 100%;
          max-width: 800px;
          margin: 0 auto;
          overflow: hidden;
          border-radius: 12px;
          cursor: ew-resize;
          user-select: none;
          box-shadow: 0 10px 40px rgba(0,0,0,0.2);
        }

        .before-image-wrapper,
        .after-image-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .after-image-wrapper {
          position: absolute;
        }

        .comparison-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          pointer-events: none;
        }

        .image-label {
          position: absolute;
          top: 1rem;
          padding: 0.5rem 1rem;
          background: rgba(0,0,0,0.7);
          color: white;
          font-size: 0.875rem;
          font-weight: 600;
          border-radius: 20px;
          backdrop-filter: blur(10px);
          z-index: 10;
        }

        .before-label {
          left: 1rem;
        }

        .after-label {
          right: 1rem;
        }

        .slider-line {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 4px;
          background: white;
          box-shadow: 0 0 10px rgba(0,0,0,0.5);
          cursor: ew-resize;
          z-index: 20;
          transform: translateX(-50%);
        }

        .slider-handle {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 48px;
          height: 48px;
          background: white;
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: grab;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .slider-handle:hover {
          transform: translate(-50%, -50%) scale(1.1);
          box-shadow: 0 6px 16px rgba(0,0,0,0.4);
        }

        .slider-handle:active {
          cursor: grabbing;
          transform: translate(-50%, -50%) scale(0.95);
        }

        .slider-handle svg {
          width: 20px;
          height: 20px;
        }

        .slider-handle svg:first-child {
          margin-right: -4px;
        }

        .slider-handle svg:last-child {
          margin-left: -4px;
        }

        /* Aspect ratio container */
        .before-after-container::before {
          content: '';
          display: block;
          padding-top: 75%; /* 4:3 aspect ratio, adjust as needed */
        }

        @media (max-width: 640px) {
          .image-label {
            font-size: 0.75rem;
            padding: 0.375rem 0.75rem;
            top: 0.75rem;
          }

          .before-label {
            left: 0.75rem;
          }

          .after-label {
            right: 0.75rem;
          }

          .slider-handle {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </div>
  );
};

export default BeforeAfter;
