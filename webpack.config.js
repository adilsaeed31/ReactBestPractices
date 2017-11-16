const path = require('path');

const Config = {
  entry: './app/index.jsx',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      Main: path.resolve(__dirname, 'app/components/Main.jsx'),
      Nav:  path.resolve(__dirname, 'app/components/Nav.jsx'),
      Weather:  path.resolve(__dirname, 'app/components/Weather.jsx'),
      WeatherForm:  path.resolve(__dirname, 'app/components/WeatherForm.jsx'),
      WeatherMessage:  path.resolve(__dirname, 'app/components/WeatherMessage.jsx'),
      About:  path.resolve(__dirname, 'app/components/About.jsx'),
      Examples:  path.resolve(__dirname, 'app/components/Examples.jsx'),
      openWeatherMap : path.resolve(__dirname, 'app/api/openWeatherMap.jsx'),
    },
    extensions: ['.js','.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
        options: {
          presets: ["react", "es2015", "stage-0"]
        }
      }
    ]
  },
  devtool: 'inline-source-map'
}

module.exports = Config;
