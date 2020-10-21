import React from 'react';
import logo from './logo.svg';
import './App.css';
import DivOne from "./components/divOne"

  const App = () => {
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
      <div className="App">
        <DivOne name={state.tardis.name} change={changeIt}/>
      </div>
  );
  
}

export default App;
