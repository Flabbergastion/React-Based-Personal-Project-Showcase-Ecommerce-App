import React from 'react';

const ProductCard = ({ book }) => (
    <div className="product-card">
        <h2>{book.name}</h2>
        <p>{book.description}</p>
        <p><strong>Genre:</strong> {book.genre}</p>
        <p><strong>Price:</strong> ${book.price}</p>
    </div>
);

export default ProductCard;