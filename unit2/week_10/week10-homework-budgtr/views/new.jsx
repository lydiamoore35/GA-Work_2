const React = require("react");
const Layout = require("./components/Layout.jsx");

class New extends React.Component {
    render() {
        // const {item} = this.props
        return (
          <Layout>
            <h1>Add Item</h1>
            <a href="/">Back</a>
            <form action="/" method="post">
            <input type="text" placeholder="Date" name="date"/>
            <input type="text" placeholder="Name" name="name"/>
            <input type="text" placeholder="Amount" name="amount"/>
            <input type="text" placeholder="From" name="from"/>
            <input type="text" placeholder="tags" name="tags"/>
            <input type="submit"/>
            </form>      
          </Layout>
        );
      }
    }

module.exports = New;