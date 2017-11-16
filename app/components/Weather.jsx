const React = require('react');
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const openWeatherMap = require('openWeatherMap');
/*======================================*/
/*             Weather Component        */
/*======================================*/

const Weather = React.createClass({
  getInitialState() {
    return {
      location: 'Lahore',
      temp: 23
    }
  },
  handleSearch(location) {
    let that = this;

    this.setState({isLoading: true});

    openWeatherMap.getTemp(location).then(function(res) {
        that.setState({
          location: location,
          temp:res.main.temp,
          isLoading: false
        });
    }, function(res) {
        that.setState({ isLoading: false });
        alert(res);
    });

  },
  render() {
    let {isLoading, location, temp} = this.state;

    function renderMessage() {
      if (isLoading) {
        return <p><strong>Featching Weather ...</strong></p>
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp}/>;
      }
    }

    return (
      <div>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
