export default function EmptyState({ icon: Icon = null, title, description = null, action = null, className = '' }) {
  return (
    <div className={['empty-state', className].filter(Boolean).join(' ')}>
      {Icon ? <Icon size={24} strokeWidth={1.6} aria-hidden="true" /> : null}
      {title ? <h3>{title}</h3> : null}
      {description ? <p>{description}</p> : null}
      {action}
    </div>
  )
}
