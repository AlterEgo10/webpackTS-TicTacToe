/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import styled from 'styled-components';
import useInput from '../../hooks/useInput';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from '../Sidebar';
import Form from 'react-bootstrap/Form'
import {Form as RouterForm} from 'react-router-dom'
import { Alert } from 'react-bootstrap';
import MovieSearch from '../MovieSearch'
import Settings from '../Settings';
import { useTranslation } from 'react-i18next'; 

const FormWrapper = styled.form`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 24px;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

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
  const { t } = useTranslation();
  
  const title = useInput('', '', true)
  //const search = useInput('', '', true);
  const [description, setDescription] = useState('');
  const [grade, setGrade] = useState('');

  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`Имя: ${title.value}\nОписание: ${description}\nОценка: ${grade}`);
    //setTitle('');
    // title.name
    setDescription('');
    setGrade('');
  }; 

    
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
              <Sidebar isActive={false} />
            </Col>
            <Col
              sm="12"
              md="8"
              lg="9"
              xl="10"
              style={{ padding: 0 }}
            >
              {/* <h1 className="text-center mb-3">Оценочная форма</h1> */}{' '}
              <h1 className="text-center mb-3"> {t('form.title')}</h1>{' '}
              <FormWrapper
                as={RouterForm}
                onSubmit={handleSubmit}
              >
                <Form.Group className="mb-3">
                  <Form.Label> {t('form.name')}</Form.Label>
                  <Form.Control {...title} />
                  {title.error && <Alert variant="danger">{title.error}</Alert>}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>{t('form.description')}</Form.Label>
                  <Form.Control
                    as="textarea"
                    id="description"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={5}
                    disabled={!title.value}
                    placeholder={t('form.placeholder')}
                  />
                  <Form.Text className="text-muted">{t('form.text')}</Form.Text>
                </Form.Group>

                <Form.Group>
                  <Form.Label>{t('form.grade')}</Form.Label>
                  <Form.Select
                    id="grade"
                    name="grade"
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    required
                    disabled={!title.value}
                  >
                    <option value="">{t('form.select')}...</option>
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
                  // variant="primary"
                >
                  {t('form.rate')}
                </Button>
              </FormWrapper>
              <MovieSearch />
              {title.value && <Output>Ваше имя: {title.value}</Output>}
              {description && <Output>Описание: {description}</Output>}
              {grade && <Output>Оценка: {grade}</Output>}
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}


