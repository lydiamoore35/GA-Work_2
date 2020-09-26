const React = require("react");

class Edit extends React.Component {
  render() {
    const {editedProduct} = this.props
    return (
      <div>
        <form action={`/${editedProduct.id}?_method=PUT`} method="POST">
            Name: <input type="text" name="name" /><br/>
            Description: <input type="text" name="description" /><br/>
            Image: <input type="text" name="img" /><br/>
            Price: <input type="text" name="price" /><br/>
            Qty: <input type="number" name="qty" /><br/>
            <input type="submit" name="" value="Add Product"/>
        </form>
      </div>
    );
  }
}

module.exports = Edit;