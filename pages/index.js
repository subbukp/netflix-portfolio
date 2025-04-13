export default function Home() {
  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif',
      backgroundColor: 'black', 
      color: 'white',
      minHeight: '100vh',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    }}>
      <main style={{ 
        padding: '2rem',
        maxWidth: '800px'
      }}>
        <h1 style={{ 
          color: '#E50914', 
          fontSize: '2.5rem',
          marginBottom: '1rem'
        }}>
          NETFLIX PORTFOLIO
        </h1>
        <p style={{ 
          fontSize: '1.2rem',
          marginBottom: '2rem'
        }}>
          Welcome to Subrahmanya K P&apos;s Netflix-themed portfolio
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '2rem',
          marginTop: '3rem'
        }}>
          <ProfileCard title="Recruiter" color="#E50914" />
          <ProfileCard title="Developer" color="#0071EB" />
          <ProfileCard title="Stalker" color="#F5F5F1" />
          <ProfileCard title="Market Guy" color="#2EBD59" />
        </div>
      </main>
    </div>
  );
}

function ProfileCard({ title, color }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      cursor: 'pointer'
    }}>
      <div style={{
        width: '120px',
        height: '120px',
        backgroundColor: color,
        borderRadius: '4px',
        marginBottom: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '2rem',
        fontWeight: 'bold'
      }}>
        {title.charAt(0)}
      </div>
      <span>{title}</span>
    </div>
  );
} 