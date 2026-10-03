import Card from "../components/card";
import { books } from "../data.js";
import { useRef, useState } from "react";

function GenreCarousel({ genre, genreBooks, handleCartAdd }) {
  const carouselRef = useRef(null);

  const moveCarousel = (direction) => {
    carouselRef.current?.scrollBy({
      left: direction * carouselRef.current.clientWidth * 0.85,
      behavior: "smooth",
    });
  };

  return (
    <section className="rounded-[18px] border border-[#bda98e] bg-[#fdf8ef] p-4 shadow-[0_8px_20px_rgba(82,60,26,0.08)] dark:border-[#69543c] dark:bg-[#29241e]" aria-labelledby={`genre-${genre}`}>
      <div className="mb-4 flex items-center justify-between gap-4">
        <div>
          <p className="m-0 text-[0.7rem] font-extrabold uppercase tracking-[0.12em] text-[#8c481c] dark:text-[#f5c86d]">
            Browse by genre
          </p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-[#2e241b] dark:text-[#f7f2e8]" id={`genre-${genre}`}>
            {genre}
          </h2>
        </div>
        <div className="flex shrink-0 gap-2">
          <button
            className="grid size-9 place-items-center rounded-lg border border-[#bda98e] bg-white text-lg font-bold text-[#2e241b] transition-colors hover:bg-[#f5eadb] dark:border-[#69543c] dark:bg-[#211e1a] dark:text-[#f7f2e8] dark:hover:bg-[#3a3025]"
            type="button"
            onClick={() => moveCarousel(-1)}
            aria-label={`Show previous ${genre} books`}
          >
            &#8592;
          </button>
          <button
            className="grid size-9 place-items-center rounded-lg border border-[#bda98e] bg-white text-lg font-bold text-[#2e241b] transition-colors hover:bg-[#f5eadb] dark:border-[#69543c] dark:bg-[#211e1a] dark:text-[#f7f2e8] dark:hover:bg-[#3a3025]"
            type="button"
            onClick={() => moveCarousel(1)}
            aria-label={`Show next ${genre} books`}
          >
            &#8594;
          </button>
        </div>
      </div>

      <div
        className="grid auto-cols-[18rem] grid-flow-col gap-4 overflow-x-auto pb-3 snap-x snap-mandatory sm:auto-cols-[20rem] lg:auto-cols-[21rem]"
        ref={carouselRef}
      >
        {genreBooks.map((book) => (
          <div className="min-w-0 snap-start" key={book.id}>
            <Card {...book} handleCartAdd={handleCartAdd} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default function ShopPage({ handleCartAdd }) {
  const [searchTerm, setSearchTerm] = useState("");
  const normalizedSearchTerm = searchTerm.trim().toLowerCase();
  const filteredBooks = books.filter((book) => {
    if (!normalizedSearchTerm) {
      return true;
    }

    return [book.title, book.author, book.genre, book.description].some((field) =>
      field.toLowerCase().includes(normalizedSearchTerm),
    );
  });

  const booksByGenre = filteredBooks.reduce((groups, book) => {
    const genre = book.genre ?? "Other";
    groups[genre] ??= [];
    groups[genre].push(book);
    return groups;
  }, {});

  return (
    <main className="mx-auto max-w-7xl border border-[#bda98e] bg-[#fffdf9] p-4.5 shadow-[0_12px_28px_rgba(82,60,26,0.12)] dark:border-[#69543c]">
      <header className="mb-6 flex flex-col justify-between gap-5 rounded-[18px] border border-[#bda98e] bg-[#f3dfbd] p-5 text-[#2e241b] shadow-[0_12px_28px_rgba(82,60,26,0.12)] dark:border-[#69543c] dark:bg-[#2b241d] dark:text-[#f7f2e8] sm:flex-row sm:items-end sm:rounded-2xl sm:p-7">
        <div>
          <div>
            <p className="m-0 text-[0.73rem] font-extrabold uppercase tracking-[0.12em] text-[#7a3f18] dark:text-[#f5c86d]">
              Our collection
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-[#2e241b] dark:text-[#f7f2e8]">
              Find your next great read
            </h1>
          </div>
        </div>

        <div className="w-full max-w-120">
          <label
            className="mb-2 block text-sm font-bold text-[#2e241b] dark:text-[#f7f2e8]"
            htmlFor="book-search"
          >
            Search books
          </label>
          <input
            className="w-full rounded-lg border border-[#bda98e] bg-white px-4 py-3 text-[#2e241b] outline-none placeholder:text-[#6f6256] focus:border-[#8c481c] focus:ring-2 focus:ring-[#d8a15c]/40 dark:border-[#75624c] dark:bg-[#29241e] dark:text-[#f7f2e8] dark:placeholder:text-[#c8bcae]"
            id="book-search"
            type="search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search by title, author, or description"
          />
        </div>
      </header>
      <div className="space-y-6">
        {Object.entries(booksByGenre).map(([genre, genreBooks]) => (
          <GenreCarousel
            key={genre}
            genre={genre}
            genreBooks={genreBooks}
            handleCartAdd={handleCartAdd}
          />
        ))}
      </div>

      {filteredBooks.length === 0 && (
        <p className="py-8 text-center text-[#40352d] dark:text-[#c8bcae]">
          No books match "{searchTerm}".
        </p>
      )}
    </main>
  );
}
