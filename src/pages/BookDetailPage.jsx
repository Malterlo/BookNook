import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { books } from "../data.js";
import { getComments } from "../service/getComments.service.jsx";

export default function BookDetailPage({ handleCartAdd }) {
  const { bookId } = useParams();
  const book = books.find((item) => item.id === Number(bookId));
  const [topComments, setTopComments] = useState([]);

  useEffect(() => {
    let cancelled = false;

    getComments().then(({ comments }) => {
      if (!cancelled) {
        setTopComments(comments.slice(0, 6));
      }
    });

    return () => {
      cancelled = true;
    };
  }, []);

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
    <>
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
    <section
      className="mx-auto mt-6 max-w-7xl rounded-[18px] border border-[#bda98e] bg-[#fdf8ef] p-5 shadow-[0_12px_28px_rgba(82,60,26,0.1)] dark:border-[#69543c] dark:bg-[#29241e] sm:p-7"
      aria-labelledby="comments-heading"
    >
      <div className="mb-5 flex flex-wrap items-end justify-between gap-3 border-b border-[#d8c5aa] pb-4 dark:border-[#5b4937]">
        <div>
          <p className="m-0 text-[0.7rem] font-extrabold uppercase tracking-[0.12em] text-[#8c481c] dark:text-[#f5c86d]">
            From the reading room
          </p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-[#2e241b] dark:text-[#f7f2e8]" id="comments-heading">
            Top comments
          </h2>
        </div>
        <span className="rounded-full border border-[#d8a15c] bg-[#f3dfbd] px-3 py-1 text-sm font-bold text-[#7a3f18] dark:border-[#8c481c] dark:bg-[#3a3025] dark:text-[#f5c86d]">
          {topComments.length} of 6
        </span>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {topComments.map((comment) => (
          <article
            className="rounded-xl border border-[#d8c5aa] bg-white/70 p-4 transition-shadow hover:shadow-[0_8px_18px_rgba(82,60,26,0.1)] dark:border-[#5b4937] dark:bg-[#211e1a] dark:hover:shadow-[0_8px_18px_rgba(0,0,0,0.22)]"
            key={comment.id}
          >
            <div className="mb-3 flex items-center gap-3">
              <div className="grid size-9 shrink-0 place-items-center rounded-full bg-[#d88a39] text-sm font-extrabold uppercase text-[#2e241b]">
                {comment.user.username.slice(0, 1)}
              </div>
              <p className="m-0 font-bold text-[#2e241b] dark:text-[#f7f2e8]">{comment.user.username}</p>
            </div>
            <p className="m-0 leading-7 text-[#40352d] dark:text-[#c8bcae]">{comment.body}</p>
          </article>
        ))}
      </div>
    </section>
    </>
  );
}