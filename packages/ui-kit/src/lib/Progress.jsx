export default function Progress({ value = 0, tone = 'ok', label = null, className = '' }) {
  const pct = Math.max(0, Math.min(100, Number(value) || 0))
  return (
    <div
      className={['progress', className].filter(Boolean).join(' ')}
      role="progressbar"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow={Math.round(pct)}
      aria-label={label || undefined}
    >
      <span className={`progress__fill is-${tone}`} style={{ width: `${pct}%` }} />
    </div>
  )
}
