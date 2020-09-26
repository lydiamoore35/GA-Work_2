const React = require("react");
const Layout = require("../views/components/Layout.jsx");
const products = require("../models/products.js");

class Show extends React.Component {
  render() {
    const {showProduct} = this.props
    return (
      <Layout>
            <div>
                <form>
                    <h1>{showProduct.name}</h1>
                        <img src={`${showProduct.img}`} alt="Item" width="100" height="120"></img>
                        <h3>
                        {showProduct.description}
                        </h3>
                        <h3>
                        {showProduct.description}
                        </h3>
                        <h3>
                        {showProduct.price}
                        </h3>
                        <h3>
                        {showProduct.qty}
                        </h3>
                </form>
            </div>
      </Layout>
    );
  }
}

module.exports = Show;