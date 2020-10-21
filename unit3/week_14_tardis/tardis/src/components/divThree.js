import React from "react"

const DivThree = (props) => {
    const [state, setState] = React.useState({
        tardis:{  
           name2: "Time and Relative Dimension in Space",
           caps2: false
      } }) 
    
      const changeIt2 = (text) => {
        if (state.tardis.caps2) {
          setState({
            tardis: {
              name2: text.toLowerCase(),
              caps2: false
            }
          })
        } else {
          setState({
            tardis: {
              name2: text.toUpperCase(),
              caps2: true
            }
          })
        }
      }

    const {name, change} = props;

    return (
        <>
        <div>
            <h3 onClick={() => change(name)}>{name}</h3>
        </div>
        <div>
            <h3 onClick={() => changeIt2(state.tardis.name2)}>{state.tardis.name2}</h3>
        </div>
        </>
    )
}

export default DivThree;