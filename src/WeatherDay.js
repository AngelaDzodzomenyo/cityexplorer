import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


class WeatherDay extends React.Component {
  render() {
    return (
      <div className="m-1" id="container"> 
      <Card bg='primary' text='white' key={this.props.index} style={{ width: '18rem' }}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body className="bootstrapCard">
          <Card.Title>{this.props.day.date}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
          <Card.Text>{this.props.day.description}</Card.Text>
        </Card.Body>
      </Card>
      </div>
    )
  }
}

export default WeatherDay;