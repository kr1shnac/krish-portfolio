import React from 'react';

export const AutoClawBot = ({ className = "" }: { className?: string }) => {
    return (
        <div className={`pointer-events-none ${className}`}>
            <div className="animate-cute-float relative">
                {/* Background glowing blur effect */}
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '120px', height: '120px', background: 'linear-gradient(135deg, #ec4899, #8b5cf6, #3b82f6)', filter: 'blur(50px)', opacity: '0.4', borderRadius: '50%', zIndex: '-1' }}></div>

                <svg width="140" height="140" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="bodyGrad" x1="0" y1="0" x2="100" y2="100">
                            <stop stopColor="#1e293b" />
                            <stop offset="1" stopColor="#0f172a" />
                        </linearGradient>
                        <linearGradient id="screenGrad" x1="0" y1="0" x2="0" y2="100">
                            <stop stopColor="#0f172a" />
                            <stop offset="1" stopColor="#020617" />
                        </linearGradient>
                    </defs>
                    {/* Antennas */}
                    <rect x="15" y="35" width="8" height="15" rx="3" fill="#cbd5e1" className="animate-ear" />
                    <rect x="77" y="35" width="8" height="15" rx="3" fill="#cbd5e1" className="animate-ear" />

                    {/* Main Body */}
                    <rect x="20" y="25" width="60" height="50" rx="15" fill="url(#bodyGrad)" stroke="#ec4899" strokeWidth="2" />

                    {/* Screen / Face Area */}
                    <rect x="28" y="33" width="44" height="30" rx="6" fill="url(#screenGrad)" stroke="#334155" strokeWidth="1" />

                    {/* Eyes (Happy curves) */}
                    <path d="M 38 45 Q 42 42 46 45" stroke="#ec4899" strokeWidth="3" strokeLinecap="round" className="animate-blink" fill="none" />
                    <path d="M 54 45 Q 58 42 62 45" stroke="#ec4899" strokeWidth="3" strokeLinecap="round" className="animate-blink" fill="none" />

                    {/* Cheeks */}
                    <circle cx="35" cy="52" r="3" fill="#ec4899" opacity="0.6" />
                    <circle cx="65" cy="52" r="3" fill="#ec4899" opacity="0.6" />

                    {/* Small smile */}
                    <path d="M 47 52 Q 50 55 53 52" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" fill="none" />

                    {/* Floating particles/hands */}
                    <circle cx="25" cy="85" r="6" fill="#8b5cf6" className="animate-cute-float" style={{ animationDelay: '0.5s' }} />
                    <circle cx="75" cy="85" r="6" fill="#8b5cf6" className="animate-cute-float" style={{ animationDelay: '1s' }} />
                </svg>
            </div>
        </div>
    );
};
