const React = require("react");

class Layout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="/css/styles.css"/>
        </head>
          <body>
            <header>
              <h1>Lydia's Shop</h1>
                <h2>
                    <a href="/new">Add New Product</a>
                </h2>
            </header>
                <main>
                  {this.props.children}
                </main>
                <footer>
                    <h2>
                        <a href="/">Back to all products</a>
                    </h2>
                </footer>
          </body>
      </html>
    );
  }
}

module.exports = Layout;