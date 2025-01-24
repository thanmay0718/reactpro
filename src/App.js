import { useEffect } from 'react';

const API_URL = 'https://www.omdbapi.com?apikey=b47cd2ae';

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    searchMovies('spiderman');
  }, []);

  return <h1>App</h1>;
};

export default App;