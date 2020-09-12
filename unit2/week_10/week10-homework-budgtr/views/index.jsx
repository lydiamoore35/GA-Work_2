const React = require("react");
const Layout = require("./components/Layout.jsx")

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <h1>Hello World</h1>
        {/* <link rel="stylesheet" href="css/styles.css"/> */}
      </Layout>
    );
  }
}

module.exports = Index;