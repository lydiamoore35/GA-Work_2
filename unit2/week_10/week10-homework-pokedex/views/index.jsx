const React = require("react");
const Layout = require("./components/Layout.jsx");
const pokedex = require('../models/pokemon.js')

class Index extends React.Component {
    render() {
      const {pokedex} = this.props;
        return (
            <Layout>
            <table>
            {pokedex.map((item, index)=> {
                return (
                <div><a href = {`/${index}`}>{item.name}</a><img src={`${item.img}`} alt="Pokemon" width="500" height="600"></img></div>
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