import React from 'react'
import PropTypes from 'prop-types'

function MovieItem({ item, tab, setTab }) {

  return (
    <div
      className="tab"
      onClick={() => setTab(item.value)}
    >
      <p>{item.label}</p>
      {/* <p>{props.title}</p> 
   <p>{props.data}</p>  */}
    </div>
  );
}

//MovieItem.propTypes = {}

export default MovieItem
