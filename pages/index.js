//index.js
import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import Results from '../components/Results';
import homeStyles from '../styles/Home.module.css';

export default function Home() {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    //makes a request to the Next API route, acts as a proxy to the Yelp API
    const searchYelp = (term) => {
        setLoading(true);
        setError('');

        //use Next API route as the URL for the Axios lib request
        const url = '/api/search'; //proxy path or route

        //perform the GET request to the proxy API route path: /api/search
        axios.get(url, { params: { term, location: 'New York, NY' } })
            .then(response => {
                setResults(response.data.businesses); //update state with the results
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data: ', error.response ? error.response.data : 'Unknown error');
                setError('Failed to fetch data. Please try again.');
                setLoading(false); //loading is false if error occurs
            });
    };
    //return loading message, error message, or results
    return (
      <div className={homeStyles.container}>
          <div className={homeStyles.header}>
              <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0xW8f6ArJ20ndbwQf7zO-Wgi-AdcQ3uA3lJlSj6b0Wg&s"
                  alt="Yelp logo"
                  className={homeStyles.logo}
              />
              <h1>Find the Best Places to Eat in NYC</h1>
          </div>
          <SearchBar onSearch={searchYelp} />
          {loading ? <p>Loading...</p> : error ? <p>{error}</p> : <Results results={results} />}
      </div>
  );
}