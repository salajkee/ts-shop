import { Link } from 'react-router-dom';
import './style.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <Link className="footer__link" to="/">
          Политика обработки персональных данных
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
