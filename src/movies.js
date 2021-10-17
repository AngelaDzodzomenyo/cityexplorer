import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movies1 from './Movie1';

class Movies extends React.Component {
  render() {
    console.log(this.props.movieInfo)
    return (
      this.props.movieInfo.map((movie, index) => (
       <Movies1 
        movie={movie}
        index={index}
       />
      )
      )
    )
  }
}

export default Movies;