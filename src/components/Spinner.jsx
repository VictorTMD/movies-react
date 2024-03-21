import { TbUfo } from 'react-icons/tb';
import styles from './Spinner.module.css';
export function Spinner() {
  return (
    <div className={styles.spinner}>
      <TbUfo className={styles.spinning} size={60} />
    </div>
  );
}
