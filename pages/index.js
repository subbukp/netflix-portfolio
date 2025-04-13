import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function Home() {
  const [showAnimation, setShowAnimation] = useState(true);
  const [profilesVisible, setProfilesVisible] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const router = useRouter();
  const audioRef = useRef(null);
  const tudumRef = useRef(null);

  // Handle animation sequence
  useEffect(() => {
    if (showAnimation) {
      // Play tudum sound after 3s
      const soundTimer = setTimeout(() => {
        if (tudumRef.current) {
          try {
            tudumRef.current.play().catch(error => {
              console.error("Audio play failed:", error);
            });
          } catch (error) {
            console.error("Error playing sound:", error);
          }
        }
      }, 3000);
      
      // Complete animation and show profiles after 5s
      const animationTimer = setTimeout(() => {
        setShowAnimation(false);
        setProfilesVisible(true);
        setAnimationComplete(true);
      }, 5000);
      
      return () => {
        clearTimeout(soundTimer);
        clearTimeout(animationTimer);
      };
    }
  }, [showAnimation]);

  // Load the audio elements
  useEffect(() => {
    audioRef.current = new Audio('/trailer-start.mp3');
    tudumRef.current = new Audio('/tudum.mp3');
    
    // Clean up
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      if (tudumRef.current) {
        tudumRef.current.pause();
        tudumRef.current = null;
      }
    };
  }, []);

  const handleProfileClick = (profileType) => {
    try {
      if (audioRef.current) {
        audioRef.current.play().catch(error => {
          console.log("Audio play failed:", error);
        });
      }
    } catch (error) {
      console.log("Error playing audio:", error);
    }
    
    // Navigate after a short delay
    setTimeout(() => {
      router.push(`/profile/${profileType}`);
    }, 1500);
  };

  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh', fontFamily: 'Netflix Sans, Helvetica, Arial, sans-serif' }}>
      <Head>
        <title>SUBRAHMANYA K P | DevOps Engineer & SRE</title>
        <meta name="description" content="Netflix-themed portfolio of Subrahmanya K P, a DevOps Engineer and Site Reliability Engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <style jsx global>{`
        @font-face {
          font-family: 'Netflix Sans';
          src: url('/fonts/NetflixSans-Regular.woff2') format('woff2');
          font-weight: normal;
          font-style: normal;
        }
        @font-face {
          font-family: 'Netflix Sans';
          src: url('/fonts/NetflixSans-Bold.woff2') format('woff2');
          font-weight: bold;
          font-style: normal;
        }
        
        body {
          margin: 0;
          padding: 0;
          background-color: black;
          color: white;
        }
        
        * {
          box-sizing: border-box;
        }
        
        .netflix-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .netflix-card:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
          z-index: 2;
        }
        
        .netflix-profile-icon {
          transition: transform 0.3s ease;
          border-radius: 5px;
          overflow: hidden;
        }
        
        .netflix-profile-icon:hover {
          transform: scale(1.1);
        }
        
        .netflix-button {
          background-color: white;
          color: black;
          border: none;
          padding: 10px 20px;
          border-radius: 4px;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .netflix-button:hover {
          background-color: rgba(255, 255, 255, 0.85);
        }
        
        @keyframes fadeSplash {
          0% { opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { opacity: 0; }
        }
        
        @keyframes tudum {
          0% { transform: scale(0.8); opacity: 0; }
          20% { transform: scale(1.1); opacity: 1; }
          40% { transform: scale(0.95); opacity: 1; }
          60% { transform: scale(1); opacity: 1; }
          100% { transform: scale(20); opacity: 0; }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .profile-card {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .profile-card:nth-child(1) { animation-delay: 0.1s; }
        .profile-card:nth-child(2) { animation-delay: 0.3s; }
        .profile-card:nth-child(3) { animation-delay: 0.5s; }
        .profile-card:nth-child(4) { animation-delay: 0.7s; }
      `}</style>

      {showAnimation ? (
        <div style={{
          width: '100vw',
          height: '100vh',
          backgroundColor: 'black',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 1000,
          animation: 'fadeSplash 5s ease-in-out forwards'
        }}>
          <div style={{
            fontSize: '64px',
            fontWeight: 'bold',
            color: '#E50914',
            animation: 'tudum 3.5s ease-in-out forwards',
            animationDelay: '1.5s'
          }}>
            Subrahmanya K P
          </div>
        </div>
      ) : null}

      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        transition: 'opacity 0.5s ease-in-out',
        opacity: profilesVisible ? 1 : 0
      }}>
        <header style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px 40px',
          position: 'absolute',
          top: 0,
          left: 0
        }}>
          <div style={{
            color: '#E50914',
            fontSize: '32px',
            fontWeight: 'bold',
          }}>
            
          </div>
          
          <div style={{
            position: 'absolute',
            top: '40px',
            right: '60px',
            zIndex: 10,
            animation: 'fadeIn 1s ease forwards 1s'
          }}>
            <a 
              href="/document/resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="netflix-font"
              style={{
                backgroundColor: 'rgba(229, 9, 20, 0.9)',
                color: 'white',
                padding: '10px 16px',
                borderRadius: '4px',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: '500',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#E50914';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.4)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(229, 9, 20, 0.9)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15L12 3M12 15L8 11M12 15L16 11M21 21H3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              DOWNLOAD RESUME
            </a>
          </div>
        </header>

        <main style={{
          width: '100%',
          maxWidth: '1200px',
          marginTop: '100px',
          marginBottom: '50px'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '80px',
            marginTop: '40px'
          }}>
            <h1 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              margin: '0',
              marginBottom: '10px'
            }}>
              Who's exploring?
            </h1>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 'normal',
              margin: '0',
              color: '#aaa',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#aaa',
              maxWidth: '700px',
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: '15px',
              lineHeight: 1.6
            }}>
              
            </p>
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '30px',
            padding: '20px'
          }}>
            {/* Professional Profile */}
            <div className="profile-card" onClick={() => handleProfileClick('professional')} style={{
              cursor: 'pointer',
              width: '200px',
              textAlign: 'center'
            }}>
              <div className="netflix-profile-icon" style={{
                width: '200px',
                height: '200px',
                backgroundColor: '#E50914',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '15px',
                color: 'white',
                fontSize: '60px'
              }}>
                👔
              </div>
              <h3 style={{
                fontSize: '1.2rem',
                fontWeight: 'normal',
                margin: '0'
              }}>Professional</h3>
              <p style={{
                color: '#aaa',
                fontSize: '0.9rem',
                margin: '10px 0 0'
              }}>
                Work Experience & Education
              </p>
            </div>

            {/* Technical Profile */}
            <div className="profile-card" onClick={() => handleProfileClick('technical')} style={{
              cursor: 'pointer',
              width: '200px',
              textAlign: 'center'
            }}>
              <div className="netflix-profile-icon" style={{
                width: '200px',
                height: '200px',
                backgroundColor: '#0071EB',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '15px',
                color: 'white',
                fontSize: '60px'
              }}>
                💻
              </div>
              <h3 style={{
                fontSize: '1.2rem',
                fontWeight: 'normal',
                margin: '0'
              }}>Technical</h3>
              <p style={{
                color: '#aaa',
                fontSize: '0.9rem',
                margin: '10px 0 0'
              }}>
                Skills & Tool Expertise
              </p>
            </div>

            {/* Creative Profile */}
            <div className="profile-card" onClick={() => handleProfileClick('creative')} style={{
              cursor: 'pointer',
              width: '200px',
              textAlign: 'center'
            }}>
              <div className="netflix-profile-icon" style={{
                width: '200px',
                height: '200px',
                backgroundColor: '#F5F5F1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '15px',
                color: 'black',
                fontSize: '60px'
              }}>
                🎨
              </div>
              <h3 style={{
                fontSize: '1.2rem',
                fontWeight: 'normal',
                margin: '0'
              }}>Projects</h3>
              <p style={{
                color: '#aaa',
                fontSize: '0.9rem',
                margin: '10px 0 0'
              }}>
                Featured Projects & Case Studies
              </p>
            </div>

            {/* Business Profile */}
            <div className="profile-card" onClick={() => handleProfileClick('business')} style={{
              cursor: 'pointer',
              width: '200px',
              textAlign: 'center'
            }}>
              <div className="netflix-profile-icon" style={{
                width: '200px',
                height: '200px',
                backgroundColor: '#2EBD59',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '15px',
                color: 'white',
                fontSize: '60px'
              }}>
                📊
              </div>
              <h3 style={{
                fontSize: '1.2rem',
                fontWeight: 'normal',
                margin: '0'
              }}>Skills</h3>
              <p style={{
                color: '#aaa',
                fontSize: '0.9rem',
                margin: '10px 0 0'
              }}>
                Technical Proficiencies & Achievements
              </p>
            </div>
          </div>
        </main>

        <footer style={{
          width: '100%',
          textAlign: 'center',
          margin: '50px 0 20px',
          color: '#777',
          fontSize: '0.9rem'
        }}>
          <p>© {new Date().getFullYear()} Subrahmanya K P. All rights reserved.</p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            margin: '10px 0'
          }}>
            <a href="mailto:subrahmanya.kp@outlook.com" style={{ color: '#777', textDecoration: 'none' }}>Email</a>
            <a href="https://www.linkedin.com/in/subrahmanya-k-p-964733184/" target="_blank" rel="noopener noreferrer" style={{ color: '#777', textDecoration: 'none' }}>LinkedIn</a>
            <a href="tel:+919113842339" style={{ color: '#777', textDecoration: 'none' }}>Phone</a>
          </div>
        </footer>
      </div>
    </div>
  );
} 