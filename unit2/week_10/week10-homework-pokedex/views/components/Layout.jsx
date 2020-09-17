const React = require("react");

class Layout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="/css/styles.css"/>
          <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&display=swap" rel="stylesheet"></link>
        </head>
          <body>
            <header>
              <h1>Pokedex!</h1>
                <h2>
                    <a href="/new">Add New Pokemon</a>
                </h2>
            </header>
              <main>{this.props.children}</main>
                <footer>
                      <h1></h1>
                </footer>
          </body>
      </html>
    );
  }
}

module.exports = Layout;