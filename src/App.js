import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

const products = [
  {
    _id: "6879720628fa670303b9a97a",
    name: "Tesco Gift Card",
    image: '.../tesco.png',
    description: "Tesco €25 Gift Card",
    price: 20
  },
  {
    _id: "687972c128fa670303b9a97c",
    name: "Aldi Gift Card",
    image: '.../aldi.png',
    description: "Aldi €20 Gift Card",
    price: 15
  },
  {
    _id: "687972e428fa670303b9a97e",
    name: "Lidl Gift Card",
    image: '.../lidl.png',
    description: "Lidl €30 Gift Card",
    price: 25
  }
];

function App() {
  return (
    <Router>
      <div className="App">
        <header style={styles.header}>
          <h1 style={{ color: 'white', margin: 0 }}>🛒 FetchIt - Gift Card Store</h1>
        </header>

        {/* Navigation */}
        <nav style={styles.nav}>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/products" style={styles.link}>Products</Link>
          <Link to="/cart" style={styles.link}>Cart</Link>
          <Link to="/signin" style={styles.link}>Sign In</Link>
          <Link to="/signup" style={styles.link}>Sign Up</Link>
        </nav>

        {/* Routes */}
        <div style={styles.pageContent}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList products={products} />} />
            <Route path="/cart" element={<Cart products={products} />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>

        {/* Footer */}
        <footer style={styles.footer}>
          <p><strong>📞 Contact:</strong> +353 870311147</p>
          <p>© 2025 <strong>FetchIt</strong>. All Rights Reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

const styles = {
  header: {
    backgroundColor: '#8e44ad',
    padding: '1rem',
    textAlign: 'center',
    marginBottom: '0',
  },
  nav: {
    backgroundColor: '#f3e5f5',
    padding: '10px',
    textAlign: 'center',
  },
  link: {
    margin: '0 15px',
    textDecoration: 'none',
    color: '#6a1b9a',
    fontWeight: 'bold',
  },
  pageContent: {
    minHeight: '75vh',
    padding: '2rem',
  },
  footer: {
    backgroundColor: '#f5f5f5',
    padding: '1rem',
    textAlign: 'center',
    borderTop: '1px solid #ddd',
    fontSize: '0.9rem',
    color: '#333',
  }
};

export default App;
