import { useState, useEffect } from 'react';

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 300),    // Code icon appears
      setTimeout(() => setPhase(2), 800),    // Title appears
      setTimeout(() => setPhase(3), 1300),   // Icon 1 appears
      setTimeout(() => setPhase(4), 1600),   // Icon 2 appears
      setTimeout(() => setPhase(5), 1900),   // Icon 3 appears
      setTimeout(() => setPhase(6), 2400),   // Designer credit appears
      setTimeout(() => setPhase(7), 3600),   // Fade out starts
      setTimeout(() => onComplete(), 4100)   // Complete
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div 
      className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden transition-opacity duration-500"
      style={{ opacity: phase === 7 ? 0 : 1 }}
    >
      {/* Main content container */}
      <div className="relative text-center z-10">
        
        {/* Code bracket icon */}
        <div 
          className="flex justify-center mb-6 transition-all duration-700"
          style={{
            opacity: phase >= 1 ? 1 : 0,
            transform: phase >= 1 ? 'translateY(0)' : 'translateY(-100px)',
          }}
        >
          <svg 
            width="60" 
            height="60" 
            viewBox="0 0 24 24" 
            fill="none"
          >
            <path 
              d="M8 3H4C3.44772 3 3 3.44772 3 4V8M8 21H4C3.44772 21 3 20.5523 3 20V16M16 3H20C20.5523 3 21 3.44772 21 4V8M16 21H20C20.5523 21 21 20.5523 21 20V16" 
              stroke="#00D9FF" 
              strokeWidth="2.5" 
              strokeLinecap="round"
            />
            <path 
              d="M9 9L7 12L9 15M15 9L17 12L15 15" 
              stroke="#00D9FF" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* MY PROFILE text */}
        <div 
          className="mb-8 transition-all duration-700"
          style={{
            opacity: phase >= 2 ? 1 : 0,
            transform: phase >= 2 ? 'translateY(0)' : 'translateY(-100px)',
          }}
        >
          <h1 
            className="text-2xl md:text-3xl font-bold tracking-wide"
            style={{
              color: '#00D9FF'
            }}
          >
            MY PROFILE
          </h1> 
        </div>

        {/* Three icons */}
        <div className="flex justify-center gap-8 mb-8">
          {/* Headphones icon */}
          <div
            className="transition-all duration-700"
            style={{
              opacity: phase >= 3 ? 1 : 0,
              transform: phase >= 3 ? 'translateY(0)' : 'translateY(-100px)',
            }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path 
                d="M3 18V12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V18M3 18C3 19.6569 4.34315 21 6 21H7C7.55228 21 8 20.5523 8 20V16C8 15.4477 7.55228 15 7 15H3V18ZM21 18C21 19.6569 19.6569 21 18 21H17C16.4477 21 16 20.5523 16 20V16C16 15.4477 16.4477 15 17 15H21V18Z" 
                stroke="#00D9FF" 
                strokeWidth="2" 
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Code icon */}
          <div
            className="transition-all duration-700"
            style={{
              opacity: phase >= 4 ? 1 : 0,
              transform: phase >= 4 ? 'translateY(0)' : 'translateY(-100px)',
            }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path 
                d="M8 9L5 12L8 15M16 9L19 12L16 15M13 5L11 19" 
                stroke="#00D9FF" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* User icon */}
          <div
            className="transition-all duration-700"
            style={{
              opacity: phase >= 5 ? 1 : 0,
              transform: phase >= 5 ? 'translateY(0)' : 'translateY(-100px)',
            }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path 
                d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" 
                stroke="#00D9FF" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Designer credit */}
        <div 
          className="transition-all duration-700"
          style={{
            opacity: phase >= 6 ? 1 : 0,
            transform: phase >= 6 ? 'translateY(0)' : 'translateY(-100px)',
          }}
        >
          <p 
            className="font-medium tracking-wide"
            style={{
              color: '#00D9FF',
              fontSize: '22px'
            }}
          >
            Designed by Shyam Sundar
          </p>
        </div>

      </div>
    </div>
  );
};

export default IntroAnimation; 