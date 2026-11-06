import { forwardRef } from 'react'

// Shared control primitive. Using a class (not role="button") keeps link
// semantics for navigation while giving anchors the same dimensions as buttons.
const Button = forwardRef(function Button({
  href = null,
  variant = 'outline',
  size = 'md',
  icon: Icon = null,
  className = '',
  children = null,
  type = 'button',
  ...props
}, ref) {
  const classes = [
    'btn',
    `btn--${variant}`,
    size === 'sm' ? 'btn--sm' : null,
    !children && Icon ? 'btn--icon' : null,
    className,
  ].filter(Boolean).join(' ')
  const content = (
    <>
      {Icon ? <Icon size={16} strokeWidth={1.8} aria-hidden="true" /> : null}
      {children}
    </>
  )
  if (href !== null) {
    return <a ref={ref} className={classes} href={href} {...props}>{content}</a>
  }
  return <button ref={ref} className={classes} type={type} {...props}>{content}</button>
})

export default Button
