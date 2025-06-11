import React, { useEffect, useState, useContext } from 'react';
import { ThemeContext } from '../../helpers/ThemeContext';
import axios, { AxiosError } from 'axios';
import {Card,CardGroup,ListGroup} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { fetchSeries } from '../../reducers/movieSeriesSlice';
import Sidebar from '../Sidebar';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
//import { useLoaderData } from 'react-router-dom';
//import './styles.css';
let API_KEY = process.env.API_KEY;

export default function Series() {
  const { language, theme } = useContext(ThemeContext);
  //const [appDataSeries, setAppDataSeries] = useState([]);

  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.moviesSeries);

  useEffect(() => {
    dispatch(fetchSeries());
  }, [dispatch]);

  if (loading) {
    return(
    <Spinner animation="border"
    role="status">
      <div>Идёт загрузка данных...</div>;
    </Spinner>
    )
  }

  if (error) {
    return <div>Ошибка получения данных: {error}</div>;
  }

  return (
    <>
      <div>
        <h2>{language === 'en-US' ? 'Series' : 'Сериалы'}</h2>
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
              {data.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="p-3"
                  >
                    <Card>
                      <Card.Body>
                        <Card.Title>{item.original_name}</Card.Title>
                        <ListGroup>
                          <ListGroup.Item>{item.overview}</ListGroup.Item>
                          <ListGroup.Item>{item.first_air_date}</ListGroup.Item>
                        </ListGroup>
                      </Card.Body>
                    </Card>
                  </div>
                );
              })}
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}
