import { number } from 'prop-types';
import React from 'react';
import axios from 'axios';
//export default function movieData() {
function randomElements(array, count) {
  let result = new Array(count),
      length_ = array.length,
      taken = new Array(length_);
  if (count > length_)
    throw new RangeError("efficientRandomElements: количество запрашиваемых элементов превышает их количество в массиве");
  while (count--) {
    let x = Math.floor(Math.random() * length_);
    result[count] = array[x in taken ? taken[x] : x];
    taken[x] = --length_ in taken ? taken[length_] : length_;
  }
  return result;
}

//export default function movieData() {
 const movies =[
  {
    id:1,
  title: 'Iron Man',
  data:2008,
},
  {
    id:2,
  title: 'Shrek Forever After',
  data:2010,
},
  {
    id:3,
  title: 'The Lord of the Rings',
  data:2010,
}
];
 const randomMovie = randomElements(movies, 1);

//const randomMovie =  
 const ranM = randomMovie.map((number) =>  
     <ul key={number.id}>
       <li>{number.data}</li> 
       <li>{number.title}</li> 
   </ul>
);
export default ranM;
 

// function apiGet(){
//   axios
//  .get("https://jsonplaceholder.typicode.com/users")

  
//    .then(response=>console.log(response)); 
//   };
//   apiGet();

// export default apiGet;
