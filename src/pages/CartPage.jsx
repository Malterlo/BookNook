import { Link } from "react-router-dom";

export default function CartPage({ cartItems, handleCartRemove }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  if (cartItems.length === 0) {
    return (
      <main className="mx-auto grid min-h-[200px] max-w-7xl place-items-center rounded-[18px] border border-[rgba(83,60,36,0.08)] bg-[rgba(255,255,255,0.5)] p-[18px] text-center text-[1.1rem] sm:rounded-[30px] sm:p-7">
        <div>
          <h1>Your cart is empty</h1>
          <p>Add a book from the shop to see it here.</p>
          <Link className="mt-6 inline-flex items-center justify-center rounded-full bg-linear-to-br from-[#f5c86d] to-[#d88a39] px-5 py-3 font-bold text-[#1f150a] transition-transform duration-200 hover:-translate-y-px" to="/shop">
            Browse books
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl rounded-[18px] border border-[rgba(83,60,36,0.08)] bg-[rgba(255,255,255,0.5)] p-[18px] sm:rounded-[30px] sm:p-7">
      <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="m-0 text-[0.73rem] font-extrabold uppercase tracking-[0.12em] text-[#b6672b]">Your selections</p>
          <h1>Shopping cart</h1>
        </div>
        <Link className="inline-flex items-center justify-center rounded-full border border-[rgba(43,28,14,0.12)] bg-white px-5 py-3 font-bold text-[#2e241b] transition-transform duration-200 hover:-translate-y-px" to="/shop">
          Continue shopping
        </Link>
      </div>

      <div className="grid gap-[22px] lg:grid-cols-[1.2fr_0.8fr]">
        <section className="rounded-[22px] border border-[rgba(84,61,38,0.08)] bg-[#fffdf9] p-6" aria-label="Cart items">
          {cartItems.map((item, index) => (
            <article className="flex items-center justify-between gap-2 border-b border-[rgba(99,77,52,0.1)] py-3" key={`${item.id}-${index}`}>
              <div>
                <strong>{item.title}</strong>
                <p>{item.author}</p>
              </div>
              <div>
                <strong>${item.price.toFixed(2)}</strong>
                <button
                  className="block font-bold text-[#b15d28]"
                  type="button"
                  onClick={() => handleCartRemove(item.id)}
                >
                  Remove
                </button>
              </div>
            </article>
          ))}
        </section>

        <aside className="rounded-[22px] border border-[rgba(84,61,38,0.08)] bg-[#fffdf9] p-6">
          <h2 className="mt-0">Order summary</h2>
          <div className="flex items-center justify-between gap-2 border-b border-[rgba(99,77,52,0.1)] py-3">
            <span>Items</span>
            <span>{cartItems.length}</span>
          </div>
          <div className="mt-3 flex items-center justify-between gap-2 py-3 text-[1.2rem]">
            <strong>Total</strong>
            <strong>${total.toFixed(2)}</strong>
          </div>
          <button className="mt-2 w-full rounded-full bg-linear-to-br from-[#f5c86d] to-[#d88a39] px-5 py-3 font-bold text-[#1f150a] transition-transform duration-200 hover:-translate-y-px" type="button">
            Checkout
          </button>
        </aside>
      </div>
    </main>
  );
}
