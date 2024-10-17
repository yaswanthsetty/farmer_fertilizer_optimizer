import React from 'react';
import { Link } from 'react-router-dom';

function MainPage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Promotion of Sustainable Agriculture</h1>
      <p style={styles.paragraph}>Encouraging environmentally-friendly farming methods by reducing fertilizer waste and supporting sustainable agricultural practices.</p>
      
      <div style={styles.cardsContainer}>
        <Link to="/idea1" style={{ ...styles.card, ...styles.fadeIn }}>
          <h2 style={styles.cardTitle}>Idea 1: Crop Rotation</h2>
        </Link>
        <Link to="/idea2" style={{ ...styles.card, ...styles.fadeIn }}>
          <h2 style={styles.cardTitle}>Idea 2: Organic Fertilizers</h2>
        </Link>
        <Link to="/idea3" style={{ ...styles.card, ...styles.fadeIn }}>
          <h2 style={styles.cardTitle}>Idea 3: Water Conservation</h2>
        </Link>
      </div>
    </div>
  );
}

const styles = {
  container: { padding: '20px', textAlign: 'center', animation: 'fadeIn 1.5s' },
  header: { fontSize: '2.5em', color: '#2e8b57', animation: 'slideIn 1s ease-in-out' },
  paragraph: { fontSize: '1.2em', marginBottom: '30px' },
  cardsContainer: { display: 'flex', justifyContent: 'space-around' },
  card: {
    padding: '20px',
    backgroundColor: '#f0f8ff',
    textDecoration: 'none',
    color: '#333',
    borderRadius: '8px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    width: '30%',
    textAlign: 'center',
    transition: 'transform 0.3s ease',
    cursor: 'pointer'
  },
  cardTitle: { color: '#2e8b57', fontWeight: 'bold' },
  fadeIn: { animation: 'fadeIn 2s ease-in-out' },
  '@keyframes fadeIn': {
    '0%': { opacity: 0 },
    '100%': { opacity: 1 }
  },
};

export default MainPage;
