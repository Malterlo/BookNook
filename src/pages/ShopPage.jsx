import { Link, useParams } from 'react-router-dom'
import { books } from '../data.js' 

export default function ShopPage() {
  const { productId } = useParams()

  if (productId) {
    const product = books.find((item) => item.id === productId)

    if (!product) {
      return <div className="page-shell simple-message">The book   you are looking for is not available.</div>
    }

    return (
      <div className="page-shell">
        <Link to="/shop" className="back-link">← Back to shop</Link>
        <div className="detail-layout">
          <div className="detail-image-wrap">
            <img src={product.image} alt={product.name} className="detail-image" />
          </div>
          <div className="detail-copy">
            <p className="eyebrow">{product.category}</p>
            <h1>{product.name}</h1>
            <div className="detail-rating">★ {product.rating}</div>
            <p className="lead detail-lead">{product.description}</p>
            <div className="price-row">
              <strong>${product.price}</strong>
              <span>Includes health check & setup guide</span>
            </div>
            <ul className="feature-list">
              {product.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <div className="detail-actions">
              <button className="btn btn-primary">Add to cart</button>
              <Link to="/checkout" className="btn btn-secondary">Buy now</Link>
            </div>
            <div className="care-box">
              <h3>Care note</h3>
              <p>{product.care}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="page-shell">
      <div className="section-heading shop-heading">
        <div>
          <p className="eyebrow">Our collection</p>
          <h1>Find your perfect bird companion</h1>
        </div>
        <Link to="/checkout" className="btn btn-primary">Checkout</Link>
      </div>

      <div className="product-grid shop-grid">
        {books.map((product) => (
          <article key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <div className="product-meta">
                <span>{product.category}</span>
                <span>★ {product.rating}</span>
              </div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <div className="product-footer">
                <strong>${product.price}</strong>
                <Link to={`/shop/${product.id}`} className="text-link">Details</Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
