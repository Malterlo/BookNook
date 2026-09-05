import Card from "../components/card";
import NavBar from "../components/nav-bar";
import { books } from "./data.js";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleCartAdd = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <>
      <NavBar />
      <section id="Shop" className="py-8 px-4">
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
                handleCartAdd={handleCartAdd}
              />
            );
          })}
        </div>
      </section>
    </>
    
  );
}

export default App;
