const React = require("react");

class Layout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="public/css/styles.css"/>
        </head>
            <body>
              <header>
                  <h1>Pokedex!</h1>
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