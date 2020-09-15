const React = require("react");
const Layout = require("./components/Layout.jsx");

class Show extends React.Component {
  render() {
    const {budget} = this.props
    return (
      <Layout>
        <a href="/">Back</a>
        <h2>Name</h2>
            <h3>{budget.name}</h3>
        <h2>Date</h2>
            <h3>{budget.date}</h3>
        <h2>From</h2> 
            <h3>{budget.from}</h3>
        <h2>Amount</h2>
            <h3>{budget.amount}</h3>       
      </Layout>
    );
  }
}

module.exports = Show;
