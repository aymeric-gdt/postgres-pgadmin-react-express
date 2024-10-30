import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`/api/example`)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
        setError(error.response ? error.response.data : error.message);
      });
  }, []);

  return (
    <div className="App">
      <h1>React Frontend</h1>
      {error && <p>Error: {error}</p>}
      {data ? <p>Data from backend: {JSON.stringify(data)}</p> : <p>Loading...</p>}
    </div>
  );
}

export default App;
