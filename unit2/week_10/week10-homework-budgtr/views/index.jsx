const React = require("react");
const Layout = require("./components/Layout.jsx")
// const budget = require("../models/budget.js");

class Index extends React.Component {
  render() {
    const {budget} = this.props
    return (
      <Layout>
      <table>
        {budget.map((item, index) => {
          return (
          <tr>
            {/* <td>{item.date}</td> */}
            <td><a href = {`/${index}`}>{item.name}</a></td>
            <td>{item.from}</td>
            <td>{item.amount}</td>
            <td>{item.tags}</td>
          </tr>
           ) 
          })}
      </table>
      <h2>
      <a href="/new">Add Item</a>
      </h2>
      </Layout>
    );
  }
}

module.exports = Index;