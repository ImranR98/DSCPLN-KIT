import { getBrand, splitBrand } from './brand.js'

// Shared app chrome: brand, optional function name, optional subtitle/back
// affordance, page-specific controls, and a meta strip.
export default function AppHeader({
  name = null,
  subtitle = null,
  back = null,
  actions = null,
  meta = null,
  metaTools = null,
  className = '',
  brand = null,
  brandHref = '/',
  children = null,
}) {
  const headerClass = ['app-header', className].filter(Boolean).join(' ')
  const hasMeta = meta !== null || metaTools !== null
  const { before, accent, after } = splitBrand(brand ?? getBrand())
  return (
    <header className={headerClass}>
      <div className="app-header__top">
        {back ? (
          <a className="btn btn--ghost btn--sm app-header__back" href={back.href}>
            <span aria-hidden="true">←</span>
            {back.label ?? 'Back'}
          </a>
        ) : null}
        <h1>
          <a className="app-header__brand" href={brandHref}>
            {before}
            {accent ? <span className="accent">{accent}</span> : null}
            {after}
          </a>
          {name ? <> <span className="app-header__app">· {name}</span></> : null}
        </h1>
        {children}
        {actions ? <div className="app-header__actions">{actions}</div> : null}
      </div>
      {subtitle ? <p className="app-header__subtitle">{subtitle}</p> : null}
      {hasMeta ? (
        <div className="app-header__meta">
          {typeof meta === 'string' ? <span className="muted">{meta}</span> : meta}
          {metaTools ? (
            <span className="app-header__meta-tools">
              {typeof metaTools === 'string' ? <span className="muted">{metaTools}</span> : metaTools}
            </span>
          ) : null}
        </div>
      ) : null}
    </header>
  )
}
