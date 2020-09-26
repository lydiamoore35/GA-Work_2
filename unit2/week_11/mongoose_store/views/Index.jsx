const React = require("react");
const Layout = require("../views/components/Layout.jsx");

class Index extends React.Component {
    render() {
      const {inventory} = this.props
        return (
            <Layout>
            <table>
                {inventory.map((item, index) => {
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

                        <a href={`/${item.id}/edit`}>Edit Product</a>
                        <br></br>
                        <a href={`/${item.id}/delete`}>Delete Product</a>
                    </div>
                    )
                })}
                </table>
            </Layout>
        )};  
      }

module.exports = Index;