import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../../helpers/ThemeContext';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../../reducers/movieSeriesSlice';
import Sidebar from '../Sidebar';
import Spinner from 'react-bootstrap/Spinner';
import MovieCard from '../MovieCard'
import {Container,Row,Col,Form,Card,InputGroup,Button,} from 'react-bootstrap';

// Исправление опечаток в названиях функций

function changeLanguageNext() {
  const index = appLanguage.indexOf(language) || 0;
  setLanguage(index === 0 ? 'ru' : appLanguage[1]);
}

function changeThemeNext() {
  const index = appThemes.indexOf(theme) || 0;
  setTheme(index === 0 ? 'dark' : appThemes[1]);
}

export default function MovieContainer() {
  const { language } = useContext(ThemeContext);

  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.moviesSeries);
  const [filteredMovies, setFilteredMovies] = useState(data);
  const [searchTerm, setSearchTerm] = useState('');

  // Состояние для загрузки
  const [isSearching, setIsSearching] = useState(false);

  // Обработчик изменения поискового запроса
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setIsSearching(true);
  };
  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  // Локальная фильтрация
  const filterMoviesLocally = (data, query) => {
    if (!query.trim()) {
      return data;
    }

    return data.filter((movie) =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
  };

  useEffect(() => {
    if (searchTerm) {
      const locallyFiltered = filterMoviesLocally(data, searchTerm);
      setFilteredMovies(locallyFiltered);
    } else {
      setFilteredMovies('');
    }
  }, [searchTerm, data]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <Spinner
          animation="border"
          role="status"
          variant="primary"
        >
          <div>Идёт загрузка данных...</div>;
        </Spinner>
      </div>
    );
  }

  if (error) {
    return <div>Ошибка получения данных: {error}</div>;
  }

  return (
    <>
      <div>
        <h2>{language === 'en-US' ? 'Movies' : 'Фильмы'}</h2>
      </div>
      <main>
        <Container
          fluid
          style={{ paddingLeft: 0 }}
        >
          <Row>
            <Col
              sm="12"
              md="4"
              lg="3"
              xxl="2"
              style={{ padding: 0 }}
            >
              <Sidebar />
            </Col>
            <Col
              sm="12"
              md="8"
              lg="9"
              xxl="10"
            >
              <h1 className="text-center mb-4">Поиск загруженных фильмов</h1>

              <Row className="justify-content-center mb-4">
                <Col md={8}>
                  <InputGroup>
                    <Form.Control
                      type="text"
                      placeholder="Введите название фильма..."
                      value={searchTerm}
                      onChange={handleSearchChange}
                      aria-label="Поиск фильмов"
                      size="lg"
                    />
                    <Button variant="primary">Поиск</Button>
                  </InputGroup>
                </Col>
              </Row>

              <Row>
                {filteredMovies.length > 0 ?  (
                  filteredMovies.map((movie) => (
                    <Col
                      md={4}
                      key={movie.id}
                      className="mb-3"
                    >
                      <Card>
                        <Card.Body>
                          <Card.Title>{movie.title}</Card.Title>
                          <Card.Text>
                            <strong>Год:</strong> {movie.release_date}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))
                ) : (
                  <Col className="text-center">
                    <p>Фильмы не найдены</p>
                  </Col>
                )}
              </Row>

              {data.map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                />
              ))}
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}

