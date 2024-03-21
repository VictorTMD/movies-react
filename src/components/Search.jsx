import styles from './Search.module.css';
import { RiAliensLine } from 'react-icons/ri';

import { useSearchParams } from 'react-router-dom';

export const Search = () => {
  const [query, setQuery] = useSearchParams();
  const search = query.get('search');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <div className={styles.box}>
        <input
          className={styles.input}
          type='text'
          value={search ?? ''}
          autoFocus
          placeholder='Buscar'
          aria-label='Search Movies'
          onChange={(e) => {
            const value = e.target.value;
            setQuery({ search: value });
            // navigate('/?search=' + value);
          }}
        />
        <button className={styles.button} type='submit'>
          <RiAliensLine size={30} />
        </button>
      </div>
    </form>
  );
};
