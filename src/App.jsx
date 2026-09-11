import Card from "./components/card";
import NavBar from "./components/nav-bar";
import FetchAPI from "./components/fetchAPI.jsx";
import { books } from "./data.js";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopPage from "./pages/ShopPage.jsx";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [counter, setCounter] = useState(0);

  const handleCartAdd = () => {
    setCartCount((cartCount) => cartCount + 1);
    setCounter((counter) => counter + 1);
  };

  const handleCartRemove = () => {
    setCartCount((cartCount) => Math.max(0, cartCount - 1));
    setCounter((counter) => Math.max(0, counter - 1));
  };

  return (
    <>
      <BrowserRouter>
      
      <NavBar cartCount={cartCount} counter={counter} handleCartRemove={handleCartRemove} />
      <Routes>
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
      
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {books.map((book) => {
              return (
                <Card
                  key={book.id}
                  id={book.id}
                  title={book.title}
                  author={book.author}
                  image={book.image}
                  description={book.description}
                  price={book.price}
                  handleCartAdd={handleCartAdd} />
              );
            })}
          </div>
        </BrowserRouter>
    </>
    
  );
}

export default App;
