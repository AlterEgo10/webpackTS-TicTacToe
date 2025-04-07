import React from 'react'
import PropTypes from 'prop-types'
import MovieItem from './MovieItem' 
//import movieData from '../helpers/movieData';
function MovieContainer({ items = [] }) {

  const [movies, setMovies] = useState([])

  // useEffect(() => {
  //   const fetchMovies = async() => {
  //     const { data } = await movieData.get("tv/popular")
  //     setMovies(data.results)
  //   }
  //   fetchMovies
  // },[])

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
