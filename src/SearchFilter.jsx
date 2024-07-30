import React, { useState, useEffect } from 'react';
import './styles/SearchFilter.css';
const SearchFilter = ({ books, setFilteredBooks }) => {
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const filtered = books.filter(book =>
            book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            book.author.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredBooks(filtered);
    }, [searchQuery, books, setFilteredBooks]);

    return (
        <div className="search-filter-container">
            <h3>Search</h3>
            <input
                type="text"
                placeholder="Search by title or author"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
        </div>
    );
};

export default SearchFilter;
