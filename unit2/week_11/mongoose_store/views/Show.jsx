const React = require("react");
const Layout = require("../views/components/Layout.jsx");
const Product = require("../models/products.js");

const buy = (showProduct, index) => {
  if (showProduct.qty > 0) {
      return (
          <div>
              <h3>Quantity: {showProduct.qty}</h3>
              <form action={`/${showProduct._id}?_method=PUT`} className="buyButton" method="POST">
                      <input type="hidden" name="qty" value={showProduct.qty -= 1}/>
                      <input type="submit" className="button" value="Buy Now"/>
              </form>
          </div>
      )
  } else {
      return (<h1>SOLD OUT</h1>)
  }
}
//BUY BUTTON// - i worked on trying to get the buy button to subtract one from the qty and for some reason cannot get -= 1 to work. I would love any feedback you have about how to further troubleshoot this error. Thank you! 

// const products = require("../models/products.js");

class Show extends React.Component {
  render() {
    const {showProduct} = this.props
      // console.log(showProduct);
      // console.log(this.props);
    return (
      <Layout>
            <div className="show">
                <form>
                   <h2>{showProduct.name}
                   </h2> 
                        <img src={`${showProduct.img}`} alt="Item" width="100" height="120"></img>
                        <h3>
                        {showProduct.description}
                        </h3>
                        <h3>$
                        {showProduct.price}
                        </h3>
                        <h3>{buy(showProduct, showProduct.id)}</h3>
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