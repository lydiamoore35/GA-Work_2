import React from "react"

const Display = (props) => {
    const {taco} = props;

    const loaded = () => {
        return (
        <div>
            <h1>{taco.mixin.name}</h1>
                <p>{taco.mixin.recipe}</p>
            <h1>{taco.base_layer.name}</h1>
                <p>{taco.base_layer.recipe}</p>
            <h1>{taco.seasoning.name}</h1>
                <p>{taco.seasoning.recipe}</p>
            <h1>{taco.shell.name}</h1>
                <p>{taco.shell.recipe}</p>
            <h1>{taco.condiment.name}</h1>
                <p>{taco.condiment.recipe}</p>

            <form onSubmit={loaded}>
                <input type="submit" value="New Taco"/>
            </form>
        </div>
        
        )
    }

    return (
        taco.mixin ? loaded(): <h1>loading...</h1>
    )
}

export default Display;