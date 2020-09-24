const React = require("react");
const Layout = require("../views/components/Layout.jsx");
const products = require("../models/products.js");

class Show extends React.Component {
  render() {
    const {products, Index} = this.props
    return (
      <Layout>
        <h1>{products.name}</h1>
            <div>
                <img src={`${products.img}`} alt="Item" width="100" height="120"></img>
                <form action={`/products/${products.Index}?_method=DELETE`} method="POST">
                    <input type="submit" value="delete" />
                </form>
                <form action={`/products/${products.index}/edit`} method="GET">
                    <input type="submit" value="edit"/>
                </form>
            </div>
      </Layout>
    );
  }
}

module.exports = Show;