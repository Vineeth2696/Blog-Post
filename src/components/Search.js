import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = ({ onSearch }) => {
    return (
        <div className="search-container">
            <input
                className="search-input"
                type="text"
                placeholder="Search posts by title..."
                onChange={(e) => onSearch(e.target.value)}
            />
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </div>
    );
};

export default Search;
