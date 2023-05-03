import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs';
import ProductItem from '../components/productItem/ProductItem';
import { ProductsType, ProductType } from '../types/products';

interface FavoritePageProps {
  fav: ProductsType;
  addCart: (item: ProductType) => void;
  toggleFav: (item: ProductType) => void;
}

const FavoritePage = ({ fav, addCart, toggleFav }: FavoritePageProps) => {
  if (fav.length > 0) {
    return (
      <main>
        <Breadcrumbs />
        <div className="container">
          <h1 className="title">Избранные</h1>
          <div className="fav__list">
            {fav.map((item) => {
              return (
                <ProductItem
                  key={item.id}
                  item={item}
                  addCart={addCart}
                  toggleFav={toggleFav}
                  fav={fav}
                />
              );
            })}
          </div>
        </div>
      </main>
    );
  } else {
    return (
      <main>
        <div className="container">
          <div className="fav__empty">
            <h1 className="title">В избранном пока ничего нет</h1>
            <Link className="fav__empty-link" to="/">
              Перейти к товарам
            </Link>
          </div>
        </div>
      </main>
    );
  }
};

export default FavoritePage;
