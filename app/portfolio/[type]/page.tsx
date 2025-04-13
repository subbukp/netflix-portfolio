"use client"

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Hero from '../../components/Hero';
import Categories from '../../components/Categories';

export default function PortfolioPage() {
  const params = useParams();
  const userType = params.type as string;
  
  // Content customization based on user type
  const getContent = () => {
    switch(userType) {
      case 'recruiter':
        return {
          title: 'For Recruiters',
          hero: {
            subtitle: 'SRE & DevOps Engineer with 8+ years of experience',
            cta: 'View Resume'
          },
          focus: 'Experience and Achievements'
        };
      case 'developer':
        return {
          title: 'For Developers',
          hero: {
            subtitle: 'Let\'s collaborate on cool projects',
            cta: 'Check Out My Code'
          },
          focus: 'Technical Skills and Projects'
        };
      case 'stalker':
        return {
          title: 'Hey There 👀',
          hero: {
            subtitle: 'Good to see you checking me out',
            cta: 'Learn More About Me'
          },
          focus: 'Personal Background and Interests'
        };
      case 'market':
        return {
          title: 'For Marketing Professionals',
          hero: {
            subtitle: 'Let\'s create innovative MarTech solutions',
            cta: 'Explore Solutions'
          },
          focus: 'Marketing Tech and Analytics'
        };
      default:
        return {
          title: 'Welcome to My Portfolio',
          hero: {
            subtitle: 'SRE & DevOps Engineer',
            cta: 'View Projects'
          },
          focus: 'Overview'
        };
    }
  };

  const content = getContent();

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="fixed top-0 left-0 w-full bg-black bg-opacity-70 z-50 px-4 py-2 flex justify-between items-center">
        <div className="text-netflix-red font-bold text-xl">
          SUBRAHMANYA
        </div>
        <Link 
          href="/" 
          className="text-white text-sm hover:underline"
        >
          Switch Profile
        </Link>
      </div>
      
      <div className="pt-16">
        <div className="netflix-section">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-white">
            {content.title}
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            Customized portfolio view focused on {content.focus}
          </p>
        </div>
        
        <Hero 
          customSubtitle={content.hero.subtitle} 
          customCta={content.hero.cta} 
        />
        <Categories userType={userType} />
      </div>
    </main>
  );
} 