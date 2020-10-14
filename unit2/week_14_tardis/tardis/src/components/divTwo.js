import React from "react"
import DivThree from "./divThree.js"

const DivTwo = (props) => {
    const {name, change} = props;

    return (
        <div>
            <DivThree name={name} change={change}/>
        </div>
    )
}

export default DivTwo;