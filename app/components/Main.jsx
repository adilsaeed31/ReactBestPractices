const React = require('react');
const Nav = require('Nav');
/*======================================*/
/*             Main Component           */
/*======================================*/

const Main = React.createClass({
  render() {
    return (
        <div>
          <Nav/>
          <div className="container">
            {this.props.children}
          </div>
        </div>
    );
  }
});

module.exports = Main;
