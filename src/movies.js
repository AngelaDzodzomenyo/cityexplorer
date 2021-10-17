import React from 'react';
import Card from 'react-bootstrap/Card';

class Movies extends React.Component {
  render() {
    console.log(this.props.movieInfo)
    return (
      this.props.movieInfo.map((movie, index) => (
        <Card key={index} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={movie.image}/>
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
            <Card.Text>{movie.overview}</Card.Text>
          </Card.Body>
        </Card>
      )
      )
    )
  }
}

export default Movies;