import {useState, useEffect} from 'react';

function Hello () {

  useEffect (() => {
    console.log('hi');
    return () => console.log('bye');
  }, []);

  return <h1>Hello</h1>
}

function App() {

  const [showing, setShowing] = useState(false);

  const onClick = () =>{
    setShowing(current => !current);
  }

  return (
    <div className="App">
      {showing ? <Hello /> : ""}
        <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
