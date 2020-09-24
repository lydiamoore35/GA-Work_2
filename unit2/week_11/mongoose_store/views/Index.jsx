const React = require("react");
const Layout = require("../views/components/Layout.jsx");
const products = require("../models/products.js");

class Index extends React.Component {
    render() {
      const {products} = this.props
        return (
            <Layout>
            <table>
                {products.map((item, index) => {
                    return (
                    <div class="info">
                        <a href = {`/${index}`}>{item.name}</a>
                        
                        <img src={`${item.img}`} alt="product" width="100" height="120"></img>

                        <h3>
                            {item.description}
                        </h3>

                        <h3>
                            {item.price}
                        </h3>

                        <h3>
                            {item.qty}
                        </h3>

                        <a href={`/${index}/edit`}>Edit Product</a>
                    </div>
                    )
                })}
                </table>
            </Layout>
        )};  
      }
  module.exports = Index;