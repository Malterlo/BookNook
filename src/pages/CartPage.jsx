import { Link } from "react-router-dom";
import { books } from "../data.js";

export default function CartPage({
  cartItems,
  handleCartRemove,
  handleCartIncrement,
  handleCartQuantityChange,
}) {
  const itemCount = cartItems.reduce((count, item) => count + item.quantity, 0);
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  if (cartItems.length === 0) {
    return (
      <main className="mx-auto grid min-h-50 max-w-7xl place-items-center rounded-b-[18px] border border-[#bda98e] bg-[#fffdf9] p-4.5 text-center text-[1.1rem] shadow-[0_12px_28px_rgba(82,60,26,0.12)] dark:border-[#69543c]">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-[#2e241b] dark:text-[#f7f2e8]">Your cart is empty</h1>
          <p className="mt-2 text-[#40352d] dark:text-[#c8bcae]">Add a book from the shop to see it here.</p>
          <Link className="mt-6 inline-flex items-center justify-center rounded-full bg-linear-to-br from-[#f5c86d] to-[#d88a39] px-5 py-3 font-bold text-[#1f150a] transition-transform duration-200 hover:-translate-y-px" to="/shop">
            Browse books
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl rounded-b-[18px] border border-[#bda98e] bg-[#fffdf9] p-4.5 shadow-[0_12px_28px_rgba(82,60,26,0.12)] dark:border-[#69543c]">
      <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="m-0 text-[0.73rem] font-extrabold uppercase tracking-[0.12em] text-[#8c481c]">Your selections</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-[#2e241b] dark:text-[#f7f2e8]">Shopping cart</h1>
        </div>
        <Link className="inline-flex items-center justify-center rounded-full border border-[rgba(43,28,14,0.12)] bg-white px-5 py-3 font-bold text-[#2e241b] dark:text-[#f7f2e8] dark:bg-[#29241e] dark:border-[#75624c] transition-transform duration-200 hover:-translate-y-px" to="/shop">
          Continue shopping
        </Link>
      </div>

      <div className="grid gap-5.5 lg:grid-cols-[1.2fr_0.8fr]">
        <section className="rounded-[22px] border border-[rgba(84,61,38,0.08)] bg-[#fffdf9] p-6" aria-label="Cart items">
          {cartItems.map((item) => (
            <article className="grid grid-cols-[64px_minmax(0,1fr)_auto] items-center gap-4 border-b border-[rgba(99,77,52,0.1)] py-4 last:border-b-0 max-[640px]:grid-cols-[64px_minmax(0,1fr)]" key={item.id}>
              <img
                className="h-24 w-16 rounded border border-[#d8c9b5] object-cover shadow-sm"
                src={item.image ?? books.find((book) => book.id === item.id)?.image}
                alt={`Cover of ${item.title}`}
              />
              <div className="min-w-0">
                <strong className="block truncate text-[#2e241b] dark:text-[#f7f2e8]">{item.title}</strong>
                <p className="text-sm italic text-[#5a4d43] dark:text-[#c8bcae]">by {item.author}</p>
                <p className="mt-2 text-sm text-[#40352d] dark:text-[#c8bcae]">${item.price.toFixed(2)} each</p>
              </div>
              <div className="flex flex-col items-end gap-2 max-[640px]:col-span-2 max-[640px]:flex-row max-[640px]:items-center max-[640px]:justify-between">
                <strong className="text-lg text-[#2e241b] dark:text-[#f7f2e8]">${(item.price * item.quantity).toFixed(2)}</strong>
                <div className="flex items-center gap-2" aria-label={`Quantity for ${item.title}`}>
                  <button
                    className="grid size-8 place-items-center rounded border border-[#bda98e] bg-white text-lg font-bold text-[#2e241b] hover:bg-[#f5eadb] dark:border-[#75624c] dark:bg-[#29241e] dark:text-[#f7f2e8]"
                    type="button"
                    onClick={() => handleCartRemove(item.id)}
                    aria-label={`Decrease quantity of ${item.title}`}
                  >
                    -
                  </button>
                  <input
                    className="h-8 w-12 rounded border border-gray-300 text-center"
                    type="number"
                    min="1"
                    step="1"
                    value={item.quantity}
                    onChange={(event) => handleCartQuantityChange(item.id, event.target.value)}
                    aria-label={`Quantity of ${item.title}`}
                  />
                  <button
                    className="grid size-8 place-items-center rounded border border-[#bda98e] bg-white text-lg font-bold text-[#2e241b] hover:bg-[#f5eadb] dark:border-[#75624c] dark:bg-[#29241e] dark:text-[#f7f2e8]"
                    type="button"
                    onClick={() => handleCartIncrement(item.id)}
                    aria-label={`Increase quantity of ${item.title}`}
                  >
                    +
                  </button>
                </div>
              </div>
            </article>
          ))}
        </section>

        <aside className="rounded-b-[22px] border border-[rgba(84,61,38,0.08)] bg-[#fffdf9] p-6">
          <h2 className="mt-0">Order summary</h2>
          <div className="flex items-center justify-between gap-2 border-b border-[rgba(99,77,52,0.1)] py-3">
            <span>Items</span>
            <span>{itemCount}</span>
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
