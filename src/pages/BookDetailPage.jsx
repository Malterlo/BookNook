import { Link, useParams } from "react-router-dom";
import { books } from "../data.js";

export default function BookDetailPage({ handleCartAdd }) {
  const { bookId } = useParams();
  const book = books.find((item) => item.id === Number(bookId));

  if (!book) {
    return (
      <main className="mx-auto grid min-h-60 max-w-7xl place-items-center rounded-[18px] border border-[#bda98e] bg-[#fffdf9] p-7 text-center shadow-[0_12px_28px_rgba(82,60,26,0.12)] dark:border-[#69543c]">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-[#2e241b] dark:text-[#f7f2e8]">Book not found</h1>
          <p className="mt-2 text-[#40352d] dark:text-[#c8bcae]">That book does not exist in our collection.</p>
          <Link className="font-bold text-[#8c481c]" to="/shop">Back to shop</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl rounded-[18px] border border-[#bda98e] bg-[#fffdf9] p-7 shadow-[0_12px_28px_rgba(82,60,26,0.12)] dark:border-[#69543c]">
      <div className="grid gap-8 md:grid-cols-[minmax(16rem,0.8fr)_minmax(0,1.2fr)] md:items-center">
        <div className="flex justify-center">
          <img
            className="w-full max-w-md rounded-[18px] border border-[#bda98e] object-cover shadow-[0_12px_28px_rgba(82,60,26,0.18)] dark:border-[#69543c]"
            src={book.image}
            alt={`Cover of ${book.title}`}
          />
        </div>
        <section>
          <h1 className="my-3 text-3xl font-bold tracking-tight text-[#2e241b] dark:text-[#f7f2e8]">{book.title}</h1>
          <p className="text-base italic text-[#5a4d43] dark:text-[#c8bcae]">by {book.author}</p>
          <p className="mt-6 text-base leading-7 text-[#40352d] dark:text-[#c8bcae]">{book.description}</p>
          <p className="mt-6 text-2xl font-bold text-[#2e241b] dark:text-[#f7f2e8]">${book.price.toFixed(2)}</p>
          <button className="mt-6 rounded-full bg-linear-to-br from-[#f5c86d] to-[#d88a39] px-5 py-3 font-bold text-[#1f150a]" type="button" onClick={() => handleCartAdd(book)}>
            Add to cart
          </button>
        </section>
      </div>
    </main>
  );
}