import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

class Movie1 extends React.Component {
  render() {
    return (
        <Card key={this.props.index} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={this.props.movie.image}/>
          <Card.Body>
            <Card.Title>{this.props.movie.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
            <Card.Text>{this.props.movie.overview}</Card.Text>
          </Card.Body>
        </Card>
    )
  }
}

export default Movie1;