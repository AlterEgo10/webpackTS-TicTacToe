import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Ul=styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  font-size: 28px;
`
const A = styled(Link)`
  color:brown;
`

export default function Menu() {
  return (
    <Ul>
      <li>
        <A to="/">Главная</A>
      </li>
      <li>
        <A to="/films">Фильмы</A>
      </li>
      <li>
        <A to="/series">Сериалы</A>
      </li>
    </Ul>
    // <ul>
    //   <li>
    //     <a href="#/">Главная</a>
    //   </li>
    //   <li>
    //     <a href="#/films">Фильмы</a>
    //   </li>
    //   <li>
    //     <a href="#/series">Сериалы</a>
    //   </li>
    // </ul>
  );
}


