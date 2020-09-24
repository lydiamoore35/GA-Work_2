const React = require("react");

class Edit extends React.Component {
  render() {
    return (
      <div>
        <form action={`/products/${this.props.index}?_method=PUT`} method="post">
          <input type="text" name="products" value={this.props.products} />
          <input type="submit" value="new product" />
        </form>
      </div>
    );
  }
}

module.exports = Edit;