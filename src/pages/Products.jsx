import React, { useContext, useState } from 'react';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import ProductCard from '../components/ProductPage';
import { ProductContext } from '../context/ProductContext';
import { genres } from '../utils/genres';

const Products = () => {
    const { products } = useContext(ProductContext);
    const [search, setSearch] = useState('');
    const [selectedGenres, setSelectedGenres] = useState([]);

    // No state updates inside filter/map!
    const filteredBooks = products.filter(book =>
        (selectedGenres.length === 0 || selectedGenres.includes(book.genre)) &&
        (book.name.toLowerCase().includes(search.toLowerCase()) ||
         book.description.toLowerCase().includes(search.toLowerCase()))
    );

    return (
        <div>
            <Navbar />
            <div className="shop-layout">
                <div className="shop-sidebar">
                    <SearchBar
                        search={search}
                        setSearch={setSearch}
                        selectedGenres={selectedGenres}
                        setSelectedGenres={setSelectedGenres}
                        genres={genres}
                    />
                </div>
                <div className="shop-products">
                    {filteredBooks.length > 0 ? (
                        filteredBooks.map((book, idx) => <ProductCard key={idx} book={book} />)
                    ) : (
                        <p>No books found.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Products;