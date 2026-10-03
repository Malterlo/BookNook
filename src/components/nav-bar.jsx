import { Link } from "react-router-dom";
import { useTheme } from "../context/themeHook";

function NavBar({ cartCount }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-10 box-border grid w-full max-w-none grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-6 border border-[#bda98e] bg-[rgba(34,28,20,0.88)] px-6 py-4 text-white shadow-[0_12px_28px_rgba(82,60,26,0.12)] backdrop-blur-[10px] dark:border-[#69543c] dark:bg-[#29241e] dark:text-[#f7f2e8] max-[960px]:grid-cols-1 max-[960px]:gap-3 max-[960px]:px-4 max-[960px]:py-3">
      <a className="flex items-center gap-3" href="#home" aria-label="BookNook">
        <span>
          <strong className="m-0 text-[1.2rem] font-bold">BookNook</strong>
        </span>
      </a>

      <nav
        className="flex min-w-0 flex-wrap items-center justify-center gap-3 max-[960px]:w-full max-[960px]:justify-start"
        aria-label="Main navigation"
      >
        <Link
          className="rounded-lg bg-[#ffd79c] px-3 py-3 font-semibold text-[#1d1307] transition-colors duration-200"
          to="/shop"
        >
          Shop
        </Link>
        <Link
          className="rounded-lg px-3 py-2 font-semibold text-[rgba(255,255,255,0.78)] transition-colors duration-200 hover:bg-[#ffd79c] hover:text-[#1d1307]"
          to="/new"
        >
          New arrivals
        </Link>
        <Link
          className="rounded-lg px-3 py-2 font-semibold text-[rgba(255,255,255,0.78)] transition-colors duration-200 hover:bg-[#ffd79c] hover:text-[#1d1307]"
          to="/collections"
        >
          Collections
        </Link>
        <Link
          className="rounded-lg px-3 py-2 font-semibold text-[rgba(255,255,255,0.78)] transition-colors duration-200 hover:bg-[#ffd79c] hover:text-[#1d1307]"
          to="/about"
        >
          About
        </Link>
      </nav>

      <div className="flex min-w-0 items-center justify-end gap-2 max-[960px]:w-full max-[960px]:justify-between max-[600px]:flex-wrap">
        <button
          className="grid size-10 place-items-center rounded-lg bg-[#ffd79c] text-xl font-semibold text-[#1d1307] transition-colors duration-200 hover:bg-[#e6b86f]"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
          <span aria-hidden="true">{theme === "light" ? "☾" : "☀"}</span>
        </button>
        <a
          className="px-3 py-2 font-semibold text-[rgba(255,255,255,0.82)] transition-colors duration-200 hover:text-[#ffd79c]"
          href="#account"
        >
          Account
        </a>
        <Link
          className="rounded-lg bg-linear-to-br from-[#f7c87d] to-[#db8c38] px-4 py-2 text-[#1c140a]"
          to="/cart"
        >
          Cart <span aria-hidden="true">({cartCount})</span>
        </Link>
      </div>
    </header>
  );
}

export default NavBar;
