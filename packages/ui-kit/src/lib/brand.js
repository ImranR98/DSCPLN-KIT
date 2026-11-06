// Brand descriptors for the D$CPLN family. The stylized character is rendered
// with the accent colour; the CSS palettes live in app.css keyed by data-brand.

export const BRANDS = {
  dscpln: { id: 'dscpln', name: 'D$CPLN', accentChar: '$' },
  watxt: { id: 'watxt', name: 'W@TXT', accentChar: '@' },
  fl0w: { id: 'fl0w', name: 'FL0W', accentChar: '0' },
  da5h: { id: 'da5h', name: 'DA5H', accentChar: '5' },
}

export function getBrand(id = 'dscpln') {
  return BRANDS[id] ?? BRANDS.dscpln
}

// Split a brand name around its accent character so AppHeader can wrap only
// that character in the accent span. Unknown characters leave the name whole.
export function splitBrand(brand = getBrand()) {
  const name = String(brand.name ?? BRANDS.dscpln.name)
  const char = String(brand.accentChar ?? '')
  const index = char ? name.indexOf(char) : -1
  if (index === -1) return { before: name, accent: '', after: '' }
  return {
    before: name.slice(0, index),
    accent: char,
    after: name.slice(index + char.length),
  }
}

// Set the palette before React mounts. Safe to call in tests and non-browser
// environments.
export function applyBrand(id = 'dscpln') {
  const brand = getBrand(id)
  if (typeof document !== 'undefined') {
    document.documentElement.dataset.brand = brand.id
  }
  return brand
}
