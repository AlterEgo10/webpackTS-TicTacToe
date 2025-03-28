import React from 'react'
import PropTypes from 'prop-types'
import MovieItem from './MovieItem' 

function MovieContainer({ items = [] }) {
const array = items.map((item, index)=>(
  <MovieItem
   title={item.title}
   data={item.data}
   key={index}
   />
))

// for(const item of items){
//   console.log(item)
//   array.push(<MovieItem
//   title={item.title}
//   />)
// }
  return (
     <div>{array}</div> 
  )
}

MovieContainer.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id:PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      data:PropTypes.number.isRequired,
    })
  ),
}

export default MovieContainer
