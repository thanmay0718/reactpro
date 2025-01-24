import {useEffect} from 'react';
//b47cd2ae

const API_URL = 'http://www.omdapi.com?apikey=b47cd2ae';


const App = () => {
  const searchMoives = async(title) => {
    const response = await fetch(`${API_URL}$s={title}`);
    const data = await response.json();

    console.log(data);
  }
  
  useEffect(() => {
    searchMoives('sipderman');
  },[]);

  return(
    <h1>App</h1>
  )
}

export default App;