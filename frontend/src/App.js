import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null); // Ajoutez cet état pour gérer les erreurs

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/example`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setData(data))
      .catch(error => {
        console.error('Error:', error);
        setError(error.message); // Utilisez setError ici pour définir le message d'erreur
      });
  }, []);

  return (
    <div className="App">
      <h1>React Frontend</h1>
      {error && <p>Error: {error}</p>} {/* Affichez l'erreur s'il y en a une */}
      {data ? <p>Data from backend: {JSON.stringify(data)}</p> : <p>Loading...</p>}
    </div>
  );
}

export default App;
