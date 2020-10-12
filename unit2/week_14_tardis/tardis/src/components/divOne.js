import React from "react"

const DivOne = (props) => {
    const {one} = props;

    return (
        <>
            <div>{one.tardis.name}</div>
        </>
    )
}

export default DivOne;