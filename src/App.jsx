import Card from "./components/card";
import NavBar from "./components/nav-bar";
import { books } from "./data.js";
import { useState } from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import CartPage from "./pages/CartPage.jsx";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleCartAdd = (book) => {
    setCartItems((prevItems) => [...prevItems, book]);
  };

  const handleCartRemove = (bookId) => {
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex((item) => item.id === bookId);

      if (itemIndex === -1) {
        return prevItems;
      }

      return prevItems.filter((_, index) => index !== itemIndex);
    });
  };

  const shopContent = (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {books.map((book) => (
        <Card
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
          image={book.image}
          description={book.description}
          price={book.price}
          handleCartAdd={handleCartAdd}
        />
      ))}
    </div>
  );

  return (
    <BrowserRouter>
      <NavBar cartCount={cartItems.length} />
      <Routes>
        <Route path="/" element={<Navigate to="/shop" replace />} />
        <Route path="/shop" element={shopContent} />
        <Route
          path="/cart"
          element={
            <CartPage
              cartItems={cartItems}
              handleCartRemove={handleCartRemove}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
