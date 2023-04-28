import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <main>
      <div className="container">
        <div className="not-found">
          <h1 className="title">Страница не найдена</h1>
          <Link className="not-found__link" to="/">
            Перейти к товарам
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
