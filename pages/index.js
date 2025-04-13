import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function Home() {
  const [showAnimation, setShowAnimation] = useState(true);
  const [showProfiles, setShowProfiles] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Load the audio script
    const script = document.createElement('script');
    script.src = '/netflix-audio.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    // Simulation of Netflix splash animation
    if (showAnimation) {
      // Play Netflix tudum sound if available or after script loads
      setTimeout(() => {
        if (window.playNetflixTudum) {
          window.playNetflixTudum();
        }
      }, 200);
    }

    const timer = setTimeout(() => {
      setShowAnimation(false);
      setShowProfiles(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, [showAnimation]);

  const profiles = [
    { 
      id: 'professional', 
      name: 'Site Reliability Engineer',
      icon: '👔',
      color: '#E50914',
      description: 'Building resilient systems, automating at scale, securing the stack'
    },
    { 
      id: 'technical', 
      name: 'DevOps & Cloud',
      icon: '💻',
      color: '#0071EB',
      description: 'Cloud platforms, Kubernetes, Infrastructure as Code'
    },
    { 
      id: 'creative', 
      name: 'Projects',
      icon: '🎨',
      color: '#F5F5F1',
      description: 'Featured projects and technical implementations'
    },
    { 
      id: 'business', 
      name: 'Skills',
      icon: '📊',
      color: '#2EBD59',
      description: 'Technical proficiencies and expertise'
    }
  ];

  const handleProfileSelect = (profileId) => {
    router.push(`/profile/${profileId}`);
  };

  return (
    <div style={{ 
      backgroundColor: 'black',
      color: 'white',
      minHeight: '100vh',
      fontFamily: 'Inter, Arial, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '0 20px' 
    }}>
      <Head>
        <title>Subrahmanya K P | Site Reliability Engineer | DevOps Specialist</title>
        <meta name="description" content="Portfolio of Subrahmanya K P, a Site Reliability Engineer and DevOps specialist focused on cloud infrastructure, Kubernetes, and automation" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          background-color: black;
          font-family: 'Inter', sans-serif;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scaleUp {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        
        @keyframes netflixIntro {
          0% { transform: scale(1.5); opacity: 0; }
          30% { transform: scale(1.5); opacity: 1; }
          70% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1); opacity: 0; }
        }
        
        @keyframes netflixSplash {
          0% { clip-path: inset(0 100% 0 0); opacity: 0; }
          10% { clip-path: inset(0 0 0 0); opacity: 1; }
          90% { clip-path: inset(0 0 0 0); opacity: 1; }
          100% { clip-path: inset(0 0 0 100%); opacity: 0; }
        }
        
        .profile-card {
          transition: all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
          cursor: pointer;
          position: relative;
        }
        
        .profile-card:hover {
          transform: scale(1.05);
        }
        
        .profile-card:hover .profile-icon {
          transform: scale(1.15);
          box-shadow: 0 0 30px rgba(255, 255, 255, 0.3);
        }
        
        .profile-card:hover .profile-name {
          color: white;
        }
        
        .profile-icon {
          transition: all 0.3s ease;
        }
        
        .profile-name {
          transition: color 0.3s ease;
        }
        
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4); }
          70% { box-shadow: 0 0 0 15px rgba(255, 255, 255, 0); }
          100% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0); }
        }
      `}</style>

      {showAnimation && (
        <div style={{ 
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'black',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 100
        }}>
          <div style={{ 
            color: '#E50914',
            fontSize: '3rem',
            fontWeight: 'bold',
            letterSpacing: '4px',
            animation: 'netflixIntro 3s ease forwards',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div style={{
              position: 'relative',
              width: '300px',
              height: '150px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden'
            }}>
              <div style={{
                animation: 'netflixSplash 3s ease forwards'
              }}>
                SUBRAHMANYA K P
              </div>
            </div>
            <div style={{
              fontSize: '1rem',
              color: '#aaa',
              marginTop: '1rem',
              opacity: 0,
              animation: 'fadeIn 1s ease forwards 1.5s'
            }}>
              Site Reliability Engineer & DevOps
            </div>
          </div>
        </div>
      )}

      {showProfiles && (
        <div style={{ 
          maxWidth: '900px',
          width: '100%',
          textAlign: 'center',
          animation: 'fadeIn 1s ease-out'
        }}>
          <h1 style={{ 
            fontSize: '2.5rem',
            fontWeight: '600',
            marginBottom: '16px',
            color: '#f5f5f5'
          }}>
            How would you like to view my portfolio?
          </h1>
          <p style={{
            fontSize: '1.1rem',
            color: '#aaa',
            maxWidth: '600px',
            margin: '0 auto 48px',
            lineHeight: '1.6'
          }}>
            Site Reliability Engineer, DevOps Specialist & Security Enthusiast
          </p>
          
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '32px',
            justifyContent: 'center',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            {profiles.map(profile => (
              <div 
                key={profile.id}
                className="profile-card"
                onClick={() => handleProfileSelect(profile.id)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '16px'
                }}
              >
                <div
                  className="profile-icon"
                  style={{
                    width: '120px',
                    height: '120px',
                    backgroundColor: profile.color,
                    borderRadius: '16px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '3.5rem',
                    marginBottom: '16px',
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4)'
                  }}
                >
                  {profile.icon}
                </div>
                <h2 
                  className="profile-name"
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    color: '#ccc',
                    margin: '0 0 8px'
                  }}
                >
                  {profile.name}
                </h2>
                <p style={{
                  fontSize: '0.9rem',
                  color: '#777',
                  margin: 0,
                  lineHeight: '1.4'
                }}>
                  {profile.description}
                </p>
              </div>
            ))}
          </div>
          
          <div style={{ marginTop: '64px' }}>
            <button 
              onClick={() => window.open('https://github.com/subrahmanyakp', '_blank')}
              style={{
                background: 'transparent',
                border: '1px solid #555',
                color: '#ccc',
                padding: '12px 24px',
                borderRadius: '4px',
                fontSize: '1rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = '#888';
                e.currentTarget.style.color = 'white';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = '#555';
                e.currentTarget.style.color = '#ccc';
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.477 2 2 6.477 2 12C2 16.418 4.865 20.167 8.839 21.488C9.339 21.574 9.5 21.275 9.5 21V19.095C6.973 19.666 6.497 17.802 6.497 17.802C6.097 16.601 5.499 16.3 5.499 16.3C4.699 15.666 5.599 15.7 5.599 15.7C6.399 15.777 6.899 16.735 6.899 16.735C7.799 18.184 9.099 17.858 9.599 17.638C9.699 16.962 9.899 16.507 10.199 16.284C8.146 16.037 6.099 15.223 6.099 11.524C6.099 10.445 6.499 9.6 7.099 8.942C6.999 8.756 6.599 7.845 7.099 6.611C7.099 6.611 7.799 6.336 9.499 7.445C10.299 7.183 11.099 7.051 11.9 7.051C12.699 7.051 13.499 7.183 14.299 7.445C16.099 6.336 16.699 6.611 16.699 6.611C17.199 7.845 16.799 8.756 16.699 8.942C17.299 9.6 17.699 10.445 17.699 11.524C17.699 15.223 15.649 16.037 13.599 16.284C13.999 16.573 14.299 17.152 14.299 18.019V21C14.299 21.275 14.499 21.574 14.999 21.488C18.978 20.167 21.8 16.418 21.8 12C21.8 6.477 17.523 2 12 2Z" fill="currentColor"/>
              </svg>
              View GitHub
            </button>
          </div>
          
          <footer style={{
            marginTop: '80px',
            fontSize: '0.9rem',
            color: '#666'
          }}>
            <p>© {new Date().getFullYear()} Subrahmanya K P</p>
            <p style={{ margin: '8px 0' }}>
              Inspired by Netflix. Built with Next.js
            </p>
          </footer>
        </div>
      )}
    </div>
  );
} 