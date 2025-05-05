import { useEffect, useState, useContext } from 'react';
//import { ThemeContext } from '../helpers/ThemeContext';
import axios from 'axios';
import Menu from './Menu';
//import { useLoaderData } from 'react-router-dom';
//import './styles.css';
let API_KEY = process.env.API_KEY;

 export const series = [
   {
     id: 1,
     title: 'Friends',
     data: '1994–2004',
   },
   {
     id: 2,
     title: 'Game of Thrones',
     data: '2011–2019',
   },
   {
     id: 3,
     title: 'The Big Bang Theory',
     data: '2007–2019',
   },
 ];

export default function Series() {
  //  const [theme, setTheme, changeTheme, changeThemeNext, language] =
  //     useContext(ThemeContext);
const [appDataSeries, setAppDataSeries] = useState(series);
//const data = useLoaderData()
  useEffect(() => {
    axios
      .get(
       // `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&Language=${language}&page=1`
        `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=ru&page=1`
      )
      .then((result) => {
        series[0].value = result.data.name;
        series[1].value = result.data.name;
        series[2].value = result.data.name;
        setAppDataSeries(result.data.results);
      });
  }, []);
  //}, [language]);

  return (
    <>
    <Menu/>
      <div>
        <h2>Сериалы</h2>
      </div>
      <div>
        {/* {data.map((item, index) => { */}
          {appDataSeries.map((item, index) => {
          return (
            <div
              // className={
              //   theme === 'light'
              //     ? 'container item-movie'
              //     : 'theme-dark item-movie'
              // }
              key={item.id}
            >
              <p>{item.original_name}</p>
              <p>{item.release_date}</p>
              <p>{item.overview}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

// export const seriesLoader = async () => {
//   const result = await axios.get(
//         //`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=${language}&page=1`
//         `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=ru&page=1`
//   )
//   console.log(result.data);
//   return result
// }
