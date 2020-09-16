const React = require("react");
const Layout = require("./components/Layout.jsx");

class New extends React.Component {
    render() {
        return (
          <Layout>
            <h1>Add a New Pokemon</h1>
            <a href="/">Back</a>

            <form action="/" method="post">
            
            <h3>Name</h3>
            <input type="text" name="name"/>
            
            <h3>HP</h3>
            <input type="text" name="stats[hp]"/>
            
            <h3>Attack</h3>
            <input type="text" name="stats[attack]"/>
            
            <h3>Defense</h3>
            <input type="text" name="stats[defense]"/>
            
            <input type="submit" value="New Pokemon"/>
           
            </form>    
          </Layout>
        );
      }
    }

module.exports = New;