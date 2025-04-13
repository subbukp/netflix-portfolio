"use client";

import React from "react";

export default function Home() {
  return (
    <main style={{ 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '1rem',
      backgroundColor: 'black',
      color: 'white',
      textAlign: 'center'
    }}>
      <div>
        <h1 style={{ color: '#E50914', fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          NETFLIX PORTFOLIO
        </h1>
        <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
          Welcome to Subrahmanya K P&apos;s Netflix-themed portfolio
        </p>
        <button 
          style={{ 
            backgroundColor: '#E50914', 
            color: 'white',
            padding: '0.5rem 1.5rem',
            border: 'none',
            borderRadius: '4px',
            fontSize: '1rem',
            cursor: 'pointer'
          }}
        >
          Continue
        </button>
      </div>
    </main>
  );
}
