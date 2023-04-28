import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Home from './pages/Home-page';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import ProductPage from './pages/Product-page';
import CartPage from './pages/Cart-page';
import FavoritePage from './pages/Favorite-page';
import NotFound from './pages/NotFound';
import { ProductsType, ProductType } from './types/products';
import './styles/style.scss';

function App() {
  const cartData = localStorage.getItem('cartData');
  const favData = localStorage.getItem('favData');
  const [products, setProducts] = useState<ProductsType>([]);
  const [cart, setCart] = useState<ProductsType>(
    cartData ? JSON.parse(cartData) : []
  );
  const [fav, setFav] = useState<ProductsType>(
    favData ? JSON.parse(favData) : []
  );

  const toggleFav = (item: ProductType) => {
    const itemIndex = fav.findIndex((el) => el.id === item.id);
    if (itemIndex < 0) {
      setFav([...fav, item]);
    } else {
      const newFav = fav.filter((el) => el.id !== item.id);
      setFav(newFav);
    }
  };

  const addCart = (item: ProductType) => {
    const itemIndex = cart.findIndex((el) => el.id === item.id);

    if (itemIndex < 0) {
      const newProduct = {
        ...item,
        quantity: 1,
      };
      setCart([...cart, newProduct]);
    } else {
      const newItem = cart.map((el, i) => {
        if (i === itemIndex) {
          return {
            ...el,
            quantity: el.quantity + 1,
          };
        } else {
          return el;
        }
      });

      setCart(newItem);
    }
  };

  const addCartProduct = (item: ProductType) => {
    const itemIndex = cart.findIndex((el) => el.id === item.id);

    if (itemIndex < 0) {
      setCart([...cart, item]);
    } else {
      const newItem = cart.map((el, i) => {
        if (i === itemIndex) {
          return {
            ...el,
            quantity: el.quantity + item.quantity,
          };
        } else {
          return el;
        }
      });

      setCart(newItem);
    }
  };

  const removeCart = (itemId: number) => {
    const newCart = cart.filter((el) => el.id !== itemId);
    localStorage.setItem('cartData', JSON.stringify(newCart));
    setCart(newCart);
  };

  const incrCart = (itemId: number) => {
    const newCart = cart.map((el) => {
      if (el.id === itemId) {
        return {
          ...el,
          quantity: el.quantity + 1,
        };
      } else {
        return el;
      }
    });
    localStorage.setItem('cartData', JSON.stringify(newCart));
    setCart(newCart);
  };

  const decrCart = (itemId: number) => {
    const newCart = cart.map((el) => {
      if (el.id === itemId && el.quantity > 1) {
        return {
          ...el,
          quantity: el.quantity - 1,
        };
      } else {
        return el;
      }
    });
    localStorage.setItem('cartData', JSON.stringify(newCart));
    setCart(newCart);
  };

  useEffect(() => {
    localStorage.setItem('cartData', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('favData', JSON.stringify(fav));
  }, [fav]);

  useEffect(() => {
    const fetchData = async (url: string) => {
      const response = await axios.get(url);
      const data = response.data.map((el: any) => {
        return {
          ...el,
          favorite: false,
        };
      });
      setProducts(data);
    };

    fetchData(`https://api.escuelajs.co/api/v1/products/?offset=0&limit=120`);
  }, []);

  return (
    <BrowserRouter>
      <Header cartQuantity={cart.length} favQuantity={fav.length} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              products={products}
              addCart={addCart}
              toggleFav={toggleFav}
              fav={fav}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <CartPage
              removeCart={removeCart}
              incrCart={incrCart}
              decrCart={decrCart}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <FavoritePage fav={fav} addCart={addCart} toggleFav={toggleFav} />
          }
        />
        <Route
          path="/products/:id"
          element={
            <ProductPage
              addCart={addCartProduct}
              fav={fav}
              toggleFav={toggleFav}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
