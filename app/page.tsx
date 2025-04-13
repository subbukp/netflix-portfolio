"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [showProfiles, setShowProfiles] = useState(false);

  useEffect(() => {
    // Show the Netflix-style intro animation for 3.5 seconds
    const introTimer = setTimeout(() => {
      setShowIntro(false);
      setShowProfiles(true);
    }, 3500);

    return () => clearTimeout(introTimer);
  }, []);

  const profiles = [
    { 
      id: 'recruiter', 
      name: 'Recruiter', 
      color: '#E50914' 
    },
    { 
      id: 'developer', 
      name: 'Developer', 
      color: '#0071EB' 
    },
    { 
      id: 'stalker', 
      name: 'Stalker', 
      color: '#F5F5F1' 
    },
    { 
      id: 'market', 
      name: 'Market Guy', 
      color: '#2EBD59' 
    }
  ];

  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center">
      {showIntro && (
        <div className="animate-fade-in-out">
          <h1 className="text-6xl md:text-8xl font-bold text-netflix-red tracking-tighter">
            SUBRAHMANYA
          </h1>
        </div>
      )}

      {showProfiles && (
        <div className="animate-fade-in max-w-4xl w-full px-4">
          <h2 className="text-4xl text-white text-center mb-12">Who&apos;s watching?</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
            {profiles.map((profile) => (
              <Link 
                href={`/portfolio/${profile.id}`} 
                key={profile.id}
                className="group flex flex-col items-center"
              >
                <div 
                  className="w-28 h-28 md:w-36 md:h-36 rounded mb-3 overflow-hidden border-2 border-transparent group-hover:border-white transition-all duration-300"
                  style={{ backgroundColor: profile.color }}
                >
                  <div className="w-full h-full flex items-center justify-center text-5xl font-bold text-white">
                    {profile.name.charAt(0)}
                  </div>
                </div>
                <span className="text-gray-400 group-hover:text-white transition-colors">
                  {profile.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </main>
  );
} 