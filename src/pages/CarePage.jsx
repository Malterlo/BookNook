import { careTips } from '../data'

export default function CarePage() {
  return (
    <div className="page-shell">
      <div className="section-heading">
        <p className="eyebrow">Care guide</p>
        <h1>Healthy habits for happy birds</h1>
      </div>

      <div className="care-grid">
        {careTips.map((tip) => (
          <article key={tip.title} className="care-card">
            <div className="care-icon">✦</div>
            <h3>{tip.title}</h3>
            <p>{tip.text}</p>
          </article>
        ))}
      </div>

      <div className="care-checklist">
        <h2>Daily care checklist</h2>
        <ul>
          <li>Fresh water and food rotation every morning</li>
          <li>Safe cage cleaning and perch inspection</li>
          <li>30 to 45 minutes of supervised social time</li>
          <li>Toys and foraging items rotated for brain stimulation</li>
        </ul>
      </div>
    </div>
  )
}
