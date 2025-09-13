export const addProduct = (products, newProduct) => {
    return [...products, newProduct];
};

export const updateProduct = (products, updatedProduct) => {
    return products.map(product => 
        product.id === updatedProduct.id ? updatedProduct : product
    );
};

export const searchProducts = (products, searchTerm) => {
    return products.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
};