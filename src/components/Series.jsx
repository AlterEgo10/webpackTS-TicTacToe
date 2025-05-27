import React, { useEffect, useState, useContext } from 'react';
import { ThemeContext } from '../helpers/ThemeContext';
import axios, { AxiosError } from 'axios';
import Menu from './Menu';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSeries } from '../reducers/movieSeriesSlice';
//import { useLoaderData } from 'react-router-dom';
//import './styles.css';
let API_KEY = process.env.API_KEY;

export default function Series() {
  const { language, theme } = useContext(ThemeContext);
  const [appDataSeries, setAppDataSeries] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.moviesSeries);

  useEffect(() => {
    dispatch(fetchSeries());
  }, [dispatch]);

  if (loading) {
    return <div>Идёт загрузка данных...</div>;
  }

  if (error) {
    return <div>Ошибка получения данных: {error}</div>;
  }

  // useEffect(() => {
  //   const fetchSeries = async () => {
  //     try {
  //       setLoading(true);
  //       const response = await axios.get(
  //         `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=${language}&page=1`
  //       );
  //       setAppDataSeries(response.data.results);
  //     } catch (err) {
  //       setError(err.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchSeries();
  // }, [language]);

  // if (loading) return <div>Loading movies....</div>;
  // if (error) return <div>Error: {error}</div>;

  return (
    <>
      <Menu />
      <div>
        <h2>{language === 'en-US' ? 'Series' : 'Сериалы'}</h2>
      </div>
      <div>
        {data.map((item) => {
          return (
            <div key={item.id}>
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
