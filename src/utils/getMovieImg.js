import noimage from '../noimg.jpg';
export function getMovieImg(path, width) {
  return path ? `https://image.tmdb.org/t/p/w300${path}${width}` : noimage;
}
