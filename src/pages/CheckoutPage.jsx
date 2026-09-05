export default function CheckoutPage() {
  return (
    <div className="page-shell checkout-shell">
      <div className="checkout-panel">
        <p className="eyebrow">Secure checkout</p>
        <h1>Complete your bird order</h1>

        <form className="checkout-form">
          <label>
            Full name
            <input type="text" placeholder="Jane Featherstone" />
          </label>
          <label>
            Email
            <input type="email" placeholder="you@example.com" />
          </label>
          <label>
            Shipping address
            <textarea rows="3" placeholder="123 Palm Lane, Austin, TX" />
          </label>
          <label>
            Bird care notes
            <textarea rows="3" placeholder="Any temperament or housing notes?" />
          </label>
          <button type="submit" className="btn btn-primary checkout-btn">Place order</button>
        </form>
      </div>

      <aside className="summary-panel">
        <h2>Order summary</h2>
        <div className="summary-line">
          <span>Golden Canary</span>
          <strong>$129</strong>
        </div>
        <div className="summary-line">
          <span>Care starter kit</span>
          <strong>$34</strong>
        </div>
        <div className="summary-line total">
          <span>Total</span>
          <strong>$163</strong>
        </div>
      </aside>
    </div>
  )
}
