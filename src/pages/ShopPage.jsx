import { Link, useParams } from 'react-router-dom'
import { books } from '../data.js' 

export default function ShopPage() {
  const { productId } = useParams()

  if (productId) {
    const product = books.find((item) => item.id === productId)

    if (!product) {
      return <div className="mx-auto grid min-h-50 max-w-7xl place-items-center rounded-[18px] border border-[rgba(83,60,36,0.08)] bg-[rgba(255,255,255,0.5)] p-4.5 text-center text-[1.1rem] sm:rounded-[30px] sm:p-7">The book you are looking for is not available.</div>
    }

    return (
      <div className="mx-auto max-w-7xl rounded-[18px] border border-[rgba(83,60,36,0.08)] bg-[rgba(255,255,255,0.5)] p-4.5 sm:rounded-[30px] sm:p-7">
        <Link to="/shop" className="mb-[22px] inline-block font-bold text-[#8a5a2c]">← Back to shop</Link>
        <div className="grid gap-7.5 lg:grid-cols-2">
          <div className="min-h-130 overflow-hidden rounded-[26px]">
            <img src={product.image} alt={product.name} className="object-cover w-full h-full" />
          </div>
          <div>
            <p className="m-0 text-[0.73rem] font-extrabold uppercase tracking-[0.12em] text-[#b6672b]">{product.category}</p>
            <h1 className="my-2 text-[clamp(2.2rem,4vw,3.4rem)]">{product.name}</h1>
            <div className="font-bold text-[#b16b2a]">★ {product.rating}</div>
            <p className="mt-4 max-w-155 text-[1.05rem] text-[#52483f]">{product.description}</p>
            <div className="mt-5 flex items-center justify-between gap-2 rounded-2xl bg-[#f7f4ef] px-4.5 py-4">
              <strong className="text-[2rem]">${product.price}</strong>
              <span>Includes health check & setup guide</span>
            </div>
            <ul className="mt-5.5 grid list-none gap-3 p-0">
              {product.features.map((feature) => (
                <li className="before:mr-2.5 before:font-bold before:text-[#197c4c] before:content-['✓']" key={feature}>{feature}</li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3.5">
              <button className="inline-flex items-center justify-center rounded-full bg-linear-to-br from-[#f5c86d] to-[#d88a39] px-5 py-3 font-bold text-[#1f150a] transition-transform duration-200 hover:-translate-y-px">Add to cart</button>
              <Link to="/checkout" className="inline-flex items-center justify-center rounded-full border border-[rgba(43,28,14,0.12)] bg-white px-5 py-3 font-bold text-[#2e241b] transition-transform duration-200 hover:-translate-y-px">Buy now</Link>
            </div>
            <div className="mt-6 rounded-[18px] border border-[rgba(173,109,43,0.14)] bg-[#fff9f0] px-5 py-4.5">
              <h3>Care note</h3>
              <p>{product.care}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-7xl rounded-[18px] border border-[rgba(83,60,36,0.08)] bg-[rgba(255,255,255,0.5)] p-4.5 sm:rounded-[30px] sm:p-7">
      <div className="mb-6.5 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="m-0 text-[0.73rem] font-extrabold uppercase tracking-[0.12em] text-[#b6672b]">Our collection</p>
          <h1>Find your perfect bird companion</h1>
        </div>
        <Link to="/checkout" className="inline-flex items-center justify-center rounded-full bg-linear-to-br from-[#f5c86d] to-[#d88a39] px-5 py-3 font-bold text-[#1f150a] transition-transform duration-200 hover:-translate-y-px">Checkout</Link>
      </div>

      <div className="grid grid-cols-1 gap-5.5 sm:grid-cols-2 lg:grid-cols-3">
        {books.map((product) => (
          <article key={product.id} className="overflow-hidden rounded-3xl border border-[rgba(101,67,39,0.1)] bg-[rgba(255,255,255,0.72)] shadow-[0_12px_28px_rgba(57,38,15,0.05)]">
            <img src={product.image} alt={product.name} className="object-cover w-full h-65" />
            <div className="p-4.5 pb-5">
              <div className="flex items-center justify-between gap-2 text-[0.75rem] font-bold uppercase tracking-[0.08em] text-[#8a5a2c]">
                <span>{product.category}</span>
                <span>★ {product.rating}</span>
              </div>
              <h3 className="my-3 text-[1.35rem]">{product.name}</h3>
              <p className="text-[#564a41]">{product.description}</p>
              <div className="mt-4.5 flex items-center justify-between gap-2 text-[1.1rem]">
                <strong>${product.price}</strong>
                <Link to={`/shop/${product.id}`} className="font-bold text-[#b15d28]">Details</Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
