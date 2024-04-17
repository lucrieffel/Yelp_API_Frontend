import React, { useState } from 'react';
import styles from '../styles/SearchBar.module.css'; //import css module

const SearchBar = ({ onSearch }) => {
    const [term, setTerm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); //[revent the default form submission behavior
        onSearch(term);
    };
    return (
        <form onSubmit={handleSubmit} className={styles.searchBar}>
            <input
                type="text"
                placeholder="Search Yelp"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                className={styles.searchInput}
            />
            <button type="submit" className={styles.searchButton}>Search</button>
        </form>
    );
};
export default SearchBar;