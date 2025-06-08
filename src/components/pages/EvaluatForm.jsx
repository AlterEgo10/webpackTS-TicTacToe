import React, { useState } from 'react';
import styled from 'styled-components';
import useInput from '../../hooks/useInput';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from '../Sidebar';

const FormWrapper = styled.form`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 24px;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 8px;
`;

const Input = styled.input`
  padding: 8px 12px;
  font-size: 1rem;
  border-radius: 6px;
  border: 1px solid #ccc;
`;

const Textarea = styled.textarea`
  padding: 8px 12px;
  font-size: 1rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  resize: vertical;
`;

const Select = styled.select`
  padding: 8px 12px;
  font-size: 1rem;
  border-radius: 6px;
  border: 1px solid #ccc;
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
  // const [title, setTitle] = useState('');
  const title = useInput('','',true)
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
              <FormWrapper onSubmit={handleSubmit}>
                <FieldWrapper>
                  <h2>Оценочная форма</h2>
                  <Label htmlFor="title">Ваше имя</Label>
                  <Input {...title} />
                  {title.error && (
                    <span style={{ color: 'red' }}>{title.error}</span>
                  )}
                </FieldWrapper>

                <FieldWrapper>
                  <Label htmlFor="description">Описание</Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={5}
                    disabled={!title.value}
                    placeholder="Опишите впечатления..."
                  />
                </FieldWrapper>

                <FieldWrapper>
                  <Label htmlFor="grade">Оценка</Label>
                  <Select
                    id="grade"
                    name="grade"
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    required
                  >
                    <option value="">Выберите...</option>
                    <option value="5">5</option>
                    <option value="4">4</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                    <option value="1">1</option>
                  </Select>
                </FieldWrapper>

                <Button
                  type="submit"
                  disabled={!title.value || !grade}
                >
                  Оценить
                </Button>
              </FormWrapper>

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
