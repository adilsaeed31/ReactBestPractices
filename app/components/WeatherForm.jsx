const React = require('react');

const WeatherForm = React.createClass({
  onFormSubmit(e) {
    e.preventDefault();
    let location = this.refs.location.value;

    if (location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  render() {
    return(
      <form onSubmit={this.onFormSubmit}>
        <input type="text" ref="location" />
        <button className="waves-effect waves-default btn green">Fetch</button>
      </form>
    );
  }
});

module.exports = WeatherForm;
