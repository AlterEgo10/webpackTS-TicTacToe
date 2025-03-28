import React from 'react';
import imageLogo from '../img/record.svg';
import InfoItem from './infoItem';
import Button from './Button';
import movies from '../helpers/movieData';

import MovieContainer from './MovieContainer';
import MovieItem from './MovieItem';

export default function App(){

  return (
<div className="container">

<MovieContainer items={movies}/>

{/* <div>{moviComponents}</div> */}
  <img
  className="main-img"
  src={imageLogo}
  alt=""
   />

<InfoItem
  title="Имя пользователя"
  classTitle="user-name"
/>
<InfoItem
  title="Сумма"
  classTitle="user-amount"
/>
<InfoItem
  title="E-mail"
  classTitle="user-email"
/>

 <Button >
  movie

 </Button>
</div>

  );
}