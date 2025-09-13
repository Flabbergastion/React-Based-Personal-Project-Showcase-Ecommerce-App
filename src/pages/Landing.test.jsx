import React from 'react';
import { render, screen } from '@testing-library/react';
import Landing from './Landing';

describe('Landing', () => {
    test('renders store name and tagline', () => {
        render(<Landing />);
        expect(screen.getByText(/Books Ahoy/i)).toBeInTheDocument();
        expect(screen.getByText(/Sail away with your next great read!/i)).toBeInTheDocument();
    });
});