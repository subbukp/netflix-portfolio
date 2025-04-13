"use client"

import React from 'react';
import Image from 'next/image';

interface ContentItem {
  id: number;
  title: string;
  company?: string;
  period?: string;
  description?: string;
  image: string;
  techStack?: string;
  githubLink?: string;
}

interface ContentRowProps {
  title: string;
  items: ContentItem[];
}

const ContentRow: React.FC<ContentRowProps> = ({ title, items }) => {
  return (
    <div className="mb-12">
      <div className="flex items-center mb-4">
        <h3 className="text-xl text-gray-200 font-medium">{title}</h3>
      </div>
      
      <div className="flex overflow-x-auto pb-8 gap-4 no-scrollbar">
        {items.map((item) => (
          <div key={item.id} className="flex-none w-[280px]">
            <div className="netflix-card h-full">
              <div className="relative h-40 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h4 className="text-lg font-medium text-white">{item.title}</h4>
                {item.company && (
                  <p className="text-sm text-gray-400">{item.company}</p>
                )}
                {item.period && (
                  <p className="text-xs text-gray-500">{item.period}</p>
                )}
                {item.description && (
                  <p className="text-sm text-gray-300 mt-2">{item.description}</p>
                )}
                {item.techStack && (
                  <p className="text-xs text-gray-400 mt-2">Tech: {item.techStack}</p>
                )}
                {item.githubLink && (
                  <a 
                    href={item.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs text-netflix-red hover:underline mt-1 inline-block"
                  >
                    View on GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentRow; 