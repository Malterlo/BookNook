import { Link } from "react-router-dom";

export default function CartPage({ cartItems, handleCartRemove }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  if (cartItems.length === 0) {
    return (
      <main className="page-shell simple-message">
        <div>
          <h1>Your cart is empty</h1>
          <p>Add a book from the shop to see it here.</p>
          <Link className="btn btn-primary" to="/shop">
            Browse books
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="page-shell">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Your selections</p>
          <h1>Shopping cart</h1>
        </div>
        <Link className="btn btn-secondary" to="/shop">
          Continue shopping
        </Link>
      </div>

      <div className="checkout-shell">
        <section className="checkout-panel" aria-label="Cart items">
          {cartItems.map((item, index) => (
            <article className="summary-line" key={`${item.id}-${index}`}>
              <div>
                <strong>{item.title}</strong>
                <p>{item.author}</p>
              </div>
              <div>
                <strong>${item.price.toFixed(2)}</strong>
                <button
                  className="text-link"
                  type="button"
                  onClick={() => handleCartRemove(item.id)}
                >
                  Remove
                </button>
              </div>
            </article>
          ))}
        </section>

        <aside className="summary-panel">
          <h2>Order summary</h2>
          <div className="summary-line">
            <span>Items</span>
            <span>{cartItems.length}</span>
          </div>
          <div className="summary-line total">
            <strong>Total</strong>
            <strong>${total.toFixed(2)}</strong>
          </div>
          <button className="btn btn-primary checkout-btn" type="button">
            Checkout
          </button>
        </aside>
      </div>
    </main>
  );
}
