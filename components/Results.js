import React from 'react';
import styles from '../styles/Results.module.css';

//Results.js
const Results = ({ results }) => {
    return (
        <div>
            {results.map((result) => (
                <div key={result.id} style={{ margin: '20px', padding: '10px', border: '1px solid #ccc' }}>
                    <h2>{result.name}</h2>
                    {result.image_url && (
                        <img
                            src={result.image_url}
                            alt={result.name}
                            style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                        />
                    )}
                    <p>Address: {result.location.address1}</p>
                    <p>Phone: {result.display_phone}</p>
                    {/* <p>Categories: {result.category}</p> */}
                    {/* <p>Cuisine: {result.cuisine}</p> */}
                    <p>Rating: {result.rating} Stars ({result.review_count} Reviews)</p>
                    <a href={result.url} target="_blank" rel="noopener noreferrer">View on Yelp</a>
                </div>
            ))}
            {results.length === 0 && <p>No results found</p>}
        </div>
    );
};

export default Results;