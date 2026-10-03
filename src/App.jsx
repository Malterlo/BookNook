import NavBar from "./components/nav-bar";
import { useReducer } from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import CartPage from "./pages/CartPage.jsx";
import BookDetailPage from "./pages/BookDetailPage.jsx";
import ShopPage from "./pages/ShopPage.jsx";
import { ThemeProvider } from "./context/themeProvider.jsx";

function cartReducer(cartItems, action) {
  switch (action.type) {
    case "ADD": {
      const existingItem = cartItems.find((item) => item.id === action.book.id);

      if (existingItem) {
        return cartItems.map((item) =>
          item.id === action.book.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...cartItems, { ...action.book, quantity: 1 }];
    }
    case "INCREMENT": {
      return cartItems.map((item) =>
        item.id === action.bookId
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );
    }
    case "DECREMENT": {
      return cartItems
        .map((item) =>
          item.id === action.bookId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0);
    }
    case "SET_QUANTITY": {
      const quantity = Number(action.quantity);

      if (!Number.isInteger(quantity) || quantity < 1) {
        return cartItems;
      }

      return cartItems.map((item) =>
        item.id === action.bookId ? { ...item, quantity } : item,
      );
    }
    default:
      return cartItems;
  }
}

function App() {
  const [cartItems, dispatchCart] = useReducer(cartReducer, []);

  const handleCartAdd = (book) => {
    dispatchCart({ type: "ADD", book });
  };

  const handleCartRemove = (bookId) => {
    dispatchCart({ type: "DECREMENT", bookId });
  };

  const handleCartIncrement = (bookId) => {
    dispatchCart({ type: "INCREMENT", bookId });
  };

  const handleCartQuantityChange = (bookId, quantity) => {
    dispatchCart({ type: "SET_QUANTITY", bookId, quantity });
  };

  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <ThemeProvider>
    <BrowserRouter>
      <NavBar cartCount={cartCount} />
      <Routes>
        <Route path="/" element={<Navigate to="/shop" replace />} />
        <Route path="/shop" element={<ShopPage handleCartAdd={handleCartAdd} />} />
        <Route
          path="/shop/:bookId"
          element={<BookDetailPage handleCartAdd={handleCartAdd} />}
        />
        <Route
          path="/cart"
          element={
            <CartPage
              cartItems={cartItems}
              handleCartRemove={handleCartRemove}
              handleCartIncrement={handleCartIncrement}
              handleCartQuantityChange={handleCartQuantityChange}
            />
          }
        />
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
