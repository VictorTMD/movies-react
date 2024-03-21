import styles from './App.module.css';
import { Route, Routes, Link, Navigate } from 'react-router-dom';
import { MovieDetails } from './MovieDetails';
import { LandingPage } from './LandingPage';

export function App() {
  return (
    <div>
      <header>
        <Link to='/'>
          {' '}
          <h1 className={styles.title}>UFO MOVIES</h1>
        </Link>{' '}
      </header>
      <main>
        <Routes>
          <Route path='/movie/:movieId' element={<MovieDetails />} />
          <Route path='/' element={<LandingPage />} />
          {/* replace es para reemplazar la ruta y 
          no quede la anterior */}
          {/* sino encuento la ruta que navege a la home  */}
          <Route path='*' element={<Navigate replace to='/' />} />
        </Routes>
      </main>
    </div>
  );
}
