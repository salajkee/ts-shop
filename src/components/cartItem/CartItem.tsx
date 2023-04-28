import { ProductType } from '../../types/products';
import './style.scss';

interface CartItemProps {
  data: ProductType;
  removeCart: (itemId: number) => void;
  incrCart: (itemId: number) => void;
  decrCart: (itemId: number) => void;
}

const CartItem = ({ data, removeCart, incrCart, decrCart }: CartItemProps) => {
  return (
    <li className="cart__item">
      <div className="cart__item-img">
        <img src={data.images[0]} alt="" />
      </div>
      <div>
        <p className="cart__item-title">{data.title}</p>
        <div className="cart__item-price">
          <span>{data.price} $</span> за шт.
        </div>
      </div>
      <div className="cart__item-quantity">
        <button
          className="cart__item-decrement"
          onClick={() => decrCart(data.id)}
        >
          -
        </button>
        <span className="cart__item-count">{data.quantity}</span>
        <button
          className="cart__item-increment"
          onClick={() => incrCart(data.id)}
        >
          +
        </button>
      </div>
      <div className="cart__item-inner">
        <span className="cart__item-amount">
          {data.price * data.quantity} $
        </span>
        <span className="cart__item-delete" onClick={() => removeCart(data.id)}>
          Удалить
        </span>
      </div>
    </li>
  );
};

export default CartItem;
