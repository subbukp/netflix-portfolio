"use client"

import React from 'react';
import ContentRow from './ContentRow';

interface CategoriesProps {
  userType?: string;
}

const Categories: React.FC<CategoriesProps> = ({ userType = 'default' }) => {
  // Customize the content based on user type
  const getExperienceItems = () => {
    const baseItems = [
      {
        id: 1,
        title: 'Senior SRE',
        company: 'Netflix',
        period: '2020 - Present',
        image: '/netflix-icon.svg',
      },
      {
        id: 2,
        title: 'DevOps Engineer',
        company: 'Google',
        period: '2018 - 2020',
        image: '/google-icon.svg',
      },
      {
        id: 3,
        title: 'Cloud Engineer',
        company: 'Amazon',
        period: '2016 - 2018',
        image: '/amazon-icon.svg',
      },
      {
        id: 4,
        title: 'System Admin',
        company: 'Microsoft',
        period: '2014 - 2016',
        image: '/microsoft-icon.svg',
      },
    ];

    // Customize for different user types
    if (userType === 'recruiter') {
      // Add more detailed experience for recruiters
      return baseItems.map(item => ({
        ...item,
        description: 'Led critical infrastructure projects and optimized cloud resources.'
      }));
    }

    return baseItems;
  };

  const getProjectItems = () => {
    const baseItems = [
      {
        id: 1,
        title: 'Cloud Migration',
        description: 'Migrated legacy systems to AWS',
        image: '/project1.svg',
      },
      {
        id: 2,
        title: 'CI/CD Pipeline',
        description: 'Built robust CI/CD pipelines with GitHub Actions',
        image: '/project2.svg',
      },
      {
        id: 3,
        title: 'Kubernetes Cluster',
        description: 'Managed large-scale K8s clusters',
        image: '/project3.svg',
      },
      {
        id: 4,
        title: 'Monitoring System',
        description: 'Implemented Prometheus and Grafana dashboards',
        image: '/project4.svg',
      },
    ];

    // Add more technical details for developers
    if (userType === 'developer') {
      return baseItems.map(item => ({
        ...item,
        techStack: 'Node.js, Docker, Terraform, Python',
        githubLink: 'https://github.com/yourusername/project'
      }));
    }

    return baseItems;
  };

  const getSkillItems = () => {
    return [
      {
        id: 1,
        title: 'AWS',
        description: 'Expert in AWS cloud services',
        image: '/aws-icon.svg',
      },
      {
        id: 2,
        title: 'Kubernetes',
        description: 'Container orchestration',
        image: '/kubernetes-icon.svg',
      },
      {
        id: 3,
        title: 'Docker',
        description: 'Containerization expert',
        image: '/docker-icon.svg',
      },
      {
        id: 4,
        title: 'Terraform',
        description: 'Infrastructure as Code',
        image: '/terraform-icon.svg',
      },
    ];
  };

  // Get the appropriate items based on user type
  const experienceItems = getExperienceItems();
  const projectItems = getProjectItems();
  const skillItems = getSkillItems();

  return (
    <div className="pt-20 pb-10">
      <section id="experience" className="netflix-section">
        <h2 className="category-title">Experience</h2>
        <ContentRow title="Where I've Worked" items={experienceItems} />
      </section>

      <section id="projects" className="netflix-section">
        <h2 className="category-title">Projects</h2>
        <ContentRow title="Things I've Built" items={projectItems} />
      </section>

      <section id="skills" className="netflix-section">
        <h2 className="category-title">Skills</h2>
        <ContentRow title="What I Know" items={skillItems} />
      </section>
      
      <section id="contact" className="netflix-section text-center">
        <h2 className="category-title mx-auto">Contact Me</h2>
        <p className="mb-8 text-lg text-gray-300 max-w-2xl mx-auto">
          Have a project in mind or just want to chat? Feel free to reach out!
        </p>
        <a href="mailto:contact@example.com" className="netflix-button">
          Get In Touch
        </a>
      </section>
    </div>
  );
};

export default Categories; 