import React from 'react';
import Card from 'react-bootstrap/Card';

class Weather extends React.Component {
  render() {
    console.log(this.props.forecastInfo)
    return (
      this.props.forecastInfo.map((day, index) => (
        <Card key={index} style={{ width: '18rem' }}>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body>
            <Card.Title>{day.date}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
            <Card.Text>{day.description}</Card.Text>
          </Card.Body>
        </Card>
      )
      )
    )
  }
}

export default Weather;