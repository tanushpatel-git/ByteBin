# ByteBin visual design

This file is the source of truth for the ByteBin website theme. The homepage is inspired by the supplied Susan Kare portfolio screenshot: a sky-blue backdrop, bold editorial typography, tiny desktop-style details, pixel motifs, and warm paper sections. Carry the visual language forward without copying the reference's identity or exact layout.

## Brand character

- **Playful, resourceful, maker-first.** ByteBin should feel like a small independent toolbox made by people who enjoy making things.
- **Editorial, not corporate.** Use strong statements, concise copy, asymmetry, and generous breathing room.
- **Retro computer details, modern usability.** Pixel-inspired motifs and window chrome can decorate the interface; navigation and controls remain clear and accessible.

## Palette

| Token | Value | Use |
| --- | --- | --- |
| Sky | `#ACD8EA` | Primary canvas and hero |
| Ink | `#121719` | Main text, rules, and high-contrast controls |
| Paper | `#F2EFE6` | Editorial story panels |
| Soft paper | `#E8E5DA` | Tool list backgrounds |
| Blue | `#83C5DF` | Interface highlights |
| Coral | `#E45E3B` | Emphasis and small status accents |
| Pixel gold | `#E9B83F` | Decorative pixel art |
| Preview peach | `#F3D9C8` | Workspace preview panel |
| Muted | `#52636A` | Supporting text |

Use CSS custom properties in `client/src/app/globals.css` as the implementation tokens. Keep large color fields calm; reserve coral and gold for small emphasis.

## Type and hierarchy

- Use the existing Geist Sans / Geist Mono fonts where practical, with system sans fallbacks.
- Display headlines are uppercase, very bold, tightly tracked, and set on short lines. Use `clamp()` so their size responds to the viewport.
- Use the mono face for navigation, section labels, metadata, status indicators, and tiny interface labels. Keep these labels readable and avoid using all caps for body copy.
- Body copy should be short, conversational, and comfortably line-spaced.

## Layout and components

- Favor open page-width sections, a restrained content width, and thin ink rules over rounded cards and gradients.
- Build an editorial rhythm: blue hero, warm paper story, muted toolkit list, and a final note panel.
- Product previews may use a framed desktop window, subtle rotation, and a crisp offset shadow. Keep preview text illustrative and non-interactive unless it represents a real control.
- Tool rows should have a clear title, short explanatory text, and a visible hover/focus affordance.
- Keep page navigation available after scrolling 100px with the fixed top-right menu. Open navigation as a full-height drawer that slides in from the right, dims the page behind it, and closes by the close button, backdrop, Escape, or link selection.
- Pixel art should be CSS-built or vector/simple glyph decoration where possible. Keep it sparse and away from critical text.
- On small screens, stack columns, preserve generous spacing, and make every navigation item and action usable without hover.

