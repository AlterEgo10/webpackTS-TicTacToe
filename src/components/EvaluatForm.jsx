import React, { useState } from 'react'
import Menu from './Menu';
import styled from 'styled-components';

const FORM = styled.form`
width: 450px;
`
const DIV = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
margin-top: 15px;
`
const Button = styled.button`
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  width: 100PX;
`

const LABEL = styled.label`
  font-size: 30px;
`;

const Textarea = styled.textarea`
  width: 100%;
`
const P = styled.p`
  font-size: 40px;
`

const SELECT = styled.select`
  width: 70px;
  margin-top: 10px;
`;

export default function EvaluatForm() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('');
  const [grade, setGrade] = useState('');
  return (
    <div>
      <Menu />
      <DIV>
      <FORM
        onSubmit={(event) => {
          event.preventDefault();
          alert(title);
          alert(description);
         alert(grade);
         setTitle('');
          setDescription('');
          setGrade('')
        }}
      >
        <DIV>
          <LABEL htmlFor="title">Ваше имя </LABEL>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
              }}
              placeholder='Введите имя...'
          />
        </DIV>
        <DIV>
          <LABEL htmlFor="description">Описание</LABEL>
          <Textarea
            id="description"
            name="description"
            value={description}
            disabled={title.length === 0}
            rows={5}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
        </DIV>
        <DIV>
          <LABEL htmlFor="grade">Оценка</LABEL>
          <SELECT
            id="grade"
            name="grade"
            value={grade}
            onChange={(event) => {
              setGrade(event.target.value);
            }}
          >
            <option value="5">5</option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
          </SELECT>
        </DIV>
        <Button type="submit">Оценить</Button>
        </FORM>
        </DIV>
      <P>Ваше имя: {title}</P>
      <P>Описание: {description}</P>
      <P>Оценка: {grade}</P>
    </div>
  );
}
