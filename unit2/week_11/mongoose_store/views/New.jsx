const React = require('react');

class New extends React.Component {
  render() {
    return (
        <div>
            <h1>Lydia's Shop</h1>
            <form action="/fruits" method="POST">
                Name: <input type="text" name="name" /><br/>
                Description: <input type="text" name="description" /><br/>
                Price: <input type="text" name="price" /><br/>
                Qty: <input type="text" name="qty" /><br/>
                <input type="submit" name="" value="Add Product"/>
             </form>
        </div>);
  }
}

module.exports = New;