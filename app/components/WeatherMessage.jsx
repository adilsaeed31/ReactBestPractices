const React = require('react');

const WeatherMessage = React.createClass({
  render() {
    return(
      <p>Weather of <strong>{this.props.location.toUpperCase()}</strong> is now <strong>{this.props.temp}</strong></p>
    );
  }
});

module.exports = WeatherMessage;
