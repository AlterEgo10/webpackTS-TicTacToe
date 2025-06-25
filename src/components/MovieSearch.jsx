import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Spinner,
} from 'react-bootstrap';

let API_KEY = process.env.API_KEY;


 const MovieSearch = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchMovies = async (e) => {
    e.preventDefault();

    if (!query) return;

    setLoading(true);
    setError(null);

    try {
      // Запрос к API TMDB
    
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=ru-RU&query=${encodeURIComponent(query)}&page=1&include_adult=false`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Ошибка при выполнении запроса к API');
      }

      const data = await response.json();
      setMovies(data.results);
    } catch (err) {
      setError(err.message);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="mt-4">
      <Row className="justify-content-center mb-4">
        <Col md={8}>
          <h2 className="text-center mb-3">Поиск фильма</h2>
          <Form onSubmit={searchMovies}>
            <Form.Group className="d-flex">
              <Form.Control
                type="text"
                placeholder="Введите название фильма..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="me-2"
                required
              />
              <Button
                type="submit"
                variant="primary"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                      className="me-2"
                    />
                    Поиск...
                  </>
                ) : (
                  'Найти'
                )}
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>

      {error && (
        <Row className="justify-content-center">
          <Col md={8}>
            <div
              className="alert alert-danger"
              role="alert"
            >
              {error}
            </div>
          </Col>
        </Row>
      )}

      {loading && (
        <Row className="justify-content-center">
          <Col className="text-center">
            <Spinner
              animation="border"
              role="status"
            >
              <span className="visually-hidden">Загрузка...</span>
            </Spinner>
          </Col>
        </Row>
      )}

      <Row>
        {movies.map((movie) => (
          <Col
            key={movie.id}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className="mb-4"
          >
            <Card className="h-100 shadow-sm">
              {movie.poster_path ? (
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
              ) : (
                <div
                  className="no-image-placeholder d-flex align-items-center justify-content-center bg-light"
                  style={{ height: '300px' }}
                >
                  <span className="text-muted">Нет изображения</span>
                </div>
              )}
              <Card.Body>
                <Card.Title>{movie.title || movie.original_title}</Card.Title>
                {movie.release_date && (
                  <Card.Text>
                    <small className="text-muted">
                      Год выпуска: {new Date(movie.release_date).getFullYear()}
                    </small>
                  </Card.Text>
                )}
                <Card.Text className="movie-overview">
                  {movie.overview
                    ? movie.overview.length > 150
                      // eslint-disable-next-line unicorn/prefer-string-slice
                      ? `${movie.overview.substring(0, 150)}...`
                      : movie.overview
                    : 'Описание отсутствует'}
                </Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                  <small className="text-muted">
                    Рейтинг:{' '}
                    {movie.vote_average ? movie.vote_average.toFixed(1) : 'Н/Д'}
                  </small>
                  {movie.vote_count > 0 && (
                    <small className="text-muted">
                      Голосов: {movie.vote_count}
                    </small>
                  )}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {movies.length === 0 && !loading && !error && query && (
        <Row className="justify-content-center">
          <Col
            md={8}
            className="text-center"
          >
            <p>Фильмы не найдены. Попробуйте другой поисковый запрос.</p>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default MovieSearch;
