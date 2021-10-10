import React from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import City from './City';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchForCity: '',
      location: {},
      error: false,
      errorMessage: ''
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
    
    
    

  }

  render() {
    return (
      <Container>
      <Form>
          <Form.Label>Enter a City</Form.Label>
          <Form.Control onChange={(event) => this.handleChange(event)} value={this.state.searchForCity} placeholder="ex. Seattle"/>
          <Button variant="dark" onClick={this.getLocation}>Explore!</Button>
        </Form>
        <City 
          city={this.state.location.display_name}
          cityId={this.state.location.place_id}
          cityLat={this.state.location.lat}
          cityLon={this.state.location.lon}
        />

      {this.state.error && <h1>Please enter a valid city: {this.state.errorMessage}</h1>}
      </Container>
    )
  }
}

export default App;