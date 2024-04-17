//create a next API route that acts like a server-side proxy.
//The front-end code should request data from the API route instead of the external API directly.
// path: pages/api/search.js
import axios from 'axios';

export default async function handler(req, res) {
    const apiKey = process.env.YELP_API_KEY; //key is stored in root/.env.local file
    const { term, location } = req.query;

    const config = {
        headers: {
            'Authorization': `Bearer ${apiKey}`,
        },
        params: {
            term: term.replace('+', ' '), 
            location,
            limit: 50,
            categories: 'japanese',
            sort_by: 'best_match',
        },
    };

    try {
        const response = await axios.get('https://api.yelp.com/v3/businesses/search', config);
        res.status(200).json(response.data);//success
    } catch (error) {
        console.error('Error fetching data from Yelp:', error);
        res.status(error.response?.status || 500).json({ message: 'Error fetching data' });
    }
}