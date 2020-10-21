import React from "react"
import DivTwo from "./divTwo.js"

const DivOne = (props) => {
    const {name, change} = props;

    return (
        <div>
            <DivTwo name={name} change={change}/>
        </div>
    )
}

export default DivOne;