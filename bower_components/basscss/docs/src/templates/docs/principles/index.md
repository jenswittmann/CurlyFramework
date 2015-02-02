---
page: references.principles
---

<p class="h3">
  Basscss borrows many ideas from OOCSS while attempting to address common product design considerations through a balance of consistency and flexibility.
</p>

## Follow the Open/Closed Principle

Styles should be open for extension, but closed for modification.
Avoid styles that require overrides elsewhere or are highly specific to context.

## Design with Reuse in Mind

Abstract styles to their most essential form first.
Content-agnostic, modular styles allow for design flexiblity and have a longer lifespan.
Highly reusable styles can be widely adopted.
Always keep structural and thematic considerations separate, and
consider layout, interactions, states, and other properties in the most generalized way.

## Don’t Make Assumptions

Even if clear design decisions exist, don’t make assumptions in code too early.
Design is an iterative process, and building and maintaining good CSS can be an extremely time-intensive process.
Build trust and an understanding of the tools and design principles before committing to code.
Rely on base styles and utilities and defer pattern creation to your templating system as much as possible.

## Clarity over Cleverness

Simple, obvious styles are quicker to internalize, easier to use, and more widely adopted.
Avoid abstractions and unclear dependency chains created with preprocessors.
Avoid creating styles that have ambiguous applications or are rarely used.
Never optimize for the time it takes to type something in CSS –
this is something that preprocessors should not aim to solve.

## Balance Consistency with Flexibility

Styles should maintain consistency while allowing iterative design processes to thrive.
Scalable systems, such as typography, type scales, grids, white space scales, and color palettes,
should be limited and opinionated.
Complex implementations of these systems should be flexible and work independently of each other.

# Organizing Principles

Styles should be organized according to these high-level categories:

- Base Elements
- Immutable Utilities
- Layout Modules
- Color
- Components

Conceptually, these are based on smart defaults,
basic layout considerations, volatility, and cohesion.

## Base Elements

Base element styles should define native HTML elements such as headings, paragraphs, buttons, and forms in a systemic and opinionated way. This is the only place to style naked elements, and styles should avoid nesting.
Each style should reset and style one element –
use repetition in code when appropriate to aid in readability and comprehension.

Core typographical considerations, such as typefaces and type scale should be defined here.
Base-level element-derived utilities, such as a type scale based on headings, can be defined here.

These styles should not define thematic characteristics.
These styles should never or very rarely be overridden.
If overrides are commonly applied later in the source or in use,
these styles should be adjusted and made less opinionated.

## Immutable Utilities

Utilities provide the backbone for layout and, once set, should never be changed or extended.
Each utility should contain as few CSS properties as possible, generally just one or two.
Utilities should do one thing and do it well,
they should be simple and obvious to use,
and they should operate independently.

The values used for utilities, such as white space scales, may change over time,
but the utilities themselves and their naming conventions should not.

Utilities should not define thematic characteristics, such as colors and borders.

## Layout Modules

Layout modules imply relationships between elements and are often tied to various markup structures.
These include things like grid systems and the media object.
Once these are defined they should rarely be changed and carefully handled when they do.
Layout modules should operate independently of thematic styles,
be highly reusable, and conform to consistent design layout patterns.

## Color

The word _color_ is used loosely here to describe
the surface-level aspects of a design, including
colors, backgrounds, borders, shadows and other properties
that are decorative and highly likely to change over time.
They should be kept completely separate from structural styles,
and they should be applied directly to the elements they affect whenever possible.
Avoid parent selectors and contextual styles.

A suite of color utilities for common styles, such as foreground and background colors, borders, and transitions,
will allow for flexibility and future stylistic changes.

## Components

Components have high cohesion with HTML and Javascript.
That is, they are interdependent and inseparable.
Naming conventions and organization of components are highly dependent on
application architecture and templating engines.

Basscss is unopinionated in component implementation but suggests the utilization of folder structure and naming conventions similar to those proposed in
[BEM](http://bem.info) and [Suitcss](http://suitcss.github.io)
to clearly distinguish components from low-level styles.

Implementation aside, these general guidelines can help create components on top of Basscss:

- Components should follow the open/closed principle, and should not be defined early on, but created in a highly-reusable fashion once patterns arise.
- Base component structural styles should be clearly separated from related thematic extensions.
- For large, scalable applications, modifying existing components and introducing new components should follow a standardized process.
- With a small enough team, these are generally unnecessary.

# Naming Conventions

Avoid naming conventions that imply relationships to specific parts of a user interface.
Content-derived names discourage reuse and often result in bloated, duplicative code,
while limiting flexibility for solving design problems.
Functionally-derived names encourage reuse but create often unnecessary abstractions.
Presentational names promote wide reuse but require more coordination outside of the system.
Depending on the size, skill, and familiarity of the team, some naming conventions may work better than others.

Keep javascript selectors completely separate from stylistic ones and use a prefix convention, such as `.js-`, to denote them as being separate.

The naming conventions in Basscss are intentionally short and simple to promote
understanding, internalization, and clarity.
This simple, straightforward naming convention reflects the simplicity of the styles themselves.


