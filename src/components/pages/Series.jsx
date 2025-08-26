/* eslint-disable no-redeclare */
import React, { useEffect, useState, useContext } from 'react';
import { ThemeContext } from '../../helpers/ThemeContext';
//import axios, { AxiosError } from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSeries } from '../../reducers/movieSeriesSlice';
import Sidebar from '../Sidebar';
import {
  Container,
  Card,
  Row,
  Col,
  Form,
  InputGroup,
  Button,
} from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import { useTranslation } from 'react-i18next'; 

export default function Series() {
   const { t } = useTranslation();
  const { language, theme } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.moviesSeries);
//search
  const [filteredSeries, setFilteredSeries] = useState([]); // Отфильтрованные сериалы
  const [searchTerm, setSearchTerm] = useState(''); // Текущий поисковый запрос
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(''); // Дебаунсированный запрос

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 2000); // 2 секунды задержки
    // Очистка таймера при изменении searchTerm
    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  useEffect(() => {
    if (debouncedSearchTerm) {
      const filtered = data.filter((series) =>
        series.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
      );
      setFilteredSeries(filtered);
    } else {
      setFilteredSeries(data);
    }
  }, [debouncedSearchTerm, data]);
  

  //end search
  
  useEffect(() => {
    dispatch(fetchSeries());
  }, [dispatch]);

  if (loading) {
    return (
      <Spinner
        animation="border"
        role="status"
      >
        <div>Идёт загрузка данных...</div>;
      </Spinner>
    );
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
              {/* search */}
              <Card className="mb-3">
                <Card.Body>
                  <InputGroup className="mb-3">
                    <Form.Control
                      onSubmit={filteredSeries}
                      type="text"
                      placeholder={t('series.searchSeries')}
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      aria-label="Поиск сериалов"
                    />
                    <Button
                      type="submit"
                      variant="primary"
                    >
                      {t('series.search')}
                    </Button>
                  </InputGroup>
                </Card.Body>
              </Card>

              <Row>
                {filteredSeries.length > 0 ? (
                  filteredSeries.map((series) => (
                    <Col
                      md={4}
                      key={series.id}
                      className="mb-3"
                    >
                      <Card>
                        <Card.Body>
                          <Card.Title>{series.original_name}</Card.Title>
                          <Card.Text>
                            <strong>Год:</strong> {series.first_air_date}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))
                ) : (
                  <Col className="text-center">
                    <p>Сериалы не найдены</p>
                  </Col>
                )}
              </Row>
              {/* end search */}
              {/* {data.map((item) => {
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
              })} */}
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}
