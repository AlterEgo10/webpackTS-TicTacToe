import React, { useState, useEffect, useContext } from 'react';
//import axios from 'axios';
import Menu from '../Menu';
import { ThemeContext } from '../../helpers/ThemeContext';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../../reducers/movieSeriesSlice';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from '../Sidebar';
import Spinner from 'react-bootstrap/Spinner';
import { Card, CardGroup, ListGroup } from 'react-bootstrap';
//const API_KEY = process.env.API_KEY;

export default function MovieContainer() {
  const { language } = useContext(ThemeContext);

    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.moviesSeries);
    
  useEffect(() => {
      
      dispatch(fetchMovies());
    }, [dispatch])
    
  
    if (loading) {
      return (
        <div className='d-flex justify-content-center align-items-center'>
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
              {data.map((movie) => (
                <div
                  key={movie.id}
                  className="movie-card"
                >
                  <Card>
                    <Card.Body>
                      <Card.Title>{movie.title}</Card.Title>
                      <ListGroup>
                        <ListGroup.Item>{movie.overview}</ListGroup.Item>
                        <ListGroup.Item>{movie.release_date}</ListGroup.Item>
                      </ListGroup>
                    </Card.Body>
                  </Card>
                  {/* <h3>{movie.title}</h3>
                  <p>{new Date(movie.release_date).getFullYear()}</p>
                  <p>{movie.overview}</p> */}
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}
