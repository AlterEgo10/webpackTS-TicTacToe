import React, { useState } from 'react';
import styled from 'styled-components';
import useInput from '../../hooks/useInput';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from '../Sidebar';
import Form from 'react-bootstrap/Form'
import {Form as RouterForm} from 'react-router-dom'
import { Alert } from 'react-bootstrap';
import MovieSearch from '../MovieSearch'

const FormWrapper = styled.form`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 24px;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

// const FieldWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 20px;
// `;

// const Label = styled.label`
//   font-size: 1.1rem;
//   font-weight: 600;
//   margin-bottom: 8px;
// `;

// const Input = styled.input`
//   padding: 8px 12px;
//   font-size: 1rem;
//   border-radius: 6px;
//   border: 1px solid #ccc;
// `;

// const Textarea = styled.textarea`
//   padding: 8px 12px;
//   font-size: 1rem;
//   border-radius: 6px;
//   border: 1px solid #ccc;
//   resize: vertical;
// `;

// const Select = styled.select`
//   padding: 8px 12px;
//   font-size: 1rem;
//   border-radius: 6px;
//   border: 1px solid #ccc;
// `;

const Button = styled.button`
  margin-top: 10px;
  padding: 10px 16px;
  font-size: 1rem;
  width: 100%;
  background-color: #0077ff;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background-color: #005ecb;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const Output = styled.p`
  font-size: 1.25rem;
  margin: 10px 0;
`;

export default function EvaluatForm() {
  // const [title, setTitle] = useState('');
  const title = useInput('', '', true)
  //const search = useInput('', '', true);
  const [description, setDescription] = useState('');
  const [grade, setGrade] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Имя: ${title.value}\nОписание: ${description}\nОценка: ${grade}`);
    //setTitle('');
    // title.name
    setDescription('');
    setGrade('');
  }; 

 
    // const [query, setQuery] = useState('');
    // const [movies, setMovies] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(null);
    
    // API ключ лучше хранить в переменных окружения
    
  return (
    <div>
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
              xl="2"
              style={{ padding: 0 }}
            >
              <Sidebar />
            </Col>
            <Col
              sm="12"
              md="8"
              lg="9"
              xl="10"
              style={{ padding: 0 }}
            >
              <h1 className="text-center mb-3">Оценочная форма</h1>
              <FormWrapper
                as={RouterForm}
                onSubmit={handleSubmit}
              >
                <Form.Group className="mb-3">
                  <Form.Label>Ваше имя</Form.Label>
                  <Form.Control {...title} />
                  {title.error && <Alert variant="danger">{title.error}</Alert>}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Описание</Form.Label>
                  <Form.Control
                    as="textarea"
                    id="description"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={5}
                    disabled={!title.value}
                    placeholder="Опишите впечатления..."
                  />
                  {/* <Form.Text className='text-muted'>Описание станет доступно для заполнения после ввода названия</Form.Text> */}
                </Form.Group>

                <Form.Group>
                  <Form.Label>Оценка</Form.Label>
                  <Form.Select
                    id="grade"
                    name="grade"
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    required
                    disabled={!title.value}
                  >
                    <option value="">Выберите...</option>
                    <option value="5">5</option>
                    <option value="4">4</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                    <option value="1">1</option>
                  </Form.Select>
                </Form.Group>

                <Button
                  type="submit"
                  disabled={!title.value || !grade}
                  variant="primary"
                >
                  Оценить
                </Button>
              </FormWrapper>
              <MovieSearch />
              {title.value && <Output>Ваше имя: {title.value}</Output>}
              {description && <Output>Описание: {description}</Output>}
              {grade && <Output>Оценка: {grade}</Output>}
            </Col>
          </Row>
          {/* <MovieSearch /> */}
        </Container>
      </main>
    </div>
  );
}
