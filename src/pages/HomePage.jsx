import { Link } from 'react-router-dom'
import { featuredProducts } from '../data'

export default function HomePage() {
  return (
    <div>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Hand-picked avian companions</p>
          <h1>Bring home the song, color, and charm of beautiful birds.</h1>
          <p className="lead">
            Explore premium companion birds, care kits, and enrichment essentials for every feathered family.
          </p>
          <div className="hero-actions">
            <Link to="/shop" className="btn btn-primary">Shop birds</Link>
            <Link to="/care" className="btn btn-secondary">Care guide</Link>
          </div>
          <div className="hero-stats">
            <div>
              <strong>2.4k+</strong>
              <span>happy bird parents</span>
            </div>
            <div>
              <strong>4.9/5</strong>
              <span>average care rating</span>
            </div>
            <div>
              <strong>48h</strong>
              <span>delivery dispatch</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="bird-card large">
            <img
              src="https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80"
              alt="Colorful bird"
            />
            <div className="badge">Most loved</div>
          </div>
          <div className="bird-card small">
            <img
              src="https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&w=900&q=80"
              alt="Bird perched"
            />
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <p className="eyebrow">Featured favorites</p>
          <h2>Birds that brighten every room</h2>
        </div>
        <div className="product-grid">
          {featuredProducts.map((product) => (
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
                  <Link to={`/shop/${product.id}`} className="text-link">View details</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block banner">
        <div>
          <p className="eyebrow">Bird care essentials</p>
          <h2>Everything your new feathered friend needs to thrive.</h2>
        </div>
        <Link to="/shop" className="btn btn-primary">Browse collection</Link>
      </section>
    </div>
  )
}
