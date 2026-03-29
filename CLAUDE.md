# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

CurlyFramework is a lightweight frontend framework for accessibility and sustainability, designed to work with CMS solutions like MODX and Kirby. It combines Tachyons (custom fork) utility-first CSS with Alpine.js reactive components. Published to npm as `curlyframework`.

Website: https://curlyframe.work
GitHub: https://github.com/jenswittmann/CurlyFramework

## Build Process

SCSS compilation and JS bundling are handled by **CodeKit** (macOS app). Additionally, npm scripts are available for SCSS compilation (via Dart Sass) and CSS post-processing (via Lightning CSS). Source files live in `/dev`, compiled output goes to `/styleguide`.

- **Full production build (CSS + JS):** `npm run build`
- Compile SCSS only: `npm run scss`
- Compile SCSS + process with Lightning CSS (no minify, dev): `npm run compile`
- Run Lightning CSS only on `.src.css` files (no sass step): `npm run compile:css`
- Compile SCSS + minify with Lightning CSS: `npm run lcss`
- Bundle + minify JS from source (fallback if CodeKit unavailable): `npm run bundle:js`
- Minify already-bundled JS only: `npm run minify:js`
- Remove unused CSS: `npm run purge`
- Start browser-sync server only (no watching): `npm run serve`
- Dev server with hot reload (CSS + JS watch): `npm run dev`
- Format code: `npx prettier --write .`
- Install dependencies: `npm install`

Compiled files in `/styleguide/css/` and `/styleguide/js/` should be committed — they are the distributed assets.

## Architecture

**Source → Output mapping:**
- `dev/css/style.scss` → `styleguide/css/style.css` (main stylesheet, ~165KB compiled)
- `dev/css/print.scss` → `styleguide/css/print.css`
- `dev/css/modx.scss` → `styleguide/css/modx.css`
- `dev/js/bundle.js` → `styleguide/js/script.js` (Alpine.js + plugins, ~62KB compiled)

**SCSS structure in `dev/css/`:**
- `_vars.scss` — CSS custom properties, breakpoints (`small: 30em`, `medium: 48em`, `large: 60em`), responsive scaling
- `_bundle.scss` — imports Tachyons + all custom modules
- `_a11y.scss` — skiplinks, reduced-motion, ARIA patterns
- `_mixins.scss` — reusable SCSS helpers
- `_typo.scss` — typography utilities (`--typo-1` through `--typo-5`)
- `_form.scss`, `_animation.scss` — component-specific modules

**JS (`dev/js/bundle.js`):** Initializes Alpine.js with plugins: `@alpinejs/collapse`, `@alpinejs/focus`, `@alpinejs/intersect`, `@alpinejs/persist`.

**`index.html`** (root) is both the primary documentation and the demo page.

## Coding Conventions

- **Indentation:** 4 spaces for CSS, JS, JSON; 2 spaces for Markdown and YAML
- **Quotes:** Single quotes in JS/CSS
- **Line endings:** LF
- **CSS naming:** kebab-case with BEM patterns (`.component__element--modifier`)
- **SCSS partials:** underscore prefix (`_filename.scss`)
- **JS:** camelCase variables/functions, PascalCase classes
- **CSS custom properties:** kebab-case (`--animation-time-small`)
- **Commit messages:** Conventional commits — `feat:`, `fix:`, `docs:`, `release:`, `chore:`

## Key Constraints

- **Accessibility first:** All components require proper ARIA attributes, keyboard navigation, and screen reader compatibility (WCAG 2.2).
- **Sustainability:** Minimize bundle size, prefer CSS-only solutions over JS when possible, avoid heavy dependencies.
- **New dependencies** must align with accessibility and sustainability goals — prefer lightweight, well-maintained packages.
- **CSS classes:** Only use classes from the compiled styleguide (`styleguide/css/`). Do not use Tailwind, Bootstrap, or any other external CSS framework.

## Tachyons CSS Reference

Tachyons is a functional/atomic CSS framework providing single-purpose utility classes. Classes are composed directly in HTML — no custom CSS needed for most styling. Mobile-first, ~14kB, optimized for gzip compression.

### Naming Pattern

`{property}{value}` or `{property}{direction}{value}` — e.g. `pa3` = padding-all 1rem, `mt2` = margin-top 0.5rem, `f4` = font-size 1.25rem.

### Responsive Suffixes

| Suffix | Breakpoint |
|--------|------------|
| (none) | All (mobile-first base) |
| `-ns` | ≥30em (not small) |
| `-m` | 30em–60em (medium only) |
| `-l` | ≥60em (large and up) |

Example: `dn db-ns` = hidden on mobile, block on medium+

### Spacing Scale (8px baseline)

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

Padding: `pa`, `pl`, `pr`, `pt`, `pb`, `pv` (vertical), `ph` (horizontal) + scale number
Margin: `ma`, `ml`, `mr`, `mt`, `mb`, `mv`, `mh` + scale number

### Type Scale

| Class | Size (`:root` default) |
|-------|----------------------|
| `.f1` | 0.75rem |
| `.f2` | 0.875rem |
| `.f3` | 1rem |
| `.f4` | 1.25rem |
| `.f5` | 1.25rem |
| `.f6` | 1.5rem |
| `.f7` | 2rem |

Note: inside `.curlyframework`, `--typo-1`–`--typo-5` are overridden to `1rem`, `1.25rem`, `1.5rem`, `2rem`, `4rem`. The scale also extends to `--typo-12` (12rem).

### Width Scale

Fixed (powers of 2): `w1`–`w5` (1rem–16rem)
Percentage: `w-10`, `w-20`, `w-25`, `w-33`, `w-50`, `w-75`, `w-100`, `w-third`, `w-two-thirds`, `w-auto`

### Color System

Grayscale: `black`, `near-black`, `dark-gray`, `mid-gray`, `gray`, `silver`, `light-silver`, `moon-gray`, `light-gray`, `near-white`, `white`
Transparency: `black-90` … `black-05`, `white-90` … `white-10`
Colors: `dark-red`, `red`, `orange`, `gold`, `yellow`, `purple`, `dark-pink`, `hot-pink`, `pink`, `dark-green`, `green`, `light-green`, `navy`, `dark-blue`, `blue`, `light-blue`, and `washed-*` variants

- Text color: class name directly (e.g. `blue`, `dark-gray`)
- Background: `bg-` prefix (e.g. `bg-blue`)
- Border color: `b--` prefix (e.g. `b--dark-gray`)

### Common Classes

**Display:** `dn`, `di`, `db`, `dib`, `flex`, `inline-flex`

**Flexbox:** `flex-column`, `flex-row`, `flex-wrap`, `items-center`, `items-start`, `items-end`, `justify-center`, `justify-between`, `justify-around`, `flex-auto`, `flex-none`

**Position:** `static`, `relative`, `absolute`, `fixed`, `sticky` + coordinates `top-0`, `right-0`, `bottom-0`, `left-0`

**Border radius:** `br0`–`br4`, `br-100` (circle), `br-pill`
Directional: `br--top`, `br--bottom`, `br--left`, `br--right`

**Borders:** Width `bw0`–`bw5` · Style `b--solid`, `b--dashed`, `b--none` · Sides `ba`, `bt`, `br`, `bb`, `bl`, `bn`

**Typography:** Weight `fw1`–`fw9`, `b`, `normal` · Alignment `tl`, `tr`, `tc`, `tj` · Transform `ttu`, `ttl`, `ttc` · Decoration `underline`, `no-underline`, `strike` · Line height `lh-solid` (1), `lh-title` (1.25), `lh-copy` (1.5)

**Visibility:** Opacity `o-0`–`o-100` · `v-hidden`, `v-visible`, `clip`

**Z-index:** `z-0`–`z-5`, `z-999`, `z-9999`, `z-max`

**Hovers:** Prefix any color/bg class with `hover-` (e.g. `hover-bg-blue`, `hover-black`)

### Usage Examples

See [index.html](index.html) for the full component demo and documentation.

```html
<!-- Skiplinks -->
<ul class="skiplinks">
    <li><a href="#main">main content</a></li>
</ul>

<!-- Button -->
<button
    @click="open = !open"
    :aria-pressed="open"
    class="pointer p1 ph4-m pv3-m bg-transparent ba b--inherit br-100 transition-small"
>
    <span class="clip">Label</span>
</button>

<!-- Button with visible text + icon -->
<button
    @click="open = true"
    :aria-expanded="open"
    aria-controls="popup"
    class="btn pointer p0 bg-transparent bn"
>
    <span class="bb">open <span aria-hidden="true">⇢</span></span>
</button>

<!-- Modal (Alpine.js x-trap for focus) -->
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
