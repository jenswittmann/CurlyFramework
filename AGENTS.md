# AI Agent Instructions

> This file provides project-wide coding instructions for all AI coding assistants (GitHub Copilot, Claude Code, Cursor, Windsurf, Gemini, and others). Follow all rules below when reading, writing, or modifying any file in this repository.

---

## Project Overview

**CurlyFramework** — a standalone, lightweight, accessible, sustainable frontend framework combining Tachyons utility-first CSS with Alpine.js reactive components. Distributed via `git clone` or `npm i curlyframework` and consumed by CMS projects (MODX Revolution, Kirby, Statamic) — this repository does **not** contain a CMS installation itself.

**Key technology stack:**
- CSS: **CurlyFramework** (Tachyons fork + custom BEM partials, compiled via Dart Sass + Lightning CSS)
- JS: **Alpine.js v3** with plugins: focus, intersect, collapse, persist, ajax
- Consumers (outside this repo): **MODX Revolution** (Fenom templates, ContentBlocks, Gitify), **Kirby**, and **Statamic** (Antlers templates)

---

## Directory Structure

```
.                          # repo root = CurlyFramework theme/package root
├── resources/css/         # SCSS source files
│   ├── _vars.scss         # CSS custom properties & breakpoints
│   ├── _bundle.scss       # Tachyons + partials imports
│   ├── _a11y.scss         # Accessibility (skiplinks, ARIA)
│   ├── _btn.scss          # Button styles
│   ├── _form.scss         # Form styles
│   ├── _typo.scss         # Typography
│   ├── _contentblocks.scss # ContentBlocks-specific styles
│   ├── modx.scss          # MODX manager backend styling
│   └── style.scss         # Main entry point
├── resources/js/
│   └── bundle.js          # Alpine.js entry point
├── public/
│   ├── css/style.css      # Compiled CSS — committed, do not hand-edit
│   └── js/script.js       # Compiled JS — committed, do not hand-edit
├── index.html             # Jekyll homepage (front matter: layout, title, description, features)
├── docs/                  # Jekyll page content (samples.html, checklists.html)
├── _jekyll/                # Jekyll internals: _layouts/, _includes/ (used by docs/ and index.html), _site/ build output
├── demo/                  # Static demo/upload assets
├── package.json
└── readme.md
```

The MODX-specific concepts referenced below (Fenom templates, ContentBlocks chunks, Gitify) describe how **consumer projects** wire up CurlyFramework — those files (`chunks/`, `templates/`, `snippets/`, `site/_gitify/`) live in the CMS project repo, not here.

---

## CSS Classes

**Only use CSS classes that exist in `public/css/style.css`** — the compiled CurlyFramework stylesheet. Do not use Tailwind, Bootstrap, or any other external CSS framework. Do not invent class names.

### Available Utility Classes (Tachyons)

**Naming pattern:** `{property}{value}` — e.g. `pa3` = padding all 1rem, `mt2` = margin-top 0.5rem.

**Responsive suffixes:** none = all sizes (mobile-first base), `-s` = ≥30em, `-m` = ≥48em, `-l` = ≥60em. All cumulative (min-width), not exclusive ranges.

**Spacing scale (8px baseline):**

| Step | CSS Variable | Value |
|------|--------------|-------|
| 0 | `var(--spacing-0)` | 0 |
| 1 | `var(--spacing-1)` | 0.25rem (4px) |
| 2 | `var(--spacing-2)` | 0.5rem (8px) |
| 3 | `var(--spacing-3)` | 1rem (16px) |
| 4 | `var(--spacing-4)` | 2rem (32px) |
| 5 | `var(--spacing-5)` | 4rem (64px) |
| 6 | `var(--spacing-6)` | 8rem (128px) |
| 7 | `var(--spacing-7)` | 16rem (256px) |

- Padding: `pa/pl/pr/pt/pb/pv/ph` + number
- Margin: `ma/ml/mr/mt/mb/mv/mh` + number

**Type scale:**

| Class | CSS Variable | Size |
|-------|--------------|------|
| `.f1` | `var(--typo-1)` | 0.75rem |
| `.f2` | `var(--typo-2)` | 0.875rem |
| `.f3` | `var(--typo-3)` | 1rem |
| `.f4` | `var(--typo-4)` | 1.25rem |
| `.f5` | `var(--typo-5)` | 1.25rem |
| `.f6` | `var(--typo-6)` | 1.5rem |
| `.f7` | `var(--typo-7)` | 2rem |
| `.f8` | `var(--typo-8)` | 3rem |
| `.f9` | `var(--typo-9)` | 4rem |

**Colors:** text = class name (`blue`, `dark-gray`), bg = `bg-` prefix, border = `b--` prefix.

Grayscale: `black`, `near-black`, `dark-gray`, `mid-gray`, `gray`, `silver`, `light-silver`, `moon-gray`, `light-gray`, `near-white`, `white`.

Transparency: `black-90` … `black-05`, `white-90` … `white-10`.

Colors: `dark-red`, `red`, `orange`, `gold`, `yellow`, `purple`, `dark-pink`, `hot-pink`, `pink`, `dark-green`, `green`, `light-green`, `navy`, `dark-blue`, `blue`, `light-blue`, and `washed-*` variants.

**Display:** `dn`, `di`, `db`, `dib`, `flex`, `inline-flex`, `dg` (grid).

Example: `dn db-m` = hidden on mobile, block on ≥48em (and up, since `-m` is cumulative).

**Flexbox:** `flex-column`, `flex-row`, `flex-wrap`, `items-center`, `items-start`, `items-end`, `justify-center`, `justify-between`, `justify-around`, `flex-auto`, `flex-none`.

**Grid:** `cols-{n}` for column count, `cols-{n}-m` for responsive, `g{n}` for gap.

**Borders:** `ba/bt/br/bb/bl/bn` (sides), `bw0`–`bw5` (width), `b--solid/dashed/none`.

Border radius: `br0`–`br4`, `br-100`, `br-pill`. Directional: `br--top`, `br--bottom`, `br--left`, `br--right`.

**Position:** `static`, `relative`, `absolute`, `fixed`, `sticky` + `top-0`, `right-0`, `bottom-0`, `left-0`.

**Typography:** Weight `fw1`–`fw9`, `b`, `normal`. Alignment `tl`, `tr`, `tc`, `tj`. Transform `ttu`, `ttl`, `ttc`. Decoration `underline`, `no-underline`, `strike`. Line height `lh-solid` (1), `lh-title` (1.25), `lh-copy` (1.5).

**Visibility/opacity:** `o-0`–`o-100`, `v-hidden`, `v-visible`, `clip`, `clip-{s,m,l}` (responsive-only: visually-hidden-but-accessible starting at that breakpoint).

**Z-index:** `z-0`–`z-5`, `z-999`, `z-9999`, `z-max`.

**Hovers:** prefix color/bg class with `hover-` (e.g. `hover-bg-blue`, `hover-black`).

### Design Tokens

Scoped to `.curlyframework`. Use CSS custom properties for brand values:

- Brand colors: `--violet-5: #351788`
- Spacing: `--spacing-1` (6px) through `--spacing-8` (124px) mobile, scaling up to `--spacing-1` (8px) through `--spacing-8` (200px) at ≥48em
- Type scale: `--typo-1` (16px) through `--typo-5` (64px), same values at ≥48em
- Breakpoints: `--breakpoint-small` (30em), `--breakpoint-medium` (48em), `--breakpoint-large` (60em)
- Font: `--fontname: sans-serif`

### Custom Partials

Custom component classes follow BEM naming (`.component__element--modifier`). Key SCSS partials in `resources/css/`:

`_head.scss`, `_btn.scss`, `_form.scss`, `_typo.scss`, `_icons.scss`, `_contentblocks.scss`, `_animation.scss`, `_a11y.scss`, `_styling.scss`, `_mixins.scss`, `_reset.scss`

### Utility class ordering

When writing or editing a `class="..."` attribute, order the classes by category — not alphabetically, not in whatever order they were typed:

```
class="{component-specific classes} {position} {overflow} {display} {width/height} {font-size} {font-weight} {text color} {padding} {margin} {background color} {border, incl. radius} {transitions} {everything else}"
```

1. Component-specific / BEM classes — `.btn`, `.btn--rounded`, `.scrollsnap`, `.scrollsnap__item`, `.headline--bullet`, …
2. Position — `relative`, `absolute`, `top-0`, `z-1`, …
3. Overflow — `overflow-auto`, `overflow-hidden`, …
4. Display — `dn`, `flex`, `dg`, `flex-column`, `items-center`, `justify-between`, `cols-3-m`, …
5. Width/height — `w-100`, `h-100`, `mw8`, `aspect-ratio-16x9`, …
6. Font size — `f1`–`f9`
7. Font weight — `fw1`–`fw9`, `b`, `normal`
8. Text/font color — `blue`, `white`, …
9. Padding — `p3`, `pl3`, `ph7-m`, …
10. Margin — `m0`, `mb5`, …
11. Background color — `bg-white`, `bg-gray-5`, …
12. Border, incl. radius — `ba`, `bw2`, `b--dark-gray`, `br2`, …
13. Transitions — `transition-small`, …
14. Everything else — accessibility/behavioral utilities and anything not covered above

Apply this consistently regardless of the consuming templating language (Fenom, Kirby PHP, Antlers). It keeps class lists scannable and keeps diffs predictable when a class is added or changed. When touching an existing `class` attribute that doesn't follow this order, it's fine to leave unrelated classes alone rather than reordering the whole attribute as a drive-by change — but any classes you add or edit should land in their correct category slot.

### Nesting component modifier classes in SCSS

When a class only ever pairs with one specific component — never used standalone or with anything else — nest it inside that component's own SCSS rule with `&-suffix`, so the class name itself reflects the pairing:

```scss
.scrollsnap-dots {
    // ...

    // pairs with .scrollsnap-dots: turns the dots + scroll-marker-group off again
    // once a slider switches to a static grid at the medium breakpoint (desktop)
    &-none-m {
        @media (--breakpoint-medium) {
            scroll-marker-group: none;
        }
    }
}
```

`&-none-m` nested inside `.scrollsnap-dots { ... }` compiles to `.scrollsnap-dots-none-m` — the name makes the dependency on `.scrollsnap-dots` explicit, unlike a disconnected top-level name. Apply the same nesting for any new modifier/companion class that only makes sense alongside a specific component class, and update every usage across the consuming project's templates in the same change if you rename one.

---

## Templates (Fenom syntax)

This repository has no MODX templates itself, but `resources/css/modx.scss` styles the MODX manager backend, and this framework is designed to be consumed by **MODX Revolution** projects. Consumer projects use **Fenom** syntax (`.chunk.tpl` files, typically under `site/assets/tpl/cfb/chunks/`) — reference this section when working on such a consumer project. Do **not** use Blade, Antlers, Twig, or Smarty syntax.

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

## Figma Export Workflow

When asked to export a Figma design into code:

1. **Ask first, before starting:** which consumer system is this for (MODX Revolution, Kirby, or Statamic), and which Figma file and frame(s)/page(s) should be exported.
2. **Ignore the "Checkliste" frame/page** — it's a project checklist, not exportable design content.
3. **Group frames by shared name prefix:** frames sharing a common name prefix with a `Mobile`/`Desktop` suffix (or vice versa) are responsive variants of the *same* component — treat them as one component with breakpoint-specific styles, not two separate components.
4. **Export Figma variables to `resources/css/_vars.scss`:** design tokens (colors, spacing, type scale, breakpoints) defined as Figma variables become CSS custom properties in `_vars.scss`, matching the existing token structure.
5. **Export to the correct folder/path** for the target system — ask if it's unclear rather than guessing or dropping files at the repo root.
6. **Implement plain HTML/CSS only — do not add Alpine.js (or any other JS) interactivity**, even when the design shows something that looks interactive (tabs, filter chips, toggles, …). A static design file doesn't specify behavior; treat every element in it as presentational unless the user separately and explicitly asks for the interaction to be functional. If interactive behavior is genuinely wanted alongside a Figma-derived layout, wait for the user to ask for it as a separate, explicit step rather than assuming it from the visual design.

---

## JavaScript

All interactivity uses **Alpine.js v3**. Do not introduce other JS frameworks or libraries. Entry point: `resources/js/bundle.js`.

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
| `npm run minify:js` | Minify already-bundled `public/js/script.js` with Terser |
| `npm run purge` | Remove unused CSS from `style.css` |
| `npm run serve` | Start browser-sync server only |
| `npm run docs` | Serve the Jekyll docs site at `http://127.0.0.1:4000` (no `--livereload` — conflicts with CodeKit's own live-reload broadcaster) |
| `npx prettier --write .` | Format code |

**CSS pipeline:** Dart Sass compiles SCSS from `resources/css/` → `public/css/*.src.css`, then Lightning CSS post-processes with `--targets 'defaults' --custom-media --minify`.

**Source → Output mapping:**
- `resources/css/style.scss` → `public/css/style.css`
- `resources/css/print.scss` → `public/css/print.css`
- `resources/css/modx.scss` → `public/css/modx.css`
- `resources/js/bundle.js` → `public/js/script.js`

Compiled files in `public/css/` and `public/js/` are committed — they are the distributed assets.

**Dependency drift warning:** `package.json` doesn't pin `sass`/`lightningcss` versions. A fresh `npm install` in any consumer project (MODX, Kirby, Statamic) can pull newer releases that produce a different-but-equivalent compiled `public/css/*.css` (extra vendor prefixes, updated browserslist data) — expect a large, cosmetic-only diff the first time this happens, not a bug. Worse case: a `sass` release whose CLI (`node_modules/.bin/sass`) crashes with `Error [ERR_REQUIRE_ESM]`, because its bundled `chokidar` dependency went ESM-only in a newer major version. Prefer a tool that pins/vendors its own compiler (e.g. CodeKit, if the consumer project uses it) over the raw npm scripts for this reason. To verify a change compiles without a working CLI, use `sass`'s programmatic API instead: `node -e "require('fs').writeFileSync('/tmp/out.css', require('sass').compile('resources/css/style.scss').css)"`.

---

## Contributing back to this repo

An agent working in a **consumer project** (MODX Revolution, Kirby, Statamic, …) may find or make a change that's actually generic to CurlyFramework itself — a CSS bug fix, a new utility class, an accessibility improvement — not tied to that consumer's own content/templates.

**Whenever this happens, the agent must proactively flag it and ask whether the change should also be published as a PR here — the developer should not have to think of this or bring it up themselves.** Do this immediately after making (or discovering) such a change, not only if asked. A bug fix or a reusable utility is a good candidate; anything tied to that project's own business logic is not — don't ask about those.

Workflow once the developer agrees:

1. Clone this repo fresh into a scratch/temp location — don't assume a checkout already exists at some fixed path, since that won't hold in another environment.
2. If working in an existing local checkout instead, `git status` it first — it may already be sitting on an unrelated branch with its own uncommitted work. Never discard or bundle that into the new PR; `git stash push -u -m "..."` it aside so it survives untouched.
3. Branch off `main` (fetch/pull first), apply the change, `npm install`, and verify it actually compiles before committing — see the dependency drift warning above if the CLI doesn't cooperate.
4. Show the developer a preview (diff + proposed PR title/description) and get explicit confirmation before pushing or opening the PR — this is a public, shared-state action on an external repository, not a local edit.
5. Open the PR via `gh pr create` once confirmed.

---

## Screencasts for GitHub Documentation

**Whenever a change here (or in a consumer project) adds or meaningfully changes a user-facing feature, ask the developer whether they want to record a screencast of it for the GitHub documentation (README, PR description, wiki, …) — don't assume either way, ask per change.**

- Screencasts are recorded with **[Recordly](https://recordly.dev/)** (macOS screen recorder), producing `.mp4` files.
- GitHub attachments (issues, PRs, README, wiki) are capped at **10 MB** per file — a raw Recordly `.mp4` export is usually far larger and needs compressing to `.webm` before it can be attached.
- **ffmpeg** (`brew install ffmpeg` if not already installed) does the conversion. For a screen-recording-style source (static UI, text-heavy, no audio track), two-pass VP9 encoding hits a reliable target size; scale down from Recordly's native (often very high) resolution to 1080p at the same time:

  ```bash
  ffmpeg -y -i input.mp4 -vf "scale=1920:-2" -c:v libvpx-vp9 -b:v 900k -minrate 450k -maxrate 1200k \
    -deadline good -cpu-used 1 -row-mt 1 -an -pass 1 -passlogfile /tmp/ffmpeg2pass -f webm /dev/null
  ffmpeg -y -i input.mp4 -vf "scale=1920:-2" -c:v libvpx-vp9 -b:v 900k -minrate 450k -maxrate 1200k \
    -deadline good -cpu-used 1 -row-mt 1 -an -pass 2 -passlogfile /tmp/ffmpeg2pass output.webm
  ```

  Drop `-an` and add an Opus audio pass (`-c:a libopus -b:a 64k`) if the recording has narration/audio. Adjust `-b:v` (and/or the scale) down if the result is still over 10 MB, up if there's headroom — verify with `ls -la output.webm` after encoding, not just by eye.

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
- **Technical identifiers are always English, regardless of the project's editorial language** — filenames, template/component names, field/variable keys used as content accessors. Only user-facing text (Panel/manager labels, help text, rendered content) follows the project's own editorial language(s). E.g. a Kirby blueprint field, a MODX ContentBlocks field name, or a Statamic Antlers variable should all be keyed in English even on a German- or French-language site; the label shown to editors stays in that language.

---

## Accessibility & Design Principles

- **HTML/CSS first:** Solve with semantic HTML and CSS before reaching for JavaScript. Add Alpine.js only when interactivity genuinely requires it.
- **Native HTML first:** Prefer native elements (`<details>`, `<dialog>`, native form inputs/validation) over custom-built widgets — native elements ship accessibility, keyboard handling, and browser UI for free. Layer ARIA on top only where native semantics fall short.
- **Accessibility first, native-first:** All interactive components require proper ARIA attributes, keyboard navigation, and screen reader compatibility (WCAG 2.2) — but reach for native HTML semantics before custom ARIA patterns. Never omit ARIA roles, labels, or keyboard handling when a custom pattern is unavoidable.
- **Check contrast:** Verify color combinations meet WCAG 2.2 AA contrast ratios before using them.
- **Avoid overlays/sliders where possible:** Prefer static, in-flow content over modals, carousels, and sliders — they add complexity, accessibility risk, and JS weight for often-marginal UX benefit. Use only when the content genuinely needs it.
- **Avoid fixed-position elements where possible:** Fixed/sticky elements can break or obscure content at high browser zoom levels. Use sparingly (e.g. skip links, critical navigation), not by default.
- **Show code examples:** When proposing or documenting a pattern, include a working code example, not just a description.

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

- **CSS:** Only classes from the compiled styleguide (`public/css/style.css`). Never Tailwind, Bootstrap, or external frameworks.
- **Templates:** Match syntax to the target consumer system — Fenom for MODX Revolution, Antlers for Statamic, native Kirby PHP templates/Kirbytext for Kirby. Never mix syntaxes or use Blade/Twig/Smarty.
- **JS:** Alpine.js v3 only. No React, Vue, jQuery, or other libraries.
- **Accessibility first:** WCAG 2.2 — ARIA attributes, keyboard navigation, screen reader support on all interactive components.
- **Sustainability:** Minimize bundle size, prefer CSS-only solutions over JS where possible.
- **New dependencies** must align with accessibility and sustainability goals — prefer lightweight, well-maintained packages.
- **Assets:** Never convert SVG files to PNG. Keep icons/graphics as SVG.
- **Never hand-edit this framework's own vendored/build-managed files** (`public/css/*.css`, `public/js/script.js` — see Build Process) or a consumer system's own core/vendor directory (e.g. Kirby's `kirby/`, a MODX core install) — fix things in the project's own layer, or via a plugin/hook where the consumer system supports one.
- **Never commit credentials, sessions, or caches** — consumer-specific paths vary (Kirby's `site/accounts/`, `site/sessions/`, `site/cache/`; MODX/Statamic have their own equivalents) but the rule is universal: check the consumer project's own `.gitignore` covers these, don't force-add them.
- **A content/data directory must never be directly web-accessible** — verify the consumer project's web server config (Kirby's `content/` `.htaccess` block, or the equivalent for MODX/Statamic) blocks direct requests to raw content files.
- **Escape all dynamic output** — treat every field value and request parameter as untrusted until escaped or validated, regardless of templating language (Fenom, Kirby PHP, Antlers).
