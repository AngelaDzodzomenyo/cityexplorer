import React from 'react';
import Card from 'react-bootstrap/Card';

class City extends React.Component {


  render(){
    console.log(this.props);
    return(
      <>
        {this.props.cityId &&
        <Card style={{ width: '18rem' }}>
        <Card.Body>
        <div>
        <Card.Img  variant ="top" src ={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_API_KEY}&center=${this.props.cityLat},${this.props.cityLon}&zoom=18`} />
        </div>
        <Card.Title>{this.props.city}</Card.Title>
        <Card.Text>Latitude: {this.props.cityLat}</Card.Text>
        <Card.Text>Longitude: {this.props.cityLon}</Card.Text>
        </Card.Body>
        </Card>
        }
      </>
    )
  }
}


export default City;