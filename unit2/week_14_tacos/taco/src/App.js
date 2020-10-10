import React from 'react';
import logo from './logo.svg';
import './App.css';
import Display from "./components/display";


function App() {

  const [results, setResults] = React.useState({})

  const url = 'http://taco-randomizer.herokuapp.com/random/?full-tack=true'

  const getResults = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setResults(data)
  }

  React.useEffect(() => {getResults()}, [])

  return (
    <>
    <Display taco={results} />
    </>
  );
}

export default App;
