export default function StatusPill({ tone = 'neutral', className = '', children = null, ...props }) {
  return (
    <span className={['status-pill', `status-pill--${tone}`, className].filter(Boolean).join(' ')} {...props}>
      {children}
    </span>
  )
}
