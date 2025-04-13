import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function ProfilePage() {
  const router = useRouter();
  const { type } = router.query;
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState(null);
  const [showTrailer, setShowTrailer] = useState(false);
  const [currentTrailer, setCurrentTrailer] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Simulate content loading
    if (type) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [type]);

  // Handle scroll events for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Load the audio script
  useEffect(() => {
    // Load the audio script if not already loaded
    if (!window.playTrailerStart) {
      const script = document.createElement('script');
      script.src = '/netflix-audio.js';
      script.async = true;
      document.body.appendChild(script);
      
      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  // Play Netflix sound when trailer shows
  useEffect(() => {
    if (showTrailer && window.playTrailerStart) {
      // Play the synthesized trailer sound
      window.playTrailerStart();
    }
  }, [showTrailer]);

  if (!type || loading) {
    return (
      <div style={{ 
        backgroundColor: 'black',
        color: 'white',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          width: '50px',
          height: '50px',
          border: '5px solid #333',
          borderTopColor: '#E50914',
          borderRadius: '50%',
          animation: 'netflix-spinner 1s linear infinite'
        }} />
        <style jsx>{`
          @keyframes netflix-spinner {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  // Content customization based on profile type
  const getProfileContent = () => {
    switch(type.toLowerCase()) {
      case 'professional':
        return {
          title: 'Site Reliability Engineer',
          color: '#E50914',
          description: 'Building resilient systems, automating at scale, securing the stack',
          banner: '/professional-banner.jpg',
          bannerTitle: 'SRE & DEVOPS',
          bannerDescription: 'Building resilient infrastructure and solving complex technical challenges at scale.',
          featuredRating: '99% Match',
          featuredYear: '2023',
          sections: [
            { 
              id: 'experience', 
              title: 'Experience', 
              content: 'With extensive experience in Site Reliability Engineering and DevOps practices, I specialize in building and maintaining highly available, scalable, and secure infrastructure. My expertise spans across cloud platforms, containerization, automation, and implementing robust security measures.',
              videoId: 'experience-vid',
              icon: '🏢'
            },
            { 
              id: 'achievements', 
              title: 'Key Specialties', 
              content: '🔹 Infrastructure as Code\n🔹 Shift-Left Security\n🔹 Observability-First\n🔹 Automation-Driven\n🔹 Cloud Native\n🔹 Security Best Practices',
              videoId: 'achievements-vid',
              icon: '🏆'
            },
            { 
              id: 'contact', 
              title: 'Contact', 
              content: '📧 kps.18.1999@gmail.com\n📍 Bengaluru, India\n\nFind me on: GitHub, LinkedIn, Twitter',
              videoId: 'contact-vid',
              icon: '📬'
            }
          ],
          icon: '👔'
        };
      case 'technical':
        return {
          title: 'DevOps & Cloud',
          color: '#0071EB',
          description: 'Cloud platforms, Kubernetes, Infrastructure as Code',
          banner: '/technical-banner.jpg',
          bannerTitle: 'TECHNICAL STACK',
          bannerDescription: 'Leveraging cloud-native technologies for scalable, resilient infrastructure.',
          featuredRating: '95% Match',
          featuredYear: '2023',
          sections: [
            { 
              id: 'tech-stack', 
              title: 'Cloud Platforms', 
              content: '🔹 AWS: Extensive experience with EC2, EKS, Lambda, S3, CloudFormation\n🔹 GCP: Compute Engine, GKE, Cloud Functions, Cloud Storage\n🔹 Azure: AKS, VMs, Functions, Blob Storage',
              videoId: 'stack-vid',
              icon: '☁️'
            },
            { 
              id: 'infra-tools', 
              title: 'Infrastructure & Tools', 
              content: '🔹 Container Orchestration: Kubernetes, Docker Swarm\n🔹 CI/CD: Jenkins, GitLab CI, GitHub Actions\n🔹 Infrastructure as Code: Terraform, CloudFormation, Ansible\n🔹 Monitoring & Observability: Prometheus, Grafana, ELK Stack\n🔹 Security Tools: HashiCorp Vault, SonarQube, OWASP Tools',
              videoId: 'infra-vid',
              icon: '🛠️'
            },
            { 
              id: 'dev', 
              title: 'Development', 
              content: '🔹 Bash\n🔹 Python\n🔹 Go\n🔹 Node.js\n🔹 Git\n🔹 REST APIs',
              videoId: 'dev-vid',
              icon: '💻'
            }
          ],
          icon: '💻'
        };
      case 'creative':
        return {
          title: 'Featured Projects',
          color: '#F5F5F1',
          description: 'Featured projects and technical implementations',
          banner: '/creative-banner.jpg',
          bannerTitle: 'PROJECTS',
          bannerDescription: 'Innovative solutions to complex infrastructure and automation challenges.',
          featuredRating: '97% Match',
          featuredYear: '2023',
          sections: [
            { 
              id: 'gitops', 
              title: 'GitOps-Driven Cloud Infrastructure', 
              content: '🔧 Stack: AWS, ArgoCD, Terraform, Kubernetes, GitHub Actions\n\n💡 Problem: Needed a scalable, self-healing infrastructure with automated deployments and drift detection\n\n⚙️ What I Did:\n• Implemented GitOps workflow using ArgoCD for Kubernetes deployments\n• Created modular Terraform codebase with remote state management\n• Set up multi-stage CI/CD pipelines with security scanning\n• Automated infrastructure validation and compliance checks\n\n📈 Outcome:\n• Reduced deployment time by 70%\n• Infrastructure drift detected and corrected automatically\n• 100% audit compliance achieved',
              videoId: 'gitops-vid',
              icon: '🔄'
            },
            { 
              id: 'k8s', 
              title: 'Zero-Trust Kubernetes Platform', 
              content: '🔧 Stack: GCP, Kubernetes, Vault, Istio, Terraform\n\n💡 Problem: Required highly secure, zero-trust Kubernetes environment for financial services\n\n⚙️ What I Did:\n• Designed network policies and service mesh with Istio\n• Implemented secret management with HashiCorp Vault\n• Set up pod security policies and OPA/Gatekeeper\n• Created automated security compliance reporting\n\n📈 Outcome:\n• Achieved SOC2 compliance certification\n• Zero security incidents in 6 months\n• Reduced secret rotation time by 90%',
              videoId: 'k8s-vid',
              icon: '🛡️'
            },
            { 
              id: 'observability', 
              title: 'Cloud-Native Observability Platform', 
              content: '🔧 Stack: AWS, Prometheus, Grafana, OpenTelemetry, Terraform\n\n💡 Problem: Lacked comprehensive monitoring and alerting for microservices architecture\n\n⚙️ What I Did:\n• Built centralized monitoring with Prometheus and Grafana\n• Implemented distributed tracing with OpenTelemetry\n• Created custom dashboards and alert rules\n• Automated metric collection and retention policies\n\n📈 Outcome:\n• MTTR reduced from 45min to 10min\n• Alert noise reduced by 60%\n• 99.99% monitoring system uptime',
              videoId: 'observability-vid',
              icon: '📊'
            }
          ],
          icon: '🎨'
        };
      case 'business':
        return {
          title: 'Technical Skills',
          color: '#2EBD59',
          description: 'Technical proficiencies and expertise',
          banner: '/business-banner.jpg',
          bannerTitle: 'SKILLS',
          bannerDescription: 'Comprehensive technical skills across cloud, automation, and security domains.',
          featuredRating: '98% Match',
          featuredYear: '2023',
          sections: [
            { 
              id: 'cloud-platforms', 
              title: 'Cloud & Platforms', 
              content: '• AWS\n• GCP\n• Azure\n• Kubernetes\n• Docker\n• Terraform\n• Pulumi',
              videoId: 'cloud-vid',
              icon: '☁️'
            },
            { 
              id: 'ci-cd', 
              title: 'CI/CD & Automation', 
              content: '• GitHub Actions\n• Jenkins\n• GitLab CI\n• ArgoCD\n• Flux\n• Spinnaker\n• Ansible\n• Helm',
              videoId: 'cicd-vid',
              icon: '⚙️'
            },
            { 
              id: 'monitoring-security', 
              title: 'Monitoring & Security', 
              content: '• Prometheus\n• Grafana\n• ELK Stack\n• EFK Stack\n• Datadog\n• New Relic\n• HashiCorp Vault\n• SOPS\n• Snyk\n• Trivy\n• IAM',
              videoId: 'monitoring-vid',
              icon: '🔒'
            }
          ],
          icon: '📊'
        };
      default:
        return {
          title: 'My Portfolio',
          color: '#666',
          description: 'Welcome to my Netflix-themed portfolio',
          banner: '/default-banner.jpg',
          bannerTitle: 'SITE RELIABILITY ENGINEER',
          bannerDescription: 'Building resilient systems, automating at scale, securing the stack.',
          featuredRating: '90% Match',
          featuredYear: '2023',
          sections: [
            { 
              id: 'about', 
              title: 'About Me', 
              content: 'Site Reliability Engineer and DevOps specialist with a passion for automation, scalability, and system resilience. Experienced in cloud platforms, containerization, and modern CI/CD practices.',
              videoId: 'about-vid',
              icon: '👋'
            },
            { 
              id: 'experience', 
              title: 'Experience', 
              content: 'With extensive experience in Site Reliability Engineering and DevOps practices, I specialize in building and maintaining highly available, scalable, and secure infrastructure. My expertise spans across cloud platforms, containerization, automation, and implementing robust security measures.',
              videoId: 'exp-vid',
              icon: '💼'
            },
            { 
              id: 'contact', 
              title: 'Contact', 
              content: 'Email: kps.18.1999@gmail.com\nLocation: Bengaluru, India\nGitHub: github.com/subrahmanyakp',
              videoId: 'contact-vid',
              icon: '📬'
            }
          ],
          icon: '🎬'
        };
    }
  };

  const content = getProfileContent();

  const handleTrailerPlay = (videoId) => {
    setCurrentTrailer(videoId);
    setShowTrailer(true);
    
    // Auto-close trailer after 5 seconds (simulating a brief preview)
    setTimeout(() => {
      setShowTrailer(false);
    }, 5000);
  };

  return (
    <>
      <Head>
        <title>Subrahmanya K P | {content.title}</title>
        <meta name="description" content={`${content.description} - Subrahmanya K P portfolio`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={{ 
        backgroundColor: 'black',
        color: 'white',
        minHeight: '100vh',
        fontFamily: 'Inter, Arial, sans-serif'
      }}>
        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
          
          body {
            margin: 0;
            padding: 0;
            background-color: black;
            overflow-x: hidden;
            font-family: 'Inter', sans-serif;
          }
          
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes textFadeIn {
            0% { opacity: 0; transform: translateY(20px); }
            30% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes trailerOpen {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
          }
          
          @keyframes netflixPulse {
            0% { box-shadow: 0 0 0 0 rgba(229, 9, 20, 0.6); }
            70% { box-shadow: 0 0 0 15px rgba(229, 9, 20, 0); }
            100% { box-shadow: 0 0 0 0 rgba(229, 9, 20, 0); }
          }
          
          @keyframes netflixScale {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
          
          .netflix-card {
            transition: all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
          }
          
          .netflix-card:hover {
            transform: scale(1.05);
            box-shadow: 0 10px 20px rgba(0,0,0,0.4);
            z-index: 10;
          }
          
          .hero-buttons button {
            transition: opacity 0.2s ease, background-color 0.2s ease;
          }
          
          .hero-buttons button:hover {
            opacity: 0.9;
          }
          
          .category-card {
            transition: all 0.3s ease;
            cursor: pointer;
            position: relative;
            overflow: hidden;
          }
          
          .category-card:hover {
            transform: scale(1.05);
          }
          
          .category-card::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%);
            opacity: 0;
            transition: opacity 0.3s ease;
            pointer-events: none;
          }
          
          .category-card:hover::after {
            opacity: 1;
          }
          
          @keyframes navbarScroll {
            from { background-color: transparent; }
            to { background-color: rgba(0,0,0,0.9); }
          }
          
          .netflix-play-icon {
            animation: netflixPulse 2s infinite;
          }
          
          .netflix-section-fade {
            animation: fadeIn 0.8s ease-out;
          }
        `}</style>
        
        {/* Netflix-style fixed header/navbar */}
        <header style={{
          padding: '16px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: scrolled ? 'rgba(0,0,0,0.9)' : 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, transparent 100%)',
          backdropFilter: scrolled ? 'blur(8px)' : 'none',
          transition: 'all 0.3s ease'
        }}>
          <div style={{ 
            color: '#E50914', 
            fontWeight: '700', 
            fontSize: '24px',
            display: 'flex',
            alignItems: 'center',
            gap: '32px'
          }}>
            <span>SUBRAHMANYA</span>
            <nav style={{ 
              display: 'flex',
              gap: '24px',
              fontSize: '14px',
              color: 'white'
            }}>
              <a href="#" style={{ color: 'white', textDecoration: 'none', opacity: activeSection ? '0.7' : '1', fontWeight: '500' }}>Home</a>
              <a href="#projects" style={{ color: 'white', textDecoration: 'none', opacity: '0.7', fontWeight: '500' }}>Projects</a>
              <a href="#skills" style={{ color: 'white', textDecoration: 'none', opacity: '0.7', fontWeight: '500' }}>Skills</a>
              <a href="#contact" style={{ color: 'white', textDecoration: 'none', opacity: '0.7', fontWeight: '500' }}>Contact</a>
            </nav>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <button 
              onClick={() => router.push('/')}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'white',
                fontSize: '14px',
                cursor: 'pointer',
                padding: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontWeight: '500'
              }}
            >
              <div style={{ 
                width: '32px',
                height: '32px',
                borderRadius: '4px',
                background: content.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '18px'
              }}>
                {content.icon}
              </div>
              Switch Profile
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </header>

        {/* Hero Banner */}
        <div className="hero-banner" style={{ 
          position: 'relative',
          height: '90vh',
          width: '100%',
          background: 'linear-gradient(to right, rgba(0,0,0,0.8) 40%, transparent 70%), radial-gradient(circle at 70% 30%, transparent 50%, black 100%)',
          backgroundColor: 'black',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center'
        }}>
          <div style={{ 
            position: 'absolute',
            inset: 0,
            background: `url(${content.banner || '/netflix-bg.jpg'})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            zIndex: -1,
            opacity: 0.8,
            filter: 'contrast(1.1) saturate(1.2)',
            transition: 'all 0.5s ease-in-out'
          }} />
          
          <div style={{ 
            paddingLeft: '60px',
            paddingTop: '80px',
            maxWidth: '40%',
            animation: 'textFadeIn 1.5s ease-out'
          }}>
            <h1 style={{ 
              color: 'white', 
              fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
              fontWeight: 'bold',
              textShadow: '0 2px 10px rgba(0,0,0,0.5)',
              marginBottom: '1rem',
              lineHeight: '1.1'
            }}>
              {content.bannerTitle}
            </h1>
            
            <div style={{ 
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '20px'
            }}>
              <span style={{ 
                color: content.color || '#E50914', 
                fontWeight: 'bold'
              }}>
                {content.featuredRating}
              </span>
              <span style={{ color: '#aaa' }}>{content.featuredYear}</span>
              <span style={{ 
                border: '1px solid #aaa', 
                padding: '2px 5px', 
                fontSize: '0.7rem', 
                borderRadius: '2px' 
              }}>
                HD
              </span>
            </div>
            
            <p style={{ 
              color: 'white',
              fontSize: '1.2rem',
              marginBottom: '1.5rem',
              maxWidth: '90%',
              textShadow: '0 1px 5px rgba(0,0,0,0.7)',
              lineHeight: '1.6'
            }}>
              {content.bannerDescription}
            </p>
            
            <div className="hero-buttons" style={{ 
              display: 'flex',
              gap: '10px'
            }}>
              <button style={{
                backgroundColor: 'white',
                color: 'black',
                border: 'none',
                borderRadius: '4px',
                padding: '12px 24px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 3L19 12L5 21V3Z" fill="black"/>
                </svg>
                Resume
              </button>
              
              <button style={{
                backgroundColor: 'rgba(109, 109, 110, 0.7)',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                padding: '12px 24px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2"/>
                  <path d="M12 8V16" stroke="white" strokeWidth="2"/>
                  <path d="M8 12H16" stroke="white" strokeWidth="2"/>
                </svg>
                More Info
              </button>
            </div>
          </div>
        </div>

        {/* Content sections */}
        <main style={{ 
          margin: '0 auto', 
          padding: '0 40px 80px',
          position: 'relative',
          zIndex: 20,
          marginTop: '-100px',
          maxWidth: '1400px'
        }}>
          <h2 style={{ 
            color: 'white', 
            fontSize: '1.5rem', 
            fontWeight: '600',
            marginBottom: '24px'
          }}>
            Featured Highlights
          </h2>
          
          <div style={{ 
            display: 'flex',
            gap: '24px',
            overflow: 'hidden',
            paddingBottom: '40px',
            flexWrap: 'nowrap'
          }}>
            {content.sections.map((section, index) => (
              <div 
                key={index}
                className="category-card"
                style={{
                  flex: '0 0 auto',
                  width: '350px',
                  height: '200px',
                  position: 'relative',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  backgroundColor: '#222',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
                }}
                onMouseEnter={() => setActiveSection(section.id)}
                onMouseLeave={() => setActiveSection(null)}
                onClick={() => handleTrailerPlay(section.videoId)}
              >
                <div style={{
                  position: 'absolute',
                  inset: '0',
                  background: `linear-gradient(to top, ${content.color || '#E50914'}99, transparent)`,
                  opacity: activeSection === section.id ? 0.7 : 0.4,
                  transition: 'opacity 0.3s ease'
                }} />
                
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                  fontSize: '2.5rem'
                }}>
                  {section.icon}
                </div>
                
                <div style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  padding: '20px',
                  width: '100%',
                  boxSizing: 'border-box'
                }}>
                  <h3 style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: 'bold',
                    marginBottom: '5px',
                    textShadow: '0 1px 3px rgba(0,0,0,0.7)'
                  }}>
                    {section.title}
                  </h3>
                  
                  {activeSection === section.id && (
                    <div style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255,255,255,0.2)',
                      backdropFilter: 'blur(5px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      animation: 'fadeIn 0.3s ease'
                    }}
                    className="netflix-play-icon"
                    >
                      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 3L19 12L5 21V3Z" fill="white"/>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* Content details */}
          <div style={{ marginTop: '60px' }} id="details">
            <h2 style={{ 
              color: 'white', 
              fontSize: '1.5rem', 
              fontWeight: '600',
              marginBottom: '24px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <span style={{
                width: '24px', 
                height: '24px', 
                backgroundColor: content.color,
                display: 'inline-block',
                borderRadius: '4px'
              }}></span>
              {content.title} Details
            </h2>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '32px',
              animation: 'fadeIn 0.5s ease-out'
            }}
            className="netflix-section-fade">
              {content.sections.map((section, index) => (
                <div 
                  key={index}
                  className="netflix-card"
                  style={{
                    background: '#171717',
                    borderRadius: '8px',
                    padding: '24px',
                    height: '100%',
                    boxSizing: 'border-box',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '4px',
                    height: '100%',
                    backgroundColor: content.color
                  }} />
                  
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '16px',
                    paddingLeft: '16px'
                  }}>
                    <span style={{ fontSize: '1.8rem' }}>{section.icon}</span>
                    <h3 style={{ 
                      fontSize: '1.5rem', 
                      color: 'white',
                      margin: 0
                    }}>
                      {section.title}
                    </h3>
                  </div>
                  
                  <p style={{ 
                    color: '#ccc', 
                    lineHeight: '1.6',
                    paddingLeft: '16px',
                    whiteSpace: 'pre-line'
                  }}>
                    {section.content}
                  </p>
                  
                  <button 
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: content.color,
                      fontSize: '14px',
                      marginTop: '20px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                      paddingLeft: '16px',
                      fontWeight: '500',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'translateX(5px)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'translateX(0px)';
                    }}
                    onClick={() => handleTrailerPlay(section.videoId)}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 3L19 12L5 21V3Z" fill={content.color} />
                    </svg>
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </div>
          
          {/* Call to action section */}
          <div style={{
            marginTop: '80px',
            background: 'linear-gradient(to right, #111, #222)',
            borderRadius: '8px',
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
          }} id="contact">
            <h2 style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              marginBottom: '16px'
            }}>
              Ready to Connect?
            </h2>
            
            <p style={{
              color: '#aaa',
              fontSize: '1.1rem',
              maxWidth: '600px',
              marginBottom: '32px',
              lineHeight: '1.6'
            }}>
              I'm currently open to new opportunities and collaborations. Let's discuss how my skills and experience can help your team succeed.
            </p>
            
            <div style={{
              display: 'flex',
              gap: '16px',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}>
              <button style={{
                backgroundColor: content.color,
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                padding: '12px 24px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer'
              }}>
                Email Me
              </button>
              
              <button style={{
                backgroundColor: 'transparent',
                color: 'white',
                border: `1px solid ${content.color}`,
                borderRadius: '4px',
                padding: '12px 24px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer'
              }}>
                LinkedIn Profile
              </button>
            </div>
          </div>
        </main>
        
        {/* Footer */}
        <footer style={{
          padding: '40px',
          textAlign: 'center',
          borderTop: '1px solid #333',
          color: '#666'
        }}>
          <p>© {new Date().getFullYear()} Subrahmanya K P. All rights reserved.</p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '24px',
            margin: '16px 0'
          }}>
            <a href="#" style={{ color: '#666', textDecoration: 'none' }}>GitHub</a>
            <a href="#" style={{ color: '#666', textDecoration: 'none' }}>LinkedIn</a>
            <a href="#" style={{ color: '#666', textDecoration: 'none' }}>Twitter</a>
            <a href="#" style={{ color: '#666', textDecoration: 'none' }}>Resume</a>
          </div>
        </footer>
        
        {/* Trailer modal popup */}
        {showTrailer && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            animation: 'trailerOpen 0.3s ease',
            backdropFilter: 'blur(8px)'
          }}>
            <div style={{
              position: 'relative',
              width: '80%',
              maxWidth: '1000px',
              aspectRatio: '16/9',
              backgroundColor: '#111',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
            }}>
              <div style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: '20px'
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  border: `3px solid ${content.color}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 3L19 12L5 21V3Z" fill={content.color}/>
                  </svg>
                </div>
                <p style={{ color: 'white', fontSize: '1.5rem', fontWeight: '500' }}>
                  Loading {currentTrailer}...
                </p>
                <p style={{ color: '#aaa', fontSize: '1rem' }}>
                  (This is a demo - detailed content would appear here)
                </p>
              </div>
              
              <button 
                onClick={() => setShowTrailer(false)}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  border: 'none',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '20px',
                  cursor: 'pointer',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 10
                }}
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
} 