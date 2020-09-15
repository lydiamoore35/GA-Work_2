const React = require("react");
const Layout = require("./components/Layout.jsx");
const budget = require("../models/budget.js");
const bankAccount = budget.reduce((bankAccount, item)=>{
  return bankAccount += Number(item.amount)},0);
const changeColor = (bankAccount) => {
  if(bankAccount <= 0){
    return(
      <h2 style={{color: "red"}}>You have ${bankAccount} in your account.</h2>
    )
  }else(bankAccount > 0)
    return(
      <h2 style={{color: "green"}}>You have ${bankAccount} in your account</h2>
    )
  }
  
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
      <div>{changeColor(bankAccount)}</div>
      </Layout>
    );
  }
}

module.exports = Index;