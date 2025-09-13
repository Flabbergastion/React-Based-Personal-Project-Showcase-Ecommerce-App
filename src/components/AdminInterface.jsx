import React, { useState } from 'react';

const AdminInterface = ({ products, updateProduct }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [updatedPrice, setUpdatedPrice] = useState('');
    const [updatedDescription, setUpdatedDescription] = useState('');

    const handleProductSelect = (product) => {
        setSelectedProduct(product);
        setUpdatedPrice(product.price);
        setUpdatedDescription(product.description);
    };

    const handleUpdate = () => {
        if (selectedProduct) {
            updateProduct(selectedProduct.id, { price: updatedPrice, description: updatedDescription });
            setSelectedProduct(null);
            setUpdatedPrice('');
            setUpdatedDescription('');
        }
    };

    return (
        <div>
            <h2>Admin Interface</h2>
            <h3>Select a product to update:</h3>
            <ul>
                {products.map(product => (
                    <li key={product.id} onClick={() => handleProductSelect(product)}>
                        {product.name}
                    </li>
                ))}
            </ul>
            {selectedProduct && (
                <div>
                    <h3>Updating: {selectedProduct.name}</h3>
                    <label>
                        Price:
                        <input
                            type="text"
                            value={updatedPrice}
                            onChange={(e) => setUpdatedPrice(e.target.value)}
                        />
                    </label>
                    <label>
                        Description:
                        <textarea
                            value={updatedDescription}
                            onChange={(e) => setUpdatedDescription(e.target.value)}
                        />
                    </label>
                    <button onClick={handleUpdate}>Update Product</button>
                </div>
            )}
        </div>
    );
};

export default AdminInterface;