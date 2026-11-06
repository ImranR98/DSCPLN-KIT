export default function Card({
  title = null,
  tone = null,
  className = '',
  headerTools = null,
  children = null,
  ...props
}) {
  const classes = ['card', tone ? `card--${tone}` : null, className].filter(Boolean).join(' ')
  return (
    <section className={classes} {...props}>
      {title ? (
        <div className="card__header">
          <h2 className="card__title">{title}</h2>
          {headerTools ? <span className="card__header-tools">{headerTools}</span> : null}
        </div>
      ) : null}
      {children}
    </section>
  )
}
