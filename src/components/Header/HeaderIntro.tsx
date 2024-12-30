import { Link } from 'react-router-dom';
import './HeaderIntro.css';

export default function HeaderIntro() {
  return (
    <div className="header-intro">
      <ul>
        <Link to="/intro">
          <li>
            <img src="./cralogo.png" width="109" />
          </li>
        </Link>
        <Link to="/main">
          <li>main()</li>
        </Link>
      </ul>
    </div>
  );
}
