// Page shell: width + vertical rhythm without per-app margins.
export default function Page({ width = 'standard', className = '', children = null, ...props }) {
  return (
    <main className={['page', `page--${width}`, className].filter(Boolean).join(' ')} {...props}>
      {children}
    </main>
  )
}
