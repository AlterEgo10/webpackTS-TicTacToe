import react, { useState } from 'react';
import imageLogo from '../img/record.svg';
//import InfoItem from './InfoItem';
// import Button from './Button';
// import movies from '../helpers/movieData';
import Tabs from './Tabs'

// import MovieContainer from './MovieContainer';
// import MovieItem from './MovieItem';




export default function App() {

  return (
    <div className="container">

      {/* <img
        className="main-img"
        src={imageLogo}
        alt=""
      /> */}

      {/* <InfoItem
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
/> */}
<Tabs/>
      {/* <Button>movie</Button> */}
    </div>
  );
}