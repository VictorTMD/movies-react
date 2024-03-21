import { MovieCard } from './MovieCard';
import styles from './MovieGrid.module.css';
// import { useEffect, useState } from 'react';
import { Spinner } from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Empty } from './Empty';
import { useMovies } from '../hooks/useMovies';

export const MoviesGrid = ({ search }) => {
  //  en data tendremos toas las paginas q nos va
  // a retornar el servidor
  // el hasnextpage sera true si la funcion getnex es true
  const { movies, isLoading, hasNextPage, fetchNextPage } = useMovies(search);

  // const [movies, setMovies] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [page, setPage] = useState(1);
  // const [hasMore, setHasMore] = useState(true);

  // useEffect(() => {
  //   setIsLoading(true);
  //   const searchUrl = search
  //     ? '/search/movie?query=' + search + '&page=' + page
  //     : '/discover/movie?page=' + page;
  //   get(searchUrl).then((data) => {
  //     setMovies((prevMovies) => prevMovies.concat(data.results));
  //     setHasMore(data.page < data.total_pages);
  //     setIsLoading(false);
  //   });
  // }, [search, page]);

  if (!isLoading && movies.length === 0) {
    return <Empty />;
  }

  return (
    <InfiniteScroll
      dataLength={movies.length}
      hasMore={hasNextPage || isLoading}
      // cuando vayamos ha cambiar un estado a partir de otro siempre
      // utilizamos una funcion
      next={() => fetchNextPage()}
      loader={<Spinner />}
    >
      <ul className={styles.moviesGrid}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </InfiniteScroll>
  );
};
