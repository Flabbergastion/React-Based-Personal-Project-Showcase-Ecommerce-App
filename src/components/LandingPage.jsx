import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div>
            {/* Navbar */}
            <nav style={{
                width: '100%',
                padding: '1rem 2rem',
                background: '#222',
                color: '#fff',
                display: 'flex',
                justifyContent: 'flex-end',
                gap: '2rem'
            }}>
                <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
                <Link to="/shop" style={{ color: '#fff', textDecoration: 'none' }}>Shop</Link>
                <Link to="/admin" style={{ color: '#fff', textDecoration: 'none' }}>Admin Portal</Link>
            </nav>
            
            {/* Centered Business Name & Tagline */}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '80vh'
            }}>
                <h1 style={{ fontSize: '3rem', margin: 0 }}>Books Ahoy</h1>
                <p style={{ fontSize: '1.5rem', color: '#555', marginTop: '1rem' }}>
                    Set sail on a literary adventure with Books Ahoy!
                </p>
            </div>
        </div>
    );
};

export default LandingPage;