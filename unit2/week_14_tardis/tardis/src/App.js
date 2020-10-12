import React from 'react';
import logo from './logo.svg';
import './App.css';
import DivOne from "./components/divOne"

function App() {
  const [state, setState] = React.useState({
    tardis:{  
       name: "Time and Relative Dimension in Space",
       caps: false
  } }) 

  const changeIt = (text) => {
    if (state.tardis.caps) {
      setState({
        tardis: {
          name: text.toLowerCase(),
          caps: false
        }
      })
    } else {
      setState({
        tardis: {
          name: text.toUpperCase(),
          caps: true
        }
      })
    }
  }

  return (
    <>
      <div className="App">
        <h3 onClick={() => {
            changeIt(state.tardis.name)}}>{state.tardis.name}
          </h3> 
      </div>
      <DivOne />
    </>
  );
  
}

export default App;
