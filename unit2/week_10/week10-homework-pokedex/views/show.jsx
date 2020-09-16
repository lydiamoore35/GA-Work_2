const React = require("react");
const Layout = require("./components/Layout.jsx");
const pokedex = require('/Users/lydiamoore/Desktop/Lydia-Moore-seir-flex-homework/unit2/week_10/week10-homework-pokedex/models/pokemon.js')

class Show extends React.Component {
  render() {
    const {pokedex} = this.props
    return (
      <Layout>
        <h1>{pokedex.name}</h1>
            <div>
                <a href = {'/'}>Go Back</a><img src={`${pokedex.img}`} alt="Pokemon" width="500" height="600"></img>
                <h3>Pokemon Type</h3>
                    {pokedex.type.map((item, index) => {
                        return (
                            <ul>
                                <li>{pokedex.type[index]}</li>
                            </ul>
                            )
                    })}
                <h3>Pokemon Stats</h3>
                    <ul>
                    <li>HP: {pokedex.stats.hp}</li>
                    <li>Attack: {pokedex.stats.attack}</li>
                    <li>Defense: {pokedex.stats.defense}</li>
                    </ul>
                    <h1>{this.props.todo}</h1>
                <form action={`/pokedex/${pokedex.index}?_method=DELETE`} method="POST">
                    <input type="submit" value="delete" />
                </form>
            </div>
      </Layout>
    );
  }
}

module.exports = Show;