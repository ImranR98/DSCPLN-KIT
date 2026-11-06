# DSCPLN-KIT

Shared building blocks for the D$CPLN family of self-hosted apps:

| Package | Purpose |
|---|---|
| `@dscpln/ui-kit` | React components, brand/theme tokens, formatting helpers and the shared Vite config |
| `@dscpln/server-kit` | Express app factory, config/state stores, scheduler, runner and notifier |
| `@dscpln/test-kit` | Ephemeral servers, temp dirs, polling and optional browser helpers |

Apps include this repository as a git submodule at `kit/` and depend on the
packages with `file:./kit/packages/<name>`.

## Brands

`@dscpln/ui-kit` ships four accent palettes. An app sets
`<html data-brand="...">` before first paint and passes the matching brand to
`AppHeader`:

| Brand | Display | Accent |
|---|---|---|
| `dscpln` | `D$CPLN` | blue |
| `watxt` | `W@TXT` | green |
| `fl0w` | `FL0W` | purple |
| `da5h` | `DA5H` | red |

```jsx
import { AppHeader, getBrand } from '@dscpln/ui-kit'

<AppHeader brand={getBrand('fl0w')} name="Jobs" />
```

## Development

```sh
npm install
npm run lint
npm test
```

Changes here are consumed by every app. Run each app's test suite after
updating the kit submodule; the apps pin a specific kit commit.
