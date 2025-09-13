import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

const initialProducts = [
    { name: 'To Kill a Mockingbird', description: 'Scout Finch, growing up in the fictional Southern town of Maycomb, Alabama, during the Great Depression, whose lawyer father, Atticus Finch, defends a Black man, Tom Robinson, falsely accused of rape.', genre: 'Fiction', price: 19.99 },
    { name: 'Dune', description: 'In the distant future amidst a huge interstellar empire, a young nobleman becomes embroiled in a complex struggle for control of the desert planet Arrakis, the only source of the most valuable substance in the universe.', genre: 'Sci-Fi', price: 24.99 },
    { name: 'The Diary of a Young Girl', description: 'The writings of a Jewish girl, Anne Frank, who went into hiding during the Holocaust, providing a poignant and powerful insight into the human spirit.', genre: 'Biography', price: 14.99 },
    { name: '1984', description: 'A dystopian novel set in a totalitarian society ruled by Big Brother, exploring themes of surveillance, censorship, and individuality.', genre: 'Fiction', price: 18.99 },
    { name: 'The Hobbit', description: 'A fantasy novel that follows the journey of Bilbo Baggins, a hobbit who embarks on an adventure to help a group of dwarves reclaim their homeland from the dragon Smaug.', genre: 'Fantasy', price: 22.99 }
];

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState(initialProducts);

    const addProduct = (product) => setProducts(prev => [...prev, product]);

    return (
        <ProductContext.Provider value={{ products, addProduct }}>
            {children}
        </ProductContext.Provider>
    );
};