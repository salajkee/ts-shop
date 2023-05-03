import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs';
import Button from '../components/button/Button';
import CartItem from '../components/cartItem/CartItem';
import { ProductType, ProductsType } from '../types/products';

interface CartPageProps {
  removeCart: (itemId: number) => void;
  incrCart: (itemId: number) => void;
  decrCart: (itemId: number) => void;
}

const CartPage = ({ removeCart, incrCart, decrCart }: CartPageProps) => {
  const cartData = localStorage.getItem('cartData');
  let data: ProductsType = [];

  if (cartData) {
    data = JSON.parse(cartData);
  }

  const amount = data.reduce(
    (total: number, item: ProductType) => total + item.price * item.quantity,
    0
  );

  if (data.length > 0) {
    return (
      <main>
        <Breadcrumbs />
        <div className="container">
          <h1 className="title">Корзина покупок</h1>
          <div className="cart__wrapper">
            <ul className="cart__list">
              {data.map((item: ProductType) => (
                <CartItem
                  key={item.id}
                  data={item}
                  removeCart={removeCart}
                  incrCart={incrCart}
                  decrCart={decrCart}
                />
              ))}
            </ul>
            <div className="cart__total">
              <div className="cart__total-price">
                Итого:
                <span>{amount}$</span>
              </div>
              <Button
                className="fill w-100 cart__total-btn"
                text="Оформить заказ"
              />
            </div>
          </div>
        </div>
      </main>
    );
  } else {
    return (
      <main>
        <div className="container">
          <div className="cart__empty">
            <h1 className="title">Ваша корзина пуста!</h1>
            <Link className="cart__empty-link" to="/">
              Перейти к товарам
            </Link>
          </div>
        </div>
      </main>
    );
  }
};

export default CartPage;
