import React from 'react';
//import movieData from 'Helpers/movieData';

//const res = movies.map(item => <li>{item.title}</li>);
export default function infoItem(properties) {
//   async function movieData () {
//   const  url = "https://jsonplaceholder.typicode.com/users";
//   const response = await fetch(url);
//   const users = await response.json();
//    console.log(users[0].id);
//  }

  return(
    <>
    <div className='header'>{properties.title}</div>
    <div className={'user-info ' + properties.classTitle}></div>
    </>
  );
}