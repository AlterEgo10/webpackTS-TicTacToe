import { Card, ListGroup } from 'react-bootstrap';

export default function MovieCard({ movie }) {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{console.log(movie.title)}</Card.Title>
        <ListGroup>
          <ListGroup.Item>{movie.overview}</ListGroup.Item>
          <ListGroup.Item>{movie.release_date}</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}
