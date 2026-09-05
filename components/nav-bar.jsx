function NavBar() {
  return (
    <header className="sticky top-0 z-10 box-border flex w-screen max-w-none items-center justify-between gap-6 bg-[rgba(34,28,20,0.88)] px-6 py-4 text-white shadow-[0_12px_32px_rgba(82,60,26,0.14)] backdrop-blur-[10px] max-[960px]:flex-col max-[960px]:items-start max-[960px]:gap-4">
      <a className="flex items-center gap-3" href="#home" aria-label="BookNook">
        <span>
          <strong className="m-0 text-[1.2rem] font-bold">BookNook</strong>
        </span>
      </a>

      <nav className="absolute left-1/2 flex -translate-x-1/2 flex-wrap items-center justify-center gap-3 max-[960px]:static max-[960px]:mx-0 max-[960px]:w-full max-[960px]:translate-x-0 max-[960px]:justify-start" aria-label="Main navigation">
        <a className="rounded-lg bg-[#ffd79c] px-3 py-2 font-semibold text-[#1d1307] transition-colors duration-200" href="#shop">Shop</a>
        <a className="rounded-lg px-3 py-2 font-semibold text-[rgba(255,255,255,0.78)] transition-colors duration-200 hover:bg-[#ffd79c] hover:text-[#1d1307]" href="#new">New arrivals</a>
        <a className="rounded-lg px-3 py-2 font-semibold text-[rgba(255,255,255,0.78)] transition-colors duration-200 hover:bg-[#ffd79c] hover:text-[#1d1307]" href="#collections">Collections</a>
        <a className="rounded-lg px-3 py-2 font-semibold text-[rgba(255,255,255,0.78)] transition-colors duration-200 hover:bg-[#ffd79c] hover:text-[#1d1307]" href="#about">About</a>
      </nav>

      <div className="flex items-center justify-end gap-2 max-[960px]:ml-0 max-[960px]:w-full max-[960px]:justify-between">
        <button className="bg-transparent px-3 py-2 font-semibold text-[rgba(255,255,255,0.82)] transition-colors duration-200 hover:text-[#ffd79c]" type="button" aria-label="Search products" title="Search products">
          Search
        </button>
        <a className="px-3 py-2 font-semibold text-[rgba(255,255,255,0.82)] transition-colors duration-200 hover:text-[#ffd79c]" href="#account">Account</a>
        <a className="bg-gradient-to-br from-[#f7c87d] to-[#db8c38] px-4 py-2 rounded-lg font-bold text-[#1c140a]" href="#cart" aria-label="Shopping cart, 0 items">
          Cart <span aria-hidden="true">(0)</span>
        </a>
      </div>
    </header>
  );
}

export default NavBar;