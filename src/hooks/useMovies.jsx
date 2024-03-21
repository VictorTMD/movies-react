import { useInfiniteQuery } from 'react-query';
import { get } from '../utils/httpClient';

export function useMovies(search) {
  //  en data tendremos toas las paginas q nos va
  // a retornar el servidor
  // el hasnextpage sera true si la funcion getnex es true
  const result = useInfiniteQuery(
    ['movies', search],
    ({ pageParam = 1 }) => {
      const searchUrl = search
        ? '/search/movie?query=' + search + '&page=' + pageParam
        : '/discover/movie?page=' + pageParam;
      return get(searchUrl);
    },
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.page === lastPage.total_pages) return false;
        return lastPage.page + 1;
      },
    }
  );
  const movies =
    result.data?.pages.reduce(
      (prevMovies, page) => prevMovies.concat(page.results),
      []
    ) ?? [];
  return { ...result, movies };
}
