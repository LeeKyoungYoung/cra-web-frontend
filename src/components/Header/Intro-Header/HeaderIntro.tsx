import { Link } from 'react-router-dom';
import styles from './HeaderIntro.module.css';

export default function HeaderIntro() {
  return (
    <div className={styles['header-intro']}>
      <ul className={styles['ul-intro']}>
        <Link to="/intro">
          <li className={`${styles['li-intro']} ${styles['li-img']}`}>
            <img src="./cralogo.png" className={styles['logo']} />
          </li>
        </Link>
        <Link
          to="/main"
          className={`${styles['li-intro']} ${styles['navbar-link']}`}
        >
          MAIN PAGE
        </Link>
      </ul>
    </div>
  );
}
