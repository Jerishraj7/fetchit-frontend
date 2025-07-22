import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={styles.container}>
      <div style={styles.centerContent}>
        <h2> Welcome to FetchIt – Your Smart Gifting Destination!</h2>

        <p><strong>Tired of guessing the perfect gift?</strong> </p>

        <p>
          With <strong>FetchIt</strong>, you can now gift something <strong>truly useful — groceries!</strong><br />
          It’s thoughtful, practical, and always appreciated.
        </p>

        <p>
          We’re your <strong>one-stop platform</strong> to buy <strong>Tesco, Aldi, and Lidl gift cards at discounted rates</strong>.
        </p>

        <p> <strong>Save more. Gift smarter. Share smiles.</strong></p>
      </div>

      {/* Buttons */}
      <div style={styles.buttons}>
        <Link to="/signup" style={styles.button}>🧺 Sign Up</Link>
        <Link to="/signin" style={styles.button}>🔐 Sign In</Link>
      </div>

      {/* Step-by-Step Instructions */}
      <div style={styles.instructions}>
        <h3 style={{ marginBottom: '1rem' }}>📘 How to Use FetchIt</h3>
        <ul style={styles.stepList}>
          <li><strong>Log in</strong> to your FetchIt account</li>
          <li><strong>Purchase</strong> discounted gift cards for Tesco, Aldi, or Lidl.</li>
          <li><strong>Visit</strong> your chosen superstore and head to the FetchIt billing counter.</li>
          <li><strong>Show the QR code</strong> from your FetchIt account to redeem your gift card instantly!</li>
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#f5f0fa',
    color: '#4b007d',
    padding: '2rem',
    borderRadius: '12px',
    margin: '2rem',
    fontFamily: 'Arial, sans-serif',
    border: '2px solid #d4b6f4',
    boxShadow: '0 0 10px rgba(128, 0, 128, 0.2)'
  },
  centerContent: {
    textAlign: 'center',
    maxWidth: '700px',
    margin: '0 auto 2rem auto',
    fontSize: '1.2rem',
    lineHeight: '1.8',
    fontWeight: '500',
    color: '#333'
  },
  buttons: {
    marginBottom: '2rem',
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    flexWrap: 'wrap'
  },
  button: {
    padding: '0.8rem 1.5rem',
    backgroundColor: '#a64ac9',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
  },
  instructions: {
    marginTop: '2rem',
    textAlign: 'center'
  },
  stepList: {
    textAlign: 'left',
    maxWidth: '600px',
    margin: '0 auto',
    listStyleType: 'disc',
    lineHeight: '1.8'
  },
  link: {
    color: '#6a0dad',
    textDecoration: 'underline'
  },
  footer: {
    marginTop: '3rem',
    borderTop: '1px solid #ccc',
    paddingTop: '1rem',
    fontSize: '0.9rem',
    color: '#555'
  }
};

export default Home;
