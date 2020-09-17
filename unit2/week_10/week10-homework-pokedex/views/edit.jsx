const React = require("react");
const Layout = require("../views/components/Layout");
const pokedex = require('/Users/lydiamoore/Desktop/Lydia-Moore-seir-flex-homework/unit2/week_10/week10-homework-pokedex/models/pokemon.js');

class Edit extends React.Component {
  render() {
    const {pokedex, index} = this.props
    return (
      <Layout title="Edit Pokemon!">
        <form action={`/${index}?_method=PUT`} method="post">
        
        <h3>Name</h3>
            <input type="text" name="name" value={pokedex.name}/>
        
        <h3>HP</h3>
            <input type="text" name="stats[hp]" value={pokedex.stats.hp}/>
        
        <h3>Attack</h3>
            <input type="text" name="stats[attack]" value={pokedex.stats.attack}/>
        
        <h3>Defense</h3>
            <input type="text" name="stats[defense]" value={pokedex.stats.defense}/>
        
        <input type="submit" value="Update"/>
        </form>
      </Layout>
    );
  }
}

module.exports = Edit;