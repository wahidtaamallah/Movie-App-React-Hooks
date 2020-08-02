import React from 'react';
import StarRatingComponent from "react-star-rating-component";
import {Card} from 'react-bootstrap'

function  ListMovies (props) {
  return (
    <div className="listMovies">
        {props.movies.map((el) => (
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={el.image} />
  <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Text>{el.year}</Card.Text>
        <StarRatingComponent  value={el.rating} starCount={5}/>
  </Card.Body>
</Card>
        ))}
    </div>
  );
};

export default ListMovies
