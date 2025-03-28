import React from 'react'
import PropTypes from 'prop-types'

function MovieItem(props) {

  return (
    <div>
   
   <p>{props.title}</p> 
   <p>{props.data}</p> 
   </div>
  )
}

MovieItem.propTypes = {}

export default MovieItem
