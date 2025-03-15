import React from 'react';
import imageLogo from '../img/record.svg';
import InfoItem from './infoItem';
import Button from './Button';
// import MovieData from '../helpers/MovieData';
//import { randomMovie } from 'Helpers/movieData';
import ranM from 'Helpers/movieData';
//import apiGet from '../helpers/MovieData';



// m.onClick =()=> ranM;
export default function App(){
  //   const getButton = () => {
  //   return <button onClick={()=>ranM()}>movi</button>;
  //   apiGet;
  // };
  return (
<div className="container">
   {/* {ranM.map((number) =>  
    <ul key={number.id} className="movi">
       <li>{number.data}</li> 
       <li>{number.title}</li> 
   </ul>
   )} */}

{ranM}

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