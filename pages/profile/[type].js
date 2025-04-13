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
  const [content, setContent] = useState(null);

  // Content customization based on profile type
  const getProfileContent = () => {
    switch(type?.toLowerCase()) {
      case 'professional':
        return {
          title: 'Site Reliability Engineer',
          color: '#E50914',
          description: 'DevOps & SRE with 3+ years of experience in building automated, resilient systems',
          banner: '/professional-banner.jpg',
          bannerTitle: 'SRE & DEVOPS',
          bannerDescription: 'A highly skilled result-oriented professional with 3+ years of experience in IT industry, as a DevOps Engineer and Site Reliability Engineer.',
          featuredRating: '99% Match',
          featuredYear: '2024',
          sections: [
            { 
              id: 'experience', 
              title: 'Work Experience', 
              content: '🏢 **Qure.Ai** | *Site Reliability Engineer* | Current\n\n' +
              '🏢 **Tata Consultancy Services** | *Systems Engineer/DevOps Engineer* | Aug 2021 - Jun 2024\n• Collaborated with development teams to implement agile methodology\n• Reduced security incidents by 30% and improved system performance by 25%\n• Improved mean time to resolution (MTTR) by 40% and system uptime by 25%\n\n' +
              '🏢 **Rashtriya Chemical and Fertilizers (PSU)** | *Management Trainee/.Net Developer and DevOps Engineer* | Jun 2024 – Sep 2024',
              videoId: 'experience-vid',
              icon: '🏢'
            },
            { 
              id: 'achievements', 
              title: 'Certifications & Awards', 
              content: '🏆 **Certifications**\n• AZ-900 Azure Fundamentals\n• AWS Certified Cloud Practitioner\n\n' +
              '🏆 **Awards**\n• Customer Delight: Received for doing multiple POCs and getting good feedback/appreciation\n• Hero Of The Cluster: Received for good work performance in the project',
              videoId: 'achievements-vid',
              icon: '🏆'
            },
            { 
              id: 'education', 
              title: 'Education', 
              content: '🎓 **B.E from Dr. Ambedkar Institute of Technology, Bengaluru** | Aug 2017 – June 2021\n\n' +
              '🎓 **12th from Jawahar Navodaya Vidyalaya (CBSE Board)** | 2016\n\n' +
              '🎓 **10th from Jawahar Navodaya Vidyalaya (CBSE Board)** | 2014',
              videoId: 'education-vid',
              icon: '🎓'
            },
            { 
              id: 'contact', 
              title: 'Contact', 
              content: '📧 subrahmanya.kp@outlook.com\n📞 +91-9113842339\n🔗 LinkedIn: in/subrahmanya-k-p-964733184\n📍 Bengaluru, India',
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
          bannerDescription: 'Experienced in designing and implementing automated deployment pipelines and configuration management systems.',
          featuredRating: '95% Match',
          featuredYear: '2024',
          sections: [
            { 
              id: 'devops-tools', 
              title: 'DevOps & CI/CD', 
              content: '🔹 **CI/CD Pipeline Tools**: Jenkins, Azure DevOps, AWS DevOps\n🔹 **Build Tools**: Maven, Dotnet\n🔹 **Source Control**: Git\n🔹 **Ticketing & Project Management**: JIRA\n🔹 **Code Quality**: SonarQube\n🔹 **Artifact Management**: Docker Hub, ECR',
              videoId: 'devops-vid',
              icon: '🔄'
            },
            { 
              id: 'cloud-infra', 
              title: 'Cloud & Infrastructure', 
              content: '🔹 **Cloud Platforms**: AWS Cloud, Azure Cloud\n🔹 **Container Management**: Kubernetes, Azure Kubernetes Service (AKS), Amazon EKS\n🔹 **Containerization**: Docker\n🔹 **Infrastructure as Code**: Terraform, Ansible\n🔹 **Operating Systems**: Linux, Windows',
              videoId: 'cloud-vid',
              icon: '☁️'
            },
            { 
              id: 'dev-skills', 
              title: 'Development & Monitoring', 
              content: '🔹 **Programming Languages**: Python, Shell Scripting, .NET\n🔹 **Databases**: PostgreSQL\n🔹 **Web Frameworks**: Django\n🔹 **Monitoring & Observability**: Grafana',
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
          bannerDescription: 'Showcasing key projects involving DevOps, Cloud Infrastructure, and Automation.',
          featuredRating: '97% Match',
          featuredYear: '2024',
          sections: [
            { 
              id: 'qxr', 
              title: 'qXR - Healthcare AI Platform', 
              content: '🔧 **Stack**: Python, AWS, Docker, Django, Postgres, Grafana\n\n💡 **Organization**: Qure.Ai\n\n⚙️ **Role**: Site Reliability Engineer\n\n📌 **Key Responsibilities**:\n• Automating the installation process of our product for on-prem devices using installer\n• Writing Python and shell scripts to process the AI processing using Docker in on-prem devices\n• Ensuring high availability and optimal performance of cloud-based and On-Premise healthcare AI platforms\n• Monitoring all the alerts on production\n• Working in an agile-scrum environment with Jira ticketing process\n• Troubleshooting and resolving L1, L2, L3 tickets',
              videoId: 'qxr-vid',
              icon: '🏥'
            },
            { 
              id: 'digital-twin', 
              title: 'IFF Digital Twin', 
              content: '🔧 **Stack**: Kubernetes, Docker, Helm, Jenkins, Git, AWS, Sonarqube, Linux, Postman\n\n💡 **Organization**: TCS (Client: Intel)\n\n⚙️ **Role**: DevOps Engineer\n\n📌 **Key Responsibilities**:\n• Building continuous integration & continuous deployment pipeline using Jenkins\n• Writing Docker files for application deployment\n• Managing source code repository using Git\n• Deployments using Docker repo\n• POD Management in Kubernetes Cluster\n• Integrating code quality tools like Sonarqube\n• Integrating security analysis tools like OWASP Dependency check\n• Preparing high-level documentation\n• Creating Gitlab webhooks for automating Jenkins jobs\n• Using JIRA tool for ticket tracking',
              videoId: 'digital-twin-vid',
              icon: '🏭'
            },
            { 
              id: 'traffic-management', 
              title: 'Intelligent Traffic Management', 
              content: '🔧 **Stack**: Kubernetes, Docker, Helm, Jenkins, Git, AWS, Sonarqube, Linux, Docker, Postman, Terraform\n\n💡 **Organization**: TCS (Client: Intel)\n\n⚙️ **Role**: DevOps Engineer\n\n📌 **Key Responsibilities**:\n• Using Maven for building the projects\n• Integration of tools like Sonarqube, Owasp Dependency Check\n• Adding Linux VM as an agent for running pipelines\n• Provisioning AWS VMs Using Terraform\n• Building CI/CD pipeline using Jenkins\n• Writing Docker files for application deployment\n• Managing source code repository using Git\n• POD Management in Kubernetes Cluster\n• Preparing high-level documentation\n• Creating Gitlab webhooks for automating Jenkins jobs',
              videoId: 'traffic-vid',
              icon: '🚦'
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
          bannerDescription: 'A highly skilled professional with experience in designing and implementing automated deployment pipelines and configuration management systems.',
          featuredRating: '98% Match',
          featuredYear: '2024',
          sections: [
            { 
              id: 'cloud-platforms', 
              title: 'Cloud & Platforms', 
              content: '• AWS Cloud\n• Azure Cloud\n• Kubernetes\n• Azure Kubernetes Service\n• Amazon EKS\n• Docker\n• Linux\n• Windows',
              videoId: 'cloud-vid',
              icon: '☁️'
            },
            { 
              id: 'ci-cd', 
              title: 'CI/CD & Automation', 
              content: '• Jenkins\n• Azure DevOps\n• AWS DevOps\n• Git\n• Maven\n• Dotnet\n• Terraform\n• Ansible\n• SonarQube\n• OWASP Dependency Check',
              videoId: 'cicd-vid',
              icon: '⚙️'
            },
            { 
              id: 'development', 
              title: 'Development', 
              content: '• Python\n• Shell Scripting\n• .NET\n• Django\n• PostgreSQL',
              videoId: 'dev-skill-vid',
              icon: '💻'
            },
            { 
              id: 'professional', 
              title: 'Professional Highlights', 
              content: '• Reduced security incidents by 30%\n• Improved system performance by 25%\n• Reduced MTTR by 40%\n• Improved system uptime by 25%\n• AWS Certified Cloud Practitioner\n• AZ-900 Azure Fundamentals',
              videoId: 'highlights-vid',
              icon: '🌟'
            }
          ],
          icon: '📊'
        };
      default:
        return {
          title: 'DevOps Engineer',
          color: '#666',
          description: 'Welcome to my Netflix-themed portfolio',
          banner: '/default-banner.jpg',
          bannerTitle: 'DEVOPS & SRE',
          bannerDescription: 'Building resilient systems, automating at scale, securing the stack.',
          featuredRating: '90% Match',
          featuredYear: '2024',
          sections: [
            { 
              id: 'about', 
              title: 'About Me', 
              content: 'DevOps Engineer and Site Reliability Engineer with 3+ years of experience in the IT industry. Skilled in designing and implementing automated deployment pipelines and configuration management systems. Reduced security incidents by 30% and improved system performance by 25%. Improved MTTR by 40% and system uptime by 25%.',
              videoId: 'about-vid',
              icon: '👋'
            },
            { 
              id: 'experience', 
              title: 'Experience', 
              content: '🏢 **Qure.Ai** | *Site Reliability Engineer* | Current\n\n' +
              '🏢 **Tata Consultancy Services** | *Systems Engineer/DevOps Engineer* | Aug 2021 - Jun 2024\n\n' +
              '🏢 **Rashtriya Chemical and Fertilizers (PSU)** | *Management Trainee/.Net Developer and DevOps Engineer* | Jun 2024 – Sep 2024',
              videoId: 'exp-vid',
              icon: '💼'
            },
            { 
              id: 'contact', 
              title: 'Contact', 
              content: 'Email: subrahmanya.kp@outlook.com\nPhone: +91-9113842339\nLinkedIn: in/subrahmanya-k-p-964733184\nLocation: Bengaluru, India',
              videoId: 'contact-vid',
              icon: '📬'
            }
          ],
          icon: '🎬'
        };
    }
  };

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
      
      // Initialize audio context on first user interaction
      const initAudioOnInteraction = () => {
        if (window.initAudio) {
          window.initAudio();
          document.removeEventListener('click', initAudioOnInteraction);
          document.removeEventListener('touchstart', initAudioOnInteraction);
        }
      };
      
      document.addEventListener('click', initAudioOnInteraction);
      document.addEventListener('touchstart', initAudioOnInteraction);
      
      return () => {
        document.body.removeChild(script);
        document.removeEventListener('click', initAudioOnInteraction);
        document.removeEventListener('touchstart', initAudioOnInteraction);
      };
    }
  }, []);

  // Play Netflix sound when trailer shows
  useEffect(() => {
    if (showTrailer) {
      setTimeout(() => {
        if (window.playTrailerStart) {
          try {
            window.playTrailerStart();
            console.log("Playing trailer sound");
          } catch (error) {
            console.error("Error playing trailer sound:", error);
          }
        } else {
          console.log("playTrailerStart function not found");
        }
      }, 100);
    }
  }, [showTrailer]);

  useEffect(() => {
    // Set initial content based on profile type
    if (type && !content) {
      setContent(getProfileContent());
    }
  }, [type, content]);

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

  const handleTrailerPlay = (videoId) => {
    setCurrentTrailer(videoId);
    setShowTrailer(true);
    
    // Auto-close trailer after 5 seconds (simulating a brief preview)
    setTimeout(() => {
      setShowTrailer(false);
    }, 5000);
  };

  if (!content) return null;

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

          @keyframes netflixBounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }

          @keyframes logoGlow {
            0%, 100% { text-shadow: 0 0 10px rgba(229, 9, 20, 0.5); }
            50% { text-shadow: 0 0 20px rgba(229, 9, 20, 0.8); }
          }
          
          @keyframes sectionSlideIn {
            from { 
              opacity: 0;
              transform: translateX(-30px);
            }
            to { 
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes subtle-float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-5px); }
          }
          
          @keyframes background-pan {
            from { background-position: 0% center; }
            to { background-position: -200% center; }
          }
          
          .netflix-card {
            transition: all 0.5s cubic-bezier(0.15, 1.15, 0.25, 1);
            will-change: transform, box-shadow;
          }
          
          .netflix-card:hover {
            transform: scale(1.03);
            box-shadow: 0 15px 30px rgba(0,0,0,0.6);
            z-index: 10;
          }
          
          .hero-buttons button {
            transition: all 0.3s cubic-bezier(0.15, 1.15, 0.25, 1);
            position: relative;
            overflow: hidden;
          }
          
          .hero-buttons button:hover {
            transform: scale(1.05);
          }
          
          .hero-buttons button:after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent);
            transform: translateX(-100%);
            transition: transform 0.6s ease;
          }
          
          .hero-buttons button:hover:after {
            transform: translateX(100%);
          }
          
          .category-card {
            transition: all 0.4s cubic-bezier(0.15, 1.15, 0.25, 1);
            cursor: pointer;
            position: relative;
            overflow: hidden;
            will-change: transform, box-shadow;
            transform-origin: center;
          }
          
          .category-card:hover {
            transform: scale(1.07);
            z-index: 2;
          }
          
          .category-card::after {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%);
            opacity: 0;
            transition: opacity 0.4s ease;
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

          .netflix-logo {
            color: #E50914;
            font-size: 24px;
            font-weight: bold;
            animation: logoGlow 3s infinite;
            cursor: pointer;
            letter-spacing: 0.5px;
          }

          .netflix-button {
            background-color: #E50914;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 4px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.15, 1.15, 0.25, 1);
            box-shadow: 0 4px 15px rgba(229, 9, 20, 0.3);
          }

          .netflix-button:hover {
            background-color: #F40612;
            transform: scale(1.05);
            box-shadow: 0 8px 20px rgba(229, 9, 20, 0.5);
          }

          .trailer-badge {
            background-color: #E50914;
            color: white;
            padding: 3px 8px;
            border-radius: 4px;
            font-size: 12px;
            font-weight: bold;
            display: inline-flex;
            align-items: center;
            gap: 5px;
          }

          .netflix-badge {
            display: inline-block;
            margin-right: 10px;
            padding: 2px 8px;
            background-color: rgba(255,255,255,0.1);
            border-radius: 3px;
            font-size: 13px;
            color: #ccc;
            letter-spacing: 0.5px;
            backdrop-filter: blur(5px);
          }

          .netflix-thumbnail {
            position: relative;
            overflow: hidden;
            border-radius: 4px;
            transition: all 0.4s cubic-bezier(0.15, 1.15, 0.25, 1);
            will-change: transform, box-shadow;
          }

          .netflix-thumbnail:hover {
            transform: scale(1.05);
            box-shadow: 0 10px 30px rgba(0,0,0,0.7);
            z-index: 5;
          }

          .netflix-thumbnail:hover .thumbnail-overlay {
            opacity: 1;
          }

          .thumbnail-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 50%);
            opacity: 0;
            transition: opacity 0.3s ease;
            display: flex;
            align-items: flex-end;
            padding: 15px;
          }
          
          .section-title {
            position: relative;
            display: inline-block;
          }
          
          .section-title:after {
            content: '';
            position: absolute;
            left: 0;
            bottom: -6px;
            width: 0;
            height: 2px;
            background-color: currentColor;
            transition: width 0.3s ease;
          }
          
          .section-title:hover:after {
            width: 100%;
          }
          
          .content-card {
            position: relative;
            overflow: hidden;
          }
          
          .content-card:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 100%);
            opacity: 0;
            transition: opacity 0.3s ease;
          }
          
          .content-card:hover:before {
            opacity: 1;
          }
          
          .animated-gradient-text {
            background: linear-gradient(to right, #E50914, #f5f5f1, #E50914);
            background-size: 200%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: background-pan 3s linear infinite;
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
          background: scrolled ? 'rgba(0,0,0,0.9)' : 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, transparent 100%)',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          transition: 'all 0.4s ease'
        }}>
          <div style={{ 
            display: 'flex',
            alignItems: 'center',
            gap: '32px'
          }}>
            <span 
              className="netflix-logo"
              onClick={() => router.push('/')}
              style={{ 
                cursor: 'pointer',
                fontSize: '26px',
                fontWeight: '700',
                letterSpacing: '1px'
              }}
            >
              Subrahmanya K P
            </span>
            <nav style={{ 
              display: 'flex',
              gap: '24px',
              fontSize: '14px',
              color: 'white'
            }}>
              <a 
                href="#" 
                style={{ 
                  color: 'white', 
                  textDecoration: 'none', 
                  opacity: activeSection ? '0.7' : '1', 
                  fontWeight: '500',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  padding: '0 4px'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.opacity = '1';
                }}
                onMouseOut={(e) => {
                  if (activeSection) e.currentTarget.style.opacity = '0.7';
                }}
              >
                Home
                <div style={{
                  position: 'absolute',
                  bottom: '-3px',
                  left: '0',
                  width: '0%',
                  height: '2px',
                  backgroundColor: '#E50914',
                  transition: 'width 0.3s ease'
                }} className="nav-indicator" />
              </a>
              <a 
                href="#projects" 
                style={{ 
                  color: 'white', 
                  textDecoration: 'none', 
                  opacity: '0.7', 
                  fontWeight: '500',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  padding: '0 4px'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.opacity = '1';
                  e.currentTarget.querySelector('.nav-indicator').style.width = '100%';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.opacity = '0.7';
                  e.currentTarget.querySelector('.nav-indicator').style.width = '0%';
                }}
              >
                Projects
                <div style={{
                  position: 'absolute',
                  bottom: '-3px',
                  left: '0',
                  width: '0%',
                  height: '2px',
                  backgroundColor: '#E50914',
                  transition: 'width 0.3s ease'
                }} className="nav-indicator" />
              </a>
              <a 
                href="#skills" 
                style={{ 
                  color: 'white', 
                  textDecoration: 'none', 
                  opacity: '0.7', 
                  fontWeight: '500',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  padding: '0 4px'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.opacity = '1';
                  e.currentTarget.querySelector('.nav-indicator').style.width = '100%';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.opacity = '0.7';
                  e.currentTarget.querySelector('.nav-indicator').style.width = '0%';
                }}
              >
                Skills
                <div style={{
                  position: 'absolute',
                  bottom: '-3px',
                  left: '0',
                  width: '0%',
                  height: '2px',
                  backgroundColor: '#E50914',
                  transition: 'width 0.3s ease'
                }} className="nav-indicator" />
              </a>
              <a 
                href="#contact" 
                style={{ 
                  color: 'white', 
                  textDecoration: 'none', 
                  opacity: '0.7', 
                  fontWeight: '500',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  padding: '0 4px'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.opacity = '1';
                  e.currentTarget.querySelector('.nav-indicator').style.width = '100%';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.opacity = '0.7';
                  e.currentTarget.querySelector('.nav-indicator').style.width = '0%';
                }}
              >
                Contact
                <div style={{
                  position: 'absolute',
                  bottom: '-3px',
                  left: '0',
                  width: '0%',
                  height: '2px',
                  backgroundColor: '#E50914',
                  transition: 'width 0.3s ease'
                }} className="nav-indicator" />
              </a>
            </nav>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <button 
              onClick={() => router.push('/')}
              style={{
                background: 'rgba(40,40,40,0.5)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: 'white',
                fontSize: '14px',
                cursor: 'pointer',
                padding: '10px 14px',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontWeight: '500',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
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
                fontSize: '18px',
                boxShadow: `0 4px 10px ${content.color}40`
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
          background: 'linear-gradient(to right, rgba(0,0,0,0.9) 30%, transparent 70%), radial-gradient(circle at 70% 30%, transparent 50%, black 100%)',
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
            filter: 'contrast(1.2) saturate(1.3)',
            transition: 'all 0.5s ease-in-out',
            transform: 'scale(1.03)'
          }} />
          
          {/* Subtle gradient overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: `linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.4) a60%, rgba(0,0,0,0.3) 100%)`,
            zIndex: 0
          }} />
          
          <div style={{ 
            paddingLeft: '60px',
            paddingTop: '60px',
            maxWidth: '45%',
            animation: 'textFadeIn 1.5s ease-out',
            position: 'relative',
            zIndex: 1
          }}>
            <div className="animated-gradient-text" style={{
              fontSize: '1rem',
              fontWeight: '600',
              marginBottom: '12px',
              display: 'inline-block',
              letterSpacing: '1.5px'
            }}>
              FEATURED PROFILE
            </div>
            
            <h1 style={{ 
              color: 'white', 
              fontSize: 'clamp(2.8rem, 5vw, 4.5rem)', 
              fontWeight: '800',
              textShadow: '0 2px 10px rgba(0,0,0,0.7)',
              marginBottom: '1.2rem',
              lineHeight: '1.1',
              letterSpacing: '1px',
              animation: 'subtle-float 5s ease-in-out infinite'
            }}>
              {content.bannerTitle}
            </h1>
            
            <div style={{ 
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '24px'
            }}>
              <span style={{ 
                color: content.color || '#E50914', 
                fontWeight: 'bold',
                fontSize: '1.1rem'
              }}>
                {content.featuredRating}
              </span>
              <span style={{ color: '#aaa' }}>{content.featuredYear}</span>
              <span className="netflix-badge">
                HD
              </span>
              <span className="netflix-badge" style={{ backgroundColor: 'rgba(200,200,200,0.1)' }}>
                {type.toLowerCase().charAt(0).toUpperCase() + type.slice(1)}
              </span>
            </div>
            
            <p style={{ 
              color: 'white',
              fontSize: '1.3rem',
              marginBottom: '2rem',
              maxWidth: '90%',
              textShadow: '0 1px 8px rgba(0,0,0,0.7)',
              lineHeight: '1.6',
              animation: 'textFadeIn 1.5s ease-out 0.3s both'
            }}>
              {content.bannerDescription}
            </p>
            
            <div className="hero-buttons" style={{ 
              display: 'flex',
              gap: '15px',
              animation: 'textFadeIn 1.5s ease-out 0.6s both'
            }}>
              <a 
                href="/document/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: 'white',
                  color: 'black',
                  border: 'none',
                  borderRadius: '4px',
                  padding: '14px 26px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  boxShadow: '0 5px 20px rgba(0,0,0,0.3)',
                  textDecoration: 'none'
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 3L19 12L5 21V3Z" fill="black"/>
                </svg>
                Resume
              </a>
              
              <button style={{
                backgroundColor: 'rgba(109, 109, 110, 0.5)',
                backdropFilter: 'blur(8px)',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                padding: '14px 26px',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                boxShadow: '0 5px 20px rgba(0,0,0,0.3)'
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2"/>
                  <path d="M12 8V16" stroke="white" strokeWidth="2"/>
                  <path d="M8 12H16" stroke="white" strokeWidth="2"/>
                </svg>
                More Info
              </button>
            </div>
            
            {/* Age Rating */}
            <div style={{
              position: 'absolute',
              right: '-70px',
              bottom: '40px',
              backgroundColor: 'rgba(50,50,50,0.7)',
              borderLeft: '3px solid white',
              padding: '6px 12px',
              display: 'flex',
              alignItems: 'center',
              animation: 'fadeIn 0.5s ease-out 1.5s both'
            }}>
              <span style={{ 
                color: 'white', 
                fontSize: '0.8rem', 
                fontWeight: '600',
                letterSpacing: '1px'
              }}>
                EXPERTISE LEVEL
              </span>
              <span style={{ 
                color: 'white', 
                fontSize: '0.9rem',
                marginLeft: '10px',
                fontWeight: '500',
                backgroundColor: 'rgba(229, 9, 20, 0.9)',
                padding: '3px 6px',
                borderRadius: '3px'
              }}>
                EXPERT
              </span>
            </div>
          </div>
        </div>

        {/* Content sections */}
        <main style={{ 
          margin: '0 auto', 
          padding: '0 40px 80px',
          position: 'relative',
          zIndex: 20,
          marginTop: '-120px',
          maxWidth: '1400px'
        }}>
          <h2 style={{ 
            color: 'white', 
            fontSize: '1.6rem', 
            fontWeight: '700',
            marginBottom: '28px',
            paddingLeft: '10px',
            borderLeft: `4px solid ${content.color}`,
            animation: 'sectionSlideIn 0.5s ease-out'
          }}>
            Featured Highlights
          </h2>
          
          <div style={{ 
            display: 'flex',
            gap: '24px',
            overflow: 'visible',
            paddingBottom: '60px',
            flexWrap: 'nowrap',
            animation: 'fadeIn 0.8s ease-out 0.3s both'
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
                  boxShadow: '0 15px 30px rgba(0,0,0,0.4)',
                  animation: `fadeIn 0.8s ease-out ${0.3 + index * 0.15}s both`
                }}
                onMouseEnter={() => setActiveSection(section.id)}
                onMouseLeave={() => setActiveSection(null)}
                onClick={() => handleTrailerPlay(section.videoId)}
              >
                {/* Background gradient overlay */}
                <div style={{
                  position: 'absolute',
                  inset: '0',
                  background: `linear-gradient(to top, ${content.color || '#E50914'}99, rgba(20,20,20,0.5))`,
                  opacity: activeSection === section.id ? 0.8 : 0.5,
                  transition: 'opacity 0.4s ease'
                }} />
                
                {/* Glass card effect */}
                <div style={{
                  position: 'absolute',
                  inset: '0',
                  backdropFilter: 'blur(8px)',
                  opacity: activeSection === section.id ? 1 : 0,
                  transition: 'opacity 0.4s ease',
                  zIndex: 1
                }} />
                
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                  fontSize: '3rem',
                  zIndex: 2,
                  transition: 'all 0.4s ease',
                  transform: activeSection === section.id ? 'scale(1.2)' : 'scale(1)',
                  filter: activeSection === section.id ? 'drop-shadow(0 0 10px rgba(255,255,255,0.5))' : 'none'
                }}>
                  {section.icon}
                </div>
                
                <div style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  padding: '20px',
                  width: '100%',
                  boxSizing: 'border-box',
                  zIndex: 2
                }}>
                  <h3 style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: 'bold',
                    marginBottom: '8px',
                    textShadow: '0 1px 10px rgba(0,0,0,0.7)',
                    transition: 'all 0.3s ease',
                    transform: activeSection === section.id ? 'translateY(-5px)' : 'translateY(0)'
                  }}>
                    {section.title}
                  </h3>
                  
                  {activeSection === section.id && (
                    <p style={{
                      color: '#eee',
                      fontSize: '0.9rem',
                      maxWidth: '90%',
                      margin: '0 0 10px 0',
                      opacity: 0,
                      animation: 'fadeIn 0.3s ease forwards 0.1s'
                    }}>
                      Click to see details
                    </p>
                  )}
                  
                  {activeSection === section.id && (
                    <div style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '70px',
                      height: '70px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255,255,255,0.15)',
                      backdropFilter: 'blur(5px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      animation: 'fadeIn 0.4s ease',
                      border: `2px solid ${content.color}30`
                    }}
                    className="netflix-play-icon"
                    >
                      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 3L19 12L5 21V3Z" fill="white"/>
                      </svg>
                    </div>
                  )}
                </div>
                
                {/* Netflix quality indicator */}
                {activeSection === section.id && (
                  <div style={{
                    position: 'absolute',
                    top: '15px',
                    right: '15px',
                    backgroundColor: 'rgba(255,255,255,0.15)',
                    backdropFilter: 'blur(5px)',
                    padding: '3px 6px',
                    borderRadius: '3px',
                    fontSize: '0.7rem',
                    fontWeight: '600',
                    zIndex: 2,
                    animation: 'fadeIn 0.3s ease forwards'
                  }}>
                    FEATURED
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Content details */}
          <div style={{ marginTop: '60px' }} id="details">
            <h2 className="section-title" style={{ 
              color: 'white', 
              fontSize: '1.6rem', 
              fontWeight: '700',
              marginBottom: '28px',
              paddingLeft: '10px',
              borderLeft: `4px solid ${content.color}`,
              animation: 'sectionSlideIn 0.5s ease-out'
            }}>
              {content.title} Details
            </h2>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '40px',
              animation: 'fadeIn 0.8s ease-out',
              perspective: '1000px'
            }}
            className="netflix-section-fade">
              {content.sections.map((section, index) => (
                <div 
                  key={index}
                  className="netflix-card content-card"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(30,30,30,0.8), rgba(20,20,20,0.9))',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '12px',
                    padding: '28px',
                    height: '100%',
                    boxSizing: 'border-box',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: '0 15px 30px rgba(0,0,0,0.3)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    transition: 'all 0.5s cubic-bezier(0.15, 1.15, 0.25, 1)',
                    transform: `translateZ(0) rotateX(0) rotateY(0)`,
                    animation: `fadeIn 0.8s ease-out ${0.3 + index * 0.2}s both`
                  }}
                  onMouseMove={(e) => {
                    // Calculate tilt effect based on mouse position
                    const card = e.currentTarget;
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left; 
                    const y = e.clientY - rect.top;
                    
                    const midCardWidth = rect.width / 2;
                    const midCardHeight = rect.height / 2;
                    
                    const angleY = ((x - midCardWidth) / midCardWidth) * 3; // Max 3 degree rotation
                    const angleX = ((y - midCardHeight) / midCardHeight) * -3;
                    
                    card.style.transform = `translateZ(10px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
                  }}
                  onMouseLeave={(e) => {
                    // Reset position when mouse leaves
                    e.currentTarget.style.transform = `translateZ(0) rotateX(0) rotateY(0)`;
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '5px',
                    height: '100%',
                    backgroundColor: content.color,
                    borderTopLeftRadius: '12px',
                    borderBottomLeftRadius: '12px'
                  }} />
                  
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    marginBottom: '20px',
                    paddingLeft: '16px'
                  }}>
                    <span style={{ 
                      fontSize: '2.2rem',
                      animation: 'subtle-float 5s ease-in-out infinite'
                    }}>{section.icon}</span>
                    <h3 style={{ 
                      fontSize: '1.6rem', 
                      color: 'white',
                      margin: 0,
                      fontWeight: '700',
                      letterSpacing: '0.5px'
                    }}>
                      {section.title}
                    </h3>
                  </div>
                  
                  <p style={{ 
                    color: '#ddd', 
                    lineHeight: '1.7',
                    paddingLeft: '16px',
                    whiteSpace: 'pre-line',
                    fontSize: '1rem'
                  }}>
                    {section.content}
                  </p>
                  
                  <button 
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: content.color,
                      fontSize: '15px',
                      marginTop: '24px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      paddingLeft: '16px',
                      fontWeight: '600',
                      transition: 'all 0.4s ease',
                      letterSpacing: '0.5px'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'translateX(8px)';
                      e.currentTarget.style.color = '#fff';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'translateX(0px)';
                      e.currentTarget.style.color = content.color;
                    }}
                    onClick={() => handleTrailerPlay(section.videoId)}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 3L19 12L5 21V3Z" fill={content.color} />
                    </svg>
                    EXPLORE DETAILS
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
              width: '85%',
              maxWidth: '1200px',
              aspectRatio: '16/9',
              backgroundColor: '#111',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
            }}>
              <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.9) 100%), url(${content.banner})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                padding: '40px'
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: `3px solid ${content.color}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  animation: 'netflixBounce 2s infinite ease-in-out'
                }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 3L19 12L5 21V3Z" fill={content.color}/>
                  </svg>
                </div>
                
                <h2 style={{ 
                  color: 'white', 
                  fontSize: '2.5rem', 
                  fontWeight: '700',
                  margin: '30px 0 10px 0',
                  textAlign: 'center'
                }}>
                  {currentTrailer && currentTrailer.replace('-vid', '').toUpperCase()}
                </h2>
                
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '10px',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}>
                  <span className="netflix-badge">{new Date().getFullYear()}</span>
                  <span className="netflix-badge">HD</span>
                  <span className="netflix-badge">{content.title}</span>
                </div>
                
                <p style={{ 
                  color: '#aaa', 
                  fontSize: '1.1rem',
                  maxWidth: '700px',
                  textAlign: 'center',
                  lineHeight: '1.6'
                }}>
                  An in-depth demonstration of my expertise in this area would appear here. 
                  This would include detailed examples, case studies, and technical insights.
                </p>
                
                <div style={{
                  display: 'flex',
                  gap: '15px',
                  marginTop: '30px'
                }}>
                  <button className="netflix-button" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '12px 24px'
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 3L19 12L5 21V3Z" fill="white"/>
                    </svg>
                    Play
                  </button>
                  
                  <button style={{
                    backgroundColor: 'rgba(255,255,255,0.2)',
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
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 4V20M4 12H20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    More Info
                  </button>
                </div>
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