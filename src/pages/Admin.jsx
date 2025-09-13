import React, { useState, useContext } from 'react';
import Navbar from '../components/Navbar';
import { ProductContext } from '../context/ProductContext';
import { genres } from '../utils/genres';

const Admin = () => {
    const { addProduct } = useContext(ProductContext);
    const [form, setForm] = useState({
        name: '',
        description: '',
        genre: genres[0],
        price: ''
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        addProduct({ ...form, price: parseFloat(form.price) });
        setForm({ name: '', description: '', genre: genres[0], price: '' });
    };

    return (
        <div>
            <Navbar />
            <div className="center-content">
                <form onSubmit={handleSubmit} className="admin-form">
                    <h2>Add New Book</h2>
                    <input
                        type="text"
                        name="name"
                        placeholder="Book Name"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="description"
                        placeholder="Description"
                        value={form.description}
                        onChange={handleChange}
                        required
                        rows={3}
                    />
                    <select
                        name="genre"
                        value={form.genre}
                        onChange={handleChange}
                        required
                    >
                        {genres.map(g => <option key={g} value={g}>{g}</option>)}
                    </select>
                    <input
                        type="number"
                        name="price"
                        placeholder="Price"
                        value={form.price}
                        onChange={handleChange}
                        required
                        min="0"
                        step="0.01"
                    />
                    <button type="submit" className="submit-btn">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Admin;