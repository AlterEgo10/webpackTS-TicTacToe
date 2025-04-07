//import { number } from 'prop-types';
import React from 'react';
import axios from "axios";


export const movies = [
  {
    id: 1,
    title: 'Iron Man',
    data: 2008,
  },
  {
    id: 2,
    title: 'Shrek Forever After',
    data: '2010',
  },
  {
    id: 3,
    title: 'The Lord of the Rings',
    data: 2010,
  },
];

 export const series =[
  {
    id: 1,
    title: 'Friends',
    data: '1994–2004',
  },
  {
    id: 2,
    title: 'Game of Thrones',
    data:  '2011–2019',
  },
  {
    id: 3,
    title: 'The Big Bang Theory',
    data: '2007–2019',
  },
];
// export default movies;



// export default axios.create({
//   baseURL: 'https:api.themoviedb.org/3',
//   headers: {
//     Accept:"application/json"
//   },
//   params:{
//     api_key:'bc7224a73dc886d22ae4f7c60de75a13'
//   }
// })