# AI Agent Instructions

> This file provides project-wide coding instructions for all AI coding assistants (GitHub Copilot, Claude Code, Cursor, Windsurf, Gemini, and others). Follow all rules below when reading, writing, or modifying any file in this repository.

---

## Project Overview

**CurlyFramework** — a standalone, lightweight, accessible, sustainable frontend framework combining Tachyons utility-first CSS with Alpine.js reactive components. Distributed via `git clone` or `npm i curlyframework` and consumed by CMS projects (MODX Revolution, Kirby) — this repository does **not** contain a CMS installation itself.

**Key technology stack:**
- CSS: **CurlyFramework** (Tachyons fork + custom BEM partials, compiled via Dart Sass + Lightning CSS)
- JS: **Alpine.js v3** with plugins: focus, intersect, collapse, persist, ajax
- Consumers (outside this repo): **MODX Revolution** (Fenom templates, ContentBlocks, Gitify) and **Kirby**

---

## Directory Structure

```
.                          # repo root = CurlyFramework theme/package root
├── dev/css/               # SCSS source files
│   ├── _vars.scss         # CSS custom properties & breakpoints
│   ├── _bundle.scss       # Tachyons + partials imports
│   ├── _a11y.scss         # Accessibility (skiplinks, ARIA)
│   ├── _btn.scss          # Button styles
│   ├── _form.scss         # Form styles
│   ├── _typo.scss         # Typography
│   ├── _contentblocks.scss # ContentBlocks-specific styles
│   ├── modx.scss          # MODX manager backend styling
│   └── style.scss         # Main entry point
├── dev/js/
│   └── bundle.js          # Alpine.js entry point
├── styleguide/
│   ├── css/style.css      # Compiled CSS — committed, do not hand-edit
│   └── js/script.js       # Compiled JS — committed, do not hand-edit
├── demo/                  # Static demo/styleguide pages
├── package.json
└── readme.md
```

The MODX-specific concepts referenced below (Fenom templates, ContentBlocks chunks, Gitify) describe how **consumer projects** wire up CurlyFramework — those files (`chunks/`, `templates/`, `snippets/`, `site/_gitify/`) live in the CMS project repo, not here.

---

## CSS Classes

**Only use CSS classes that exist in `frontend/styleguide/css/style.css`** — the compiled CurlyFramework stylesheet. Do not use Tailwind, Bootstrap, or any other external CSS framework. Do not invent class names.

### Available Utility Classes (Tachyons)

**Naming pattern:** `{property}{value}` — e.g. `pa3` = padding all 1rem, `mt2` = margin-top 0.5rem.

**Responsive suffixes:** none = all sizes, `-ns` = ≥30em, `-m` = ≥48em, `-l` = ≥120em.

**Spacing scale (8px baseline):**

| Step | Value |
|------|-------|
| 0 | 0 |
| 1 | 0.25rem (4px) |
| 2 | 0.5rem (8px) |
| 3 | 1rem (16px) |
| 4 | 2rem (32px) |
| 5 | 4rem (64px) |
| 6 | 8rem (128px) |
| 7 | 16rem (256px) |

- Padding: `pa/pl/pr/pt/pb/pv/ph` + number
- Margin: `ma/ml/mr/mt/mb/mv/mh` + number

**Type scale:**

| Class | Size |
|-------|------|
| `.f1` | 0.75rem |
| `.f2` | 0.875rem |
| `.f3` | 1rem |
| `.f4` | 1.25rem |
| `.f5` | 1.25rem |
| `.f6` | 1.5rem |
| `.f7` | 2rem |

**Colors:** text = class name (`blue`, `dark-gray`), bg = `bg-` prefix, border = `b--` prefix.

Grayscale: `black`, `near-black`, `dark-gray`, `mid-gray`, `gray`, `silver`, `light-silver`, `moon-gray`, `light-gray`, `near-white`, `white`.

Transparency: `black-90` … `black-05`, `white-90` … `white-10`.

Colors: `dark-red`, `red`, `orange`, `gold`, `yellow`, `purple`, `dark-pink`, `hot-pink`, `pink`, `dark-green`, `green`, `light-green`, `navy`, `dark-blue`, `blue`, `light-blue`, and `washed-*` variants.

**Display:** `dn`, `di`, `db`, `dib`, `flex`, `inline-flex`, `dg` (grid).

Example: `dn db-m` = hidden on mobile, block on ≥48em.

**Flexbox:** `flex-column`, `flex-row`, `flex-wrap`, `items-center`, `items-start`, `items-end`, `justify-center`, `justify-between`, `justify-around`, `flex-auto`, `flex-none`.

**Grid:** `cols-{n}` for column count, `cols-{n}-m` for responsive, `g{n}` for gap.

**Borders:** `ba/bt/br/bb/bl/bn` (sides), `bw0`–`bw5` (width), `b--solid/dashed/none`.

Border radius: `br0`–`br4`, `br-100`, `br-pill`. Directional: `br--top`, `br--bottom`, `br--left`, `br--right`.

**Position:** `static`, `relative`, `absolute`, `fixed`, `sticky` + `top-0`, `right-0`, `bottom-0`, `left-0`.

**Typography:** Weight `fw1`–`fw9`, `b`, `normal`. Alignment `tl`, `tr`, `tc`, `tj`. Transform `ttu`, `ttl`, `ttc`. Decoration `underline`, `no-underline`, `strike`. Line height `lh-solid` (1), `lh-title` (1.25), `lh-copy` (1.5).

**Visibility/opacity:** `o-0`–`o-100`, `v-hidden`, `v-visible`, `clip`.

**Z-index:** `z-0`–`z-5`, `z-999`, `z-9999`, `z-max`.

**Hovers:** prefix color/bg class with `hover-` (e.g. `hover-bg-blue`, `hover-black`).

### Design Tokens

Scoped to `.curlyframework`. Use CSS custom properties for brand values:

- Brand colors: `--yellow-5: #ffdd00`, `--yellow-8: #fff6c3`, `--gray-5: #55514b`
- Spacing: `--spacing-1` (5px) through `--spacing-8` (120px), responsive at ≥48em
- Type scale: `--typo-1` (12px) through `--typo-6` (27px), responsive at ≥48em
- Breakpoints: `--breakpoint-small` (30em), `--breakpoint-medium` (48em), `--breakpoint-large` (120em)
- Max widths: `--max-width-8` (70rem), `--max-width-9` (105rem)
- Border radius: `--border-radius-1`–`--border-radius-3` (responsive)
- Header height: `--head-height` (4.7rem mobile / 10rem desktop)
- Font: `--fontname: 'sofia-sans', sans-serif`

### Custom Partials

Custom component classes follow BEM naming (`.component__element--modifier`). Key SCSS partials in `frontend/dev/css/`:

`_head.scss`, `_btn.scss`, `_form.scss`, `_typo.scss`, `_icons.scss`, `_contentblocks.scss`, `_animation.scss`, `_a11y.scss`, `_styling.scss`, `_mixins.scss`, `_reset.scss`

---

## Templates (Fenom syntax)

This repository has no MODX templates itself, but `dev/css/modx.scss` styles the MODX manager backend, and this framework is designed to be consumed by **MODX Revolution** projects. Consumer projects use **Fenom** syntax (`.chunk.tpl` files, typically under `site/assets/tpl/cfb/chunks/`) — reference this section when working on such a consumer project. Do **not** use Blade, Antlers, Twig, or Smarty syntax.

### Fenom syntax reference

```tpl
{* comment *}

{var $isImage = $url != ''}

{if $isImage}
    ...
{elseif $other}
    ...
{else}
    ...
{/if}

{foreach $items as $item}
    {$item.title}
{/foreach}

{* Call a chunk with parameters *}
{'chunkName' | chunk : [
    'param1' => $value,
    'param2' => 'string'
]}

{* MODX placeholders and resource fields *}
{$_modx->resource.pagetitle}
{$_modx->config.site_name}
{$_modx->config.tplPath}
{$_modx->makeUrl($id)}
{$_modx->hasSessionContext('mgr')}
{$_modx->getPlaceholder('key')}

{* Fenom modifiers *}
{$value | jolitypo}
{$value | htmlent}
{$array.key}
{$array.key ?: 'fallback'}
```

### ContentBlocks field data

ContentBlocks field content is accessed via `$settings` (field settings object) and `$fieldContent`. Image crops are available as `$crops.CropName.url`.

```tpl
{$settings.title}
{$settings.subtitle}
{$settings.link}
{var $crops = $settings.crops}
{var $imageMobile = $crops.Mobile}
{$imageMobile.url}
```

### Template file locations (in a consumer MODX project, not this repo)

- Layout: `site/assets/tpl/cfb/chunks/layout/head.chunk.tpl`, `foot.chunk.tpl`
- ContentBlocks fields: `site/assets/tpl/cfb/chunks/contentblocks/*.chunk.tpl`
- MODX page templates: `site/assets/tpl/cfb/templates/`

---

## JavaScript

All interactivity uses **Alpine.js v3**. Do not introduce other JS frameworks or libraries. Entry point: `frontend/dev/js/bundle.js`.

Available Alpine plugins:
- `@alpinejs/focus` (`x-trap`)
- `@alpinejs/intersect` (`x-intersect`)
- `@alpinejs/collapse` (`x-collapse`)
- `@alpinejs/persist` (`$persist`)
- `@imacrayon/alpine-ajax` (AJAX form/link handling)

---

## Build Process

Run all build commands from the repo root.

| Command | What it does |
|---------|-------------|
| `npm run build` | Full production build: compile + minify CSS and JS |
| `npm run dev` | Watch CSS + JS + browser-sync hot reload |
| `npm run lcss` | Compile SCSS + Lightning CSS with minification (CSS production) |
| `npm run scss` | Compile SCSS only |
| `npm run compile` | Compile SCSS + Lightning CSS without minify (dev use) |
| `npm run bundle:js` | Bundle JS with esbuild + minify with Terser |
| `npm run minify:js` | Minify already-bundled `styleguide/js/script.js` with Terser |
| `npm run purge` | Remove unused CSS from `style.css` |
| `npm run serve` | Start browser-sync server only |
| `npm run docs` | Serve the Jekyll docs site at `http://127.0.0.1:4000` (no `--livereload` — conflicts with CodeKit's own live-reload broadcaster) |
| `npx prettier --write .` | Format code |

**CSS pipeline:** Dart Sass compiles SCSS from `dev/css/` → `styleguide/css/*.src.css`, then Lightning CSS post-processes with `--targets 'defaults' --custom-media --minify`.

**Source → Output mapping:**
- `dev/css/style.scss` → `styleguide/css/style.css`
- `dev/css/print.scss` → `styleguide/css/print.css`
- `dev/css/modx.scss` → `styleguide/css/modx.css`
- `dev/js/bundle.js` → `styleguide/js/script.js`

Compiled files in `styleguide/css/` and `styleguide/js/` are committed — they are the distributed assets.

---

## Coding Conventions

- **Indentation:** 4 spaces for CSS, JS, JSON; 2 spaces for Markdown and YAML
- **Quotes:** Single quotes in JS/CSS
- **Line endings:** LF
- **CSS naming:** kebab-case with BEM patterns (`.component__element--modifier`)
- **SCSS partials:** underscore prefix (`_filename.scss`)
- **JS:** camelCase variables/functions, PascalCase classes
- **CSS custom properties:** kebab-case (`--animation-time-small`)
- **Commit messages:** Conventional commits — `feat:`, `fix:`, `docs:`, `release:`, `chore:`

---

## Accessibility

All interactive components require proper ARIA attributes, keyboard navigation, and screen reader compatibility (WCAG 2.2). Accessibility is a first-class constraint — never omit ARIA roles, labels, or keyboard handling.

---

## Component Patterns

```html
<!-- Skiplinks -->
<ul class="skiplinks">
    <li><a href="#main">main content</a></li>
</ul>

<!-- Button with icon only -->
<button
    @click="open = !open"
    :aria-pressed="open"
    class="pointer p1 ph4-m pv3-m bg-transparent ba b--inherit br-100 transition-small"
>
    <span class="clip">Label</span>
</button>

<!-- Button with visible text -->
<button
    @click="open = true"
    :aria-expanded="open"
    aria-controls="popup"
    class="btn pointer p0 bg-transparent bn"
>
    <span class="bb">open <span aria-hidden="true">⇢</span></span>
</button>

<!-- Modal (x-trap for focus lock) -->
<div x-data="{ open: false }">
    <button @click="open = true" :aria-expanded="open" aria-controls="popup" class="btn pointer p0 bg-transparent bn">
        <span class="bb">open <span aria-hidden="true">⇢</span></span>
    </button>
    <div x-cloak x-transition x-show="open" @click="open = false" class="fixed top-0 left-0 right-0 bottom-0 bg-blur"></div>
    <div
        x-cloak x-transition x-trap.inert.noscroll="open" x-show="open"
        @keyup.escape.window="open = false"
        id="popup" aria-modal="true" role="dialog"
        class="fixed top-0 right-0 bottom-0 z-max w-80 w-third-m p3 p5-m"
    >
        <button @click="open = false" class="btn pointer p0 bg-transparent bn">
            <span class="bb">close <span aria-hidden="true">×</span></span>
        </button>
    </div>
</div>

<!-- Accordion (native details element) -->
<details x-data="{ open: false }" @toggle="open = $el.open" class="w-100 mb1 ba">
    <summary class="pointer flex justify-between w-100 p2 bg-transparent bn">
        <span>Accordion title</span>
        <span :class="{ 'rotate-180': open }" aria-hidden="true" class="transition-small">⇣</span>
    </summary>
    <p class="p2 m0 bt">Answer text.</p>
</details>

<!-- Tabs -->
<div x-data="{ tabs: 3, selected: 1 }">
    <div @keydown.right.prevent.stop="$focus.wrap().next()" @keydown.left.prevent.stop="$focus.wrap().prev()" role="tablist" class="list flex p0 m0">
        <template x-for="i in tabs">
            <button @click="selected = i" :id="`tab${i}`" :tabindex="selected == i ? 0 : -1"
                :aria-selected="selected == i" :aria-controls="`tabcontent${i}`" role="tab" class="btn btn--clean">
                Tab <span x-text="i"></span>
            </button>
        </template>
    </div>
    <template x-for="i in tabs">
        <section x-show="selected == i" :id="`tabcontent${i}`" :aria-labelledby="`tab${i}`" role="tabpanel" class="p3">
            Content <span x-text="i"></span>
        </section>
    </template>
</div>

<!-- Form field -->
<div class="form__item">
    <label for="name" class="form__label">
        Name
        <span aria-hidden="true">*</span>
        <span class="clip">(required)</span>
    </label>
    <div class="form__field form__field--input">
        <input type="text" name="name" id="name" required />
    </div>
</div>

<!-- Checkbox -->
<div class="form__item">
    <div class="form__field form__field--checkbox">
        <input type="checkbox" name="accept" id="accept" value="yes" required />
        <label for="accept" class="form__label">
            <span>I agree. <span aria-hidden="true">*</span><span class="clip">(required)</span></span>
        </label>
    </div>
</div>

<!-- Live region for form status -->
<div x-ref="message" aria-live="assertive" role="status" class="form__message">
    <p class="b p2 ba bw2 br2 mb3">Success</p>
</div>

<!-- Responsive grid -->
<ul class="dg cols-2 cols-4-m g2 list p0 m0">
    <template x-for="item in items">
        <li class="ba br2 aspect-ratio-square">
            <span class="flex justify-center items-center h-100"></span>
        </li>
    </template>
</ul>

<!-- Richtext content block -->
<div class="richtext">
    <h4>Headline</h4>
    <p>A <strong>paragraph</strong> with a <a href="#">link</a>.</p>
</div>
```

---

## Key Constraints

- **CSS:** Only classes from the compiled styleguide (`frontend/styleguide/css/style.css`). Never Tailwind, Bootstrap, or external frameworks.
- **Templates:** Fenom syntax only. Never Blade, Antlers, Twig, or Smarty.
- **JS:** Alpine.js v3 only. No React, Vue, jQuery, or other libraries.
- **Accessibility first:** WCAG 2.2 — ARIA attributes, keyboard navigation, screen reader support on all interactive components.
- **Sustainability:** Minimize bundle size, prefer CSS-only solutions over JS where possible.
- **New dependencies** must align with accessibility and sustainability goals — prefer lightweight, well-maintained packages.
- **Assets:** Never convert SVG files to PNG. Keep icons/graphics as SVG.
