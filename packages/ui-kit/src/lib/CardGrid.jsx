export default function CardGrid({ min = '21rem', className = '', children = null, ...props }) {
  return (
    <div
      className={['card-grid', className].filter(Boolean).join(' ')}
      style={{ '--card-min': min }}
      {...props}
    >
      {children}
    </div>
  )
}
