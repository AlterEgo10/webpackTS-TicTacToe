import { Card, ListGroup } from 'react-bootstrap';


//  export interface cardMovie {
//   title: string  FixMeLater
//   release_date: string
//   overview: string;
// }
export default function MovieCard(movie:FixMeLater) {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{(movie.title)}</Card.Title>
        <ListGroup>
          <ListGroup.Item>{movie.overview}</ListGroup.Item>
          <ListGroup.Item>{movie.release_date}</ListGroup.Item>
        </ListGroup>
      </Card.Body> 
    </Card>
  );
}
