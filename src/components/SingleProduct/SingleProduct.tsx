import Button from '../button/Button';
import { ProductsType, ProductType } from '../../types/products';
import { ReactComponent as FavedIcon } from '../../assets/icons/favorited.svg';
import { ReactComponent as FavIcon } from '../../assets/icons/favorite.svg';
import './style.scss';

interface SingleProductProps {
  productData: ProductType | null;
  setProductData: any;
  addCart: (item: ProductType) => void;
  toggleFav: (item: ProductType) => void;
  fav: ProductsType;
}

const SingleProduct = ({
  productData,
  setProductData,
  addCart,
  fav,
  toggleFav,
}: SingleProductProps) => {
  const incrProduct = () => {
    if (productData) {
      setProductData({ ...productData, quantity: productData.quantity + 1 });
    }
  };

  const decrProduct = () => {
    if (productData && productData.quantity > 1) {
      setProductData({ ...productData, quantity: productData.quantity - 1 });
    }
  };

  if (productData) {
    return (
      <>
        <div className="product__wrapper">
          <div className="product__img">
            <img src={productData.images[0]} alt="" />
          </div>
          <div className="product__content">
            <h1 className="product__content-title">{productData.title}</h1>
            <p className="product__content-descr">{productData.description}</p>
            <span className="product__content-price">
              {productData.price} $
            </span>
            <div className="product__content-inner">
              <div className="product__content-quantity">
                <button
                  className="product__content-decrement"
                  onClick={() => decrProduct()}
                >
                  -
                </button>
                <span className="product__content-count">
                  {productData.quantity}
                </span>
                <button
                  className="product__content-increment"
                  onClick={() => incrProduct()}
                >
                  +
                </button>
              </div>
              <Button
                className="fill product__content-cart"
                text="В корзину"
                onClick={() => addCart(productData)}
              />
              <div
                className="product__content-fav"
                onClick={() => toggleFav(productData)}
              >
                {fav.filter((el) => el.id === productData.id).length ? (
                  <FavedIcon />
                ) : (
                  <FavIcon />
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <></>;
  }
};

export default SingleProduct;
