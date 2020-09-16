const React = require("react");
const Layout = require("./components/Layout.jsx");
const pokedex = require('/Users/lydiamoore/Desktop/Lydia-Moore-seir-flex-homework/unit2/week_10/week10-homework-pokedex/models/pokemon.js');

class Index extends React.Component {
    render() {
      const {pokedex} = this.props
        return (
            <Layout>
            <table>
                {pokedex.map((item, index) => {
                    return (
                    <div>
                        <a href = {`/${index}`}>{item.name}</a><img src={`${item.img}`} alt="Pokemon" width="100" height="120"></img>
                        <a href={`/${index}/edit`}>Edit Pokemon</a>
                        <br></br>
                        <a href={`/${index}/delete`}>Delete Pokemon</a>
                        <br></br>
                        <a href={`/new`}>Add a New Pokemon</a>

                    </div>
                    )
                })}
                </table>
                <h2>
                <a href="/new">Add New Pokemon</a>
                </h2>
                </Layout>
        )};  
      }
  module.exports = Index;