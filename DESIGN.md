# DESIGN.md — DikaCode

Direction for the DikaCode site. This is the source of identity; `antislop.md`
is the filter applied on top. `antislop.md` removes what should not be there,
this file fills the space that leaves.

## Identity

DikaCode is one developer, working in the open, shipping tools and sites by
hand. The site should read like a careful engineering notebook, not a startup
landing page: honest, dense with real work, and calm.

- **Personality:** precise, plain-spoken, a little dry. No hype, no decoration
  that carries no meaning.
- **Audience:** Indonesian founders, UMKM owners, and developers who want
  something built or fixed, plus the open-source crowd reading the projects.
- **Feeling:** a clean drafting table. Everything in its place, nothing extra.

## Visual language

A restrained developer-tool canvas: light by default, thin 1px lines instead of
shadows, tight display type, and a single accent used at the one moment it
matters. Clean is the baseline, not the goal.

### Palette (2 cores + 1 accent)

| Role | Light | Dark | Use |
|---|---|---|---|
| Canvas | `#ffffff` | `#000000` | page background |
| Panel | `#fafafa` | `#0a0a0a` | alternating sections, wells |
| Ink | `#171717` | `#ededed` | headings, body |
| Mute | `#4d4d4d` | `#a1a1a1` | secondary text |
| Faint | `#666666` | `#888888` | labels, meta |
| Line | `#ebebeb` | `#262626` | 1px separators |
| Accent | `#0070f3` | `#3291ff` | links, active state, the one focal moment |

Neutral greys do not count against the palette cap. The accent appears on links
and the active FAQ item only, never spread across every element.

### Type

- **Geist** for display and body. Reason: it holds up at small sizes, reads
  clean in both themes, and its tight, even rhythm suits a developer-tool voice.
- **Geist Mono** for labels and numbers. Reason: it marks metadata (section
  eyebrows, prices, status) apart from prose and echoes the CLI projects the
  site is about. It is a labelling voice, not a decorative "terminal" costume.

### Surfaces

- **Border as shadow:** a 1px ring (`box-shadow: 0 0 0 1px`) is the elevation
  marker. Real shadows are a whisper, used only on cards that sit above the page.
- **Radius:** 6px buttons, 8px cards, full only on pills. Radius is a hierarchy
  tool, not a uniform default.
- **Separators:** 1px lines between sections, not alternating background alone.

## Dials

`Dial: ENERGY 2 / RHYTHM 2 / MOTION 2`

- **ENERGY 2** — confident and clear, closer to Stripe than to an agency site.
  One focal point per screen; the rest defers.
- **RHYTHM 2** — consistent sections with deliberate breaks. Not every section
  is an eyebrow plus a card grid; the split layouts and the honest notes break
  the pattern on purpose.
- **MOTION 2** — scroll-reveal and hover transitions, matched to purpose. No
  endless decorative loops beyond the hero typewriter, which carries the bio.

## Identity motif

Repeated, specific gestures that make the site recognisably DikaCode:

- The square "D" mark beside the wordmark.
- Uppercase mono labels (the "eyebrow" voice) naming each block.
- Compressed display tracking on headings.
- 1px hairline separators and border-as-shadow surfaces.
- Plain, honest Indonesian copy in a consistent first-person voice.

## What this file does not do

It does not prescribe a gradient, a glow, or a glass surface. Those stay out
unless a later brief adds them with a written reason.
