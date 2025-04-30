import { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = process.env.API_KEY;

function OneBestMovie() {
  const [oneMovie, setBestMovie] = useState(null);

  useEffect(() => {
    // Функция для получения фильма
    const fetchMovie = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
        );
        const results = response.data.results;
        if (results.length > 0) {
          // Выбираем случайный фильм из списка
          const randomMovie =
            results[Math.floor(Math.random() * results.length)];
          setBestMovie(randomMovie);
        }
      } catch (error) {
        console.error('Не удалось получить фильм:', error);
      }
    };

    fetchMovie(); // Первая загрузка данных сразу при монтировании

    // Устанавливаем интервал для обновления фильма каждые 3 секунды
    const intervalId = setInterval(fetchMovie, 3000);

    // Очищаем интервал при размонтировании компонента
    return () => clearInterval(intervalId);
  }, []);

  // Пока фильм не загружен, показываем "Loading..."
  if (!oneMovie) {
    return <p>Загрузка...</p>;
  }

  return (
    <div>
      <p>
        <strong>{oneMovie.title}</strong>
      </p>
      <p>Дата выхода: {oneMovie.release_date}</p>
      <p>{oneMovie.overview}</p>
    </div>
  );
}

export default OneBestMovie;
