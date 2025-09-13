import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ProductProvider } from '../context/ProductContext';
import Admin from './Admin';

test('renders admin form and allows adding a book', () => {
    render(
        <ProductProvider>
            <Admin />
        </ProductProvider>
    );
    expect(screen.getByText(/Add New Book/i)).toBeInTheDocument();

    fireEvent.change(screen.getByPlaceholderText(/Book Name/i), { target: { value: 'Test Book' } });
    fireEvent.change(screen.getByPlaceholderText(/Description/i), { target: { value: 'Test Description' } });
    fireEvent.change(screen.getByPlaceholderText(/Price/i), { target: { value: '10' } });
    fireEvent.click(screen.getByText(/Submit/i));
});