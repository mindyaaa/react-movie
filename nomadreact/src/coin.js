import {useState, useEffect} from 'react';

function App() {

  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect( () => {
    fetch('https://api.coinpaprika.com/v1/tickers')
    .then((response) => response.json())
    .then((json) => {
      setCoins(json);
      setLoading(false);
      console.log(coins);
    });
  }, [])

  return (
    <div className="App">
      <h1>The Coins! {loading ? null : `(${coins.length})`}</h1>
      {loading ? <strong>...Loading</strong> : coins.map((item) => 
          <li key={item.id}>
            {item.name} ({item.symbol}) : ${item.quotes.USD.price}
          </li> 
          )}
      
      {}


    </div>
  );
}

export default App;
