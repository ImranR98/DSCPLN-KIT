export default function StatTiles({ items = [], className = '' }) {
  return (
    <div className={['stat-tiles', className].filter(Boolean).join(' ')}>
      {items.map((item, index) => (
        <div className="stat-tile" key={`${item.label}-${index}`}>
          <span className="stat-tile__label">{item.label}</span>
          <span className={['stat-tile__value', item.tone ? `is-${item.tone}` : null].filter(Boolean).join(' ')}>
            {item.value ?? '—'}
          </span>
        </div>
      ))}
    </div>
  )
}
