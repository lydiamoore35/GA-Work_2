const React = require("react");
const Layout = require("./components/Layout.jsx");
const pokedex = require('../models/pokemon.js')

class Show extends React.Component {
  render() {
    const {pokedex} = this.props
    return (
      <Layout>
        <h1>{pokedex[0].name}</h1>
      </Layout>
    );
  }
}

module.exports = Show;