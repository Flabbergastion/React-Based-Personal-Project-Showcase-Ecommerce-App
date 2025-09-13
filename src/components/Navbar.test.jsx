import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar', () => {
    test('renders all navbar links', () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        );
        expect(screen.getByText(/Home/i)).toBeInTheDocument();
        expect(screen.getByText(/Shop/i)).toBeInTheDocument();
        expect(screen.getByText(/Admin Portal/i)).toBeInTheDocument();
    });
});