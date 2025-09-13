import React from 'react';
import { render, screen } from '@testing-library/react';
import { ProductProvider } from '../context/ProductContext';
import Products from './Products';

describe('Products', () => {
    test('renders shop page and products', () => {
        render(
            <ProductProvider>
                <Products />
            </ProductProvider>
        );
        expect(screen.getByPlaceholderText(/Search books/i)).toBeInTheDocument();
        expect(screen.getByText(/To Kill a Mockingbird/i)).toBeInTheDocument();
        expect(screen.getByText(/Dune/i)).toBeInTheDocument();
        expect(screen.getByText(/The Diary of a Young Girl/i)).toBeInTheDocument();
    });
});