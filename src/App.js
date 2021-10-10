import React from 'react'
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchForCity: '',
      location: {},
      error: false,
    }
  }

  handleChange = event => {
    console.log(event);
    this.setState({
      searchForCity: event.target.value,
    });
  }

  //key: access_token(can vary)
  //q: search_string (this.state searchForCity)(can vary)
  //format: json(can vary)
  getLocation = async (event) => { 
    event.preventDefault();
    const locationAPI = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_API_KEY}&q=${this.state.searchForCity}&format=json`
    const locationInfo = await axios.get(locationAPI);
    this.setState({
      location: locationInfo.data
    })
    
    

  }

  render() {
    console.log(this.state.location);
    return (
      <Container>
      <Form>
          <Form.Label>Enter a City</Form.Label>
          <Form.Control onChange={(event) => this.handleChange(event)} value={this.state.searchForCity} placeholder="ex. Seattle"/>
          <Button variant="dark" onClick={this.getLocation}>Explore!</Button>
        </Form>
        {this.state.location.place_id &&
        <Card style={{ width: '18rem' }}>
        <Card.Body>
        <Card.Img  variant ="top" src ={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_API_KEY}&center=${this.state.location.lat},${this.state.location.lon}&zoom=18`}/>
        <Card.Title>{this.state.location.display_name}</Card.Title>
        <Card.Text>Latitude: {this.state.location.lat}</Card.Text>
        <Card.Text>Longitude: {this.state.location.lon}</Card.Text>
        </Card.Body>
        </Card>
        }
      {this.state.error && <h1>Please enter a valid location</h1>}
      </Container>
    )
  }
}

export default App;