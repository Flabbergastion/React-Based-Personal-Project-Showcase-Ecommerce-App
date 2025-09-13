import React from 'react';

const SearchBar = ({ search, setSearch, selectedGenres, setSelectedGenres, genres }) => {
    const handleGenreChange = (genre) => {
        if (selectedGenres.includes(genre)) {
            setSelectedGenres(selectedGenres.filter(g => g !== genre));
        } else {
            setSelectedGenres([...selectedGenres, genre]);
        }
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search books..."
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            <div>
                <strong>Filter by Genre:</strong>
                {genres.map(g => (
                    <label key={g} style={{ display: 'block', margin: '4px 0' }}>
                        <input
                            type="checkbox"
                            checked={selectedGenres.includes(g)}
                            onChange={() => handleGenreChange(g)}
                        />
                        {g}
                    </label>
                ))}
            </div>
        </div>
    );
};

export default SearchBar;