// !Utilizamos la libreria react query
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import styles from './MovieDetails.module.css';
// import { useEffect, useState } from 'react';
import { get } from '../utils/httpClient';
import { Spinner } from '../components/Spinner';
import { getMovieImg } from '../utils/getMovieImg';

export const MovieDetails = () => {
  const { movieId } = useParams();
  // clave / valor guardada en la cache con useQuery
  // con useQuery nos traemos los datos de la api y los guardamos en
  // la variable condestructurin y a la data le ponemos un alias para
  // que siga funcionando
  const { data: movie, isLoading } = useQuery(['movieDetails', movieId], () =>
    get('/movie/' + movieId)
  );
  // * pequeña parte del codigo anterior a react query
  // const [isLoading, setIsLoading] = useState(true);
  // const [movie, setMovie] = useState(null);

  // useEffect(() => {
  //   setIsLoading(true);
  //   get('/movie/' + movieId).then((data) => {
  //     setIsLoading(false);
  //     setMovie(data);
  //   });
  // }, [movieId]);
  // *

  if (isLoading) {
    return <Spinner />;
  }

  if (!movie) {
    return null;
  }

  const imageurl = getMovieImg(movie.poster_path, 500);
  return (
    <div className={styles.detailsContainer}>
      <img
        className={`${styles.col} ${styles.movieImage}`}
        src={imageurl}
        alt={movie.title}
      />
      <div className={`${styles.col} ${styles.movieDetails}`}>
        <p className={styles.firstItem}>
          {' '}
          <strong>Title: </strong>
          {movie.title}
        </p>

        <p>
          {' '}
          <strong>Genres: </strong>{' '}
          {movie.genres.map((genre) => genre.name).join(', ')}
        </p>
        <p>
          <strong>Release date: </strong>
          {movie.release_date}
        </p>
        <p>
          {' '}
          <strong>Description: </strong>
          {movie.overview}
        </p>
      </div>
    </div>
  );
};
