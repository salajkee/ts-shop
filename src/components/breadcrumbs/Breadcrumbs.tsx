import { Link, useLocation } from 'react-router-dom';
import './style.scss';

function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  const num = pathnames.length - 1;

  return (
    <div className="breadcrumbs">
      <div className="container">
        <ul className="breadcrumbs__list">
          <li className="breadcrumbs__link">
            <Link to="/">Главная</Link>
          </li>
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;

            return num !== index ? (
              <li className="breadcrumbs__link" key={routeTo}>
                <Link to={routeTo}>{name}</Link>
              </li>
            ) : (
              <li className="breadcrumbs__link" key={routeTo}>
                <span>{name}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Breadcrumbs;
