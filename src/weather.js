import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherDay from './WeatherDay';

class Weather extends React.Component {
  render() {
    console.log(this.props.forecastInfo)
    return (
      this.props.forecastInfo.map((day, index) => (
       <WeatherDay 
        day={day}
        index={index}
       />
      )
      )
    )
  }
}

export default Weather;