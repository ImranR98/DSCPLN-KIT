export default function Toolbar({ className = '', children = null, ...props }) {
  return <div className={['toolbar', className].filter(Boolean).join(' ')} {...props}>{children}</div>
}
