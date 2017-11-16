const React = require('react');
const {Link, IndexLink} = require('react-router');

const Nav = React.createClass({
  render() {
    return (
      <nav>
        <div className="nav-wrapper purple darken-2">
          <div className="container">
            <Link className="brand-logo" to="/">React 16.0.0</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><IndexLink to="/" className="waves-effect waves-light" activeClassName="active pink">React</IndexLink></li>
              <li><Link to="about"  className="waves-effect waves-light" activeClassName="active orange">And</Link></li>
              <li><Link to="examples"  className="waves-effect waves-light" activeClassName="active brown">React Native</Link></li>
              <li><Link to="examples2" className="waves-effect waves-light" activeClassName="active green">Is The</Link></li>
              <li><Link to="examples3" className="waves-effect waves-light"  activeClassName="active grey">Future</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
});

module.exports = Nav;
