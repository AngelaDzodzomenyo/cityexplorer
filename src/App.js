import React from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import City from './City';
import Weather from './weather';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchForCity: '',
      location: {},
      error: false,
      errorMessage: '',
      weatherLocation:[]
    }
  }

  handleChange = event => {
    this.setState({
      searchForCity: event.target.value,
    });
  }

  //key: access_token(can vary)
  //q: search_string (this.state searchForCity)(can vary)
  //format: json(can vary)
  getLocation = async (event) => { 
    event.preventDefault();
    try {
      const locationAPI = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_API_KEY}&q=${this.state.searchForCity}&format=json`
      const locationInfo = await axios.get(locationAPI);
      this.setState({
      location: locationInfo.data[0]
      })
    } catch(error) {
      this.setState({
        error: true,
        errorMessage: error.message
      });
    }
    this.getWeather();
  }

  getWeather = async () => {
    try {
      const weatherUrl = `http://localhost:3001/weather?lat=${this.state.location.lat}&lon=${this.state.location.lon}&searchQuery=${this.state.searchForCity}`
      console.log(weatherUrl)
      const weatherInfo = await axios.get(weatherUrl);
      console.log(weatherInfo.data)
      this.setState({
        weatherLocation: weatherInfo.data
      })
      console.log(this.state.weatherLocation)
    } catch(error) {
      this.setState({
        error: true,
        errorMessage: error.message
      })
    }
  }

  render() {
    console.log(this.state.weatherLocation)
    return (
      <Container>
      <Form>
        <h1>
          <Form.Label>Enter a City</Form.Label>
        </h1>
        <h2>
          <Form.Control onChange={(event) => this.handleChange(event)} value={this.state.searchForCity} placeholder="ex. Seattle" />
        </h2>
        <div>
          <Button variant="info" onClick={this.getLocation}>Explore!</Button>
        </div>
      </Form>
        <City 
          city={this.state.location.display_name}
          cityId={this.state.location.place_id}
          cityLat={this.state.location.lat}
          cityLon={this.state.location.lon}
        />
      <Weather 
         forecastInfo={this.state.weatherLocation} 
      />
      {this.state.error && <h1>Please enter a valid city: {this.state.errorMessage}</h1>}
      </Container>
    )
  }
}

export default App;