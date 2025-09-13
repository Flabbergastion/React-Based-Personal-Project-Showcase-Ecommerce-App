import React from 'react';
import Navbar from '../components/Navbar';

const Landing = () => (
    <div>
        <Navbar />
        <div className="center-content">
            <h1 className="business-title">Books Ahoy</h1>
            <p className="business-tagline">Sail away with your next great read!</p>
        </div>
    </div>
);

export default Landing;