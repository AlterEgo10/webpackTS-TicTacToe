import { useEffect,useState } from 'react'
import { movies, series } from '../helpers/movieData';
//import axios from "axios"
export default function TabsNew() {

const [toggleState, setToggleState]= useState(1)

  const toggleTab = (index) => {
    setToggleState(index);
  }
  //  const moviesArray = movies.map((item) => {
    
  //      console.log(item.title);
  //    return item.title;
  //  });
  //const [movies, setMovies] = useState([])

  // useEffect(() => {
  //   const fetchMovies = async() => {
  //     const { data } = await movieData.get("tv/popular")
  //     setMovies(data.results)
  //   }
  //   fetchMovies()
  // },[])
  //console.log(setMovies)
  return (
    <div className="container">
      <div className="bloc-tabs">
        <div
          className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'}
          onClick={() => toggleTab(1)}
        >
          <h2>Фильмы</h2>
        </div>
        <div
          className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'}
          onClick={() => toggleTab(2)}
        >
          <h2>Сериалы</h2>
        </div>
      </div>
      <div className="content-tabs">
        <div
          className={toggleState === 1 ? 'content active-content' : 'content'}
       >
          {movies.map((movie, index) => {
            return (
              <div className='item-movie'>
                <p>{movie.title}</p>
                <p>{movie.data}</p>
              </div>
            );
          })} 
        </div>
        <div
          className={toggleState === 2 ? 'content active-content' : 'content'}
        >
          {series.map((item, index) => {
            return (
              <div className="item-movie">
                <p>{item.title}</p>
                <p>{item.data}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
