"use client"

import React from 'react';
import Link from 'next/link';

interface HeroProps {
  customSubtitle?: string;
  customCta?: string;
}

const Hero: React.FC<HeroProps> = ({ 
  customSubtitle = "Site Reliability Engineer & DevOps Specialist",
  customCta = "View Projects" 
}) => {
  return (
    <div className="relative h-[90vh] w-full bg-gradient-to-b from-zinc-900/0 to-zinc-900 flex items-center">
      <div 
        className="absolute inset-0 z-0 bg-black" 
        style={{
          backgroundImage: 'radial-gradient(rgba(255, 0, 0, 0.1) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
          opacity: 0.3
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />
      
      <div className="container mx-auto px-4 md:px-12 relative z-20">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">Subrahmanya K P</h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
          {customSubtitle}
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="#projects" className="netflix-button">
            {customCta}
          </Link>
          <Link href="#contact" className="netflix-button-outline">
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero; 