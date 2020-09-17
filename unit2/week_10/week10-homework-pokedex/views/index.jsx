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
                    <div class="info">
                        <a href = {`/${index}`}>{item.name}</a>

                        <a href={`/${index}/edit`}>Edit Pokemon</a>

                        <a href={`/${index}/delete`}>Delete Pokemon</a>
                        <br></br>
                        <img src={`${item.img}`} alt="Pokemon" width="100" height="120"></img>
                    </div>
                    )
                })}
                </table>
                </Layout>
        )};  
      }
  module.exports = Index;