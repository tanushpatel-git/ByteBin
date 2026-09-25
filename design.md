# ByteBin website design

This guide defines the current ByteBin homepage visual system and interaction patterns. The page follows the supplied developer-platform reference: a warm light canvas, bold navy display type, bright lime accents, lavender UI panels, and compact product interface previews. It keeps ByteBin's identity and product story.

## Brand direction

- **Clear, capable, and maker-friendly.** Explain useful code tools in plain language.
- **Bold but approachable.** Use expressive headings and vivid accents, balanced with calm surfaces and readable body text.
- **Product first.** Show the repo, code, and review workflow directly in interface previews.

## Color tokens

| Token | Value | Use |
| --- | --- | --- |
| Warm canvas | `#FBFAF5` | Main page background |
| Navy ink | `#091D43` | Headings, controls, and primary text |
| Lime | `#D7FF35` | Primary actions and emphasis |
| Lavender | `#E9E3FF` | Workflow panels and soft UI backgrounds |
| Purple | `#7658F6` | AI details and secondary accents |
| Coral | `#FF9079` | Feature-card variation |
| Preview navy | `#071A3B` | Code editor preview |
| Warm white | `#FFFEFA` | Card and interface surfaces |
| Muted slate | `#617089` | Supporting copy and metadata |

Tokens and page-level styling live in `client/src/app/landing.css`; global resets live in `client/src/app/globals.css`.
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

## Interaction and accessibility

- Use native links for navigation and meaningful section targets.
- Maintain strong contrast for body text and controls against blue and paper surfaces.
- Provide visible keyboard focus styles when adding custom interactive elements.
- Respect `prefers-reduced-motion`; avoid motion that is required to understand content.
- Use Framer Motion for brief, one-time content reveals and the navigation drawer. Keep travel distances small and disable entrance movement when reduced motion is requested.
- Use Lenis for smooth wheel scrolling and anchor navigation while leaving touch scrolling native. Do not initialize it when reduced motion is requested, and pause it while the navigation drawer is open.
- Keep the hero copy and workspace preview centered on the same page axis. Begin the preview scroll sequence when its top reaches about 40% of the viewport. First expand it to 80% of viewport height while it moves upward; then continue its upward movement on its own. Skip the sequence for reduced-motion users.
- Decorative motifs must be hidden from assistive technology. Avoid communicating state through color alone.

## Content direction

Write in a friendly, direct maker voice. Describe ByteBin as a practical set of tools for working with repositories, code updates, AI assistance, and publishing. Avoid generic productivity claims, inflated promises, and filler marketing language.

## Implementation map

- Homepage composition: `client/src/components/templates/HomeTemplate/HomeTemplate.tsx`
- Theme tokens, typography, responsive layout, and component styling: `client/src/app/globals.css`
- Root metadata and font setup: `client/src/app/layout.tsx`
- Public assets: `client/public/assets/`

When extending the site, update this guide if the palette, typography, interaction patterns, or brand direction materially changes.
