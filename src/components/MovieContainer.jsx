import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Menu from './Menu';
import { ThemeContext } from '../helpers/ThemeContext';

const API_KEY = process.env.API_KEY;

export default function MovieContainer() {
  const { language } = useContext(ThemeContext);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=${language}&page=1`
        );
        setMovies(response.data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [language]);

  if (loading) return <div>Loading movies...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <Menu />
      <div>
        <h2>{language === 'en-US' ? 'Movies' : 'Фильмы'}</h2>
      </div>
      <div className="movies-list">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="movie-card"
          >
            <h3>{movie.title}</h3>
            <p>{new Date(movie.release_date).getFullYear()}</p>
            <p>{movie.overview}</p>
          </div>
        ))}
      </div>
    </>
  );
}
