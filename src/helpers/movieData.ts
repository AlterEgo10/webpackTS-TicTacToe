//import { number } from 'prop-types';
// import React from 'react';
// import axios from "axios";

//  export interface MoviesSeriesProp {
//   id?: number
//   title?: string
//    data?: string;
//    overview?: string
//    release_date?:string
// }

export const movies = [
  {
    id: 1,
    overview: 'Iron Man',
    release_date: '2008',
  },
  {
    id: 2,
    overview: 'Shrek Forever After',
    release_date: '2010',
  },
  {
    id: 3,
    overview: 'The Lord of the Rings',
    release_date: '2010',
  },
];

 export const series =[
  {
    id: 1,
    overview: 'Friends',
    release_date: '1994–2004',
  },
  {
    id: 2,
    overview: 'Game of Thrones',
    release_date:  '2011–2019',
  },
  {
    id: 3,
    overview: 'The Big Bang Theory',
    release_date: '2007–2019',
  },
];
//  export default movies;



// export axios.create({
//   baseURL: 'https:api.themoviedb.org/3',
//   headers: {
//     Accept:"application/json"
//   },
//   params:{
//     api_key:'bc7224a73dc886d22ae4f7c60de75a13'
//   }
// })