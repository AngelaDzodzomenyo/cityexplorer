import React from 'react';
import Card from 'react-bootstrap/Card';

class Weather extends React.Component {
  render() {
    console.log(this.props.forecastInfo)
    return (
        this.props.forecastInfo.map((day, index) => (
          <Card key={index} style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{day.valid_date}</Card.Title>
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