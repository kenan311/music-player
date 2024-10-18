import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Explore() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExploreData = async () => {
      const options = {
        method: 'GET',
        url: 'https://spotify23.p.rapidapi.com/genre_view/',
        params: {
          id: '6V6mxrGG67IyLFy2l4poNZ',
          content_limit: '10',
          limit: '20'
        },
        headers: {
          'x-rapidapi-key': '2c25bc4c74msh8ef0430ed499c8bp13dabfjsn8d0949ef5dfc',
          'x-rapidapi-host': 'spotify23.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        console.error("Error response data:", error.response?.data);
        setError(error);
        setLoading(false);
      }
    };

    fetchExploreData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Explore</h1>
      {data && data.contents && (
        <ul>
          {data.contents.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Explore;
