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

## Typography

- Use Geist Sans for body copy and interface labels.
- Use a heavy condensed system fallback for the large uppercase display headings.
- Keep headlines short and broken into deliberate lines. Scale them responsively with `clamp()`.
- Keep paragraph measure moderate and line height generous. Use small labels sparingly for section markers and metadata.

## Page structure

The homepage is composed from focused section components in `client/src/components/organisms/Landing/`, assembled by `client/src/components/templates/HomeTemplate/HomeTemplate.tsx`:

1. Sticky navigation with a compact mobile menu
2. Two-column hero with product preview and product facts
3. Four-step workflow panel
4. Five feature cards
5. AI code review explanation and UI preview
6. Developer article cards
7. Testimonials
8. Pricing plans with a monthly/yearly toggle
9. Native expandable FAQ rows
10. Lime call to action and footer

Use centered max-width containers. The desktop hero places copy left and the product preview right; later sections follow the reference's centered editorial grid. On narrow screens, stack columns and reduce card density while keeping all content readable.

## Motion and scrolling

- Framer Motion handles the first-load hero entrance, one-time section reveals, and small card interactions.
- Lenis provides smooth wheel and anchor scrolling while touch scrolling stays native.
- Respect `prefers-reduced-motion`: remove entrance travel and skip smooth scrolling when requested.
- Keep motion short and functional. Do not delay access to content or controls.

## Interaction and accessibility

- Use native links for section navigation, buttons for state changes, and `<details>/<summary>` for FAQ disclosure.
- Keep keyboard focus visible, controls labeled, and contrast strong on bright card surfaces.
- Keep pricing billing selection exposed through `aria-pressed`.
- Treat the code editor and code review as illustrative previews unless a control is explicitly wired to real behavior.
- Avoid unsupported customer counts, uptime figures, or performance claims. Use product facts rather than invented metrics.

## Content voice

Write for developers in a direct, encouraging voice. Describe repository exploration, code updates, AI assistance, and learning content concretely. Avoid inflated promises and filler marketing language.

## Implementation map

- Homepage composition: `client/src/components/templates/HomeTemplate/HomeTemplate.tsx`
- Homepage sections: `client/src/components/organisms/Landing/`
- Framer Motion reveal: `client/src/components/organisms/Landing/Reveal.tsx`
- Global reset: `client/src/app/globals.css`
- Homepage design system and responsive rules: `client/src/app/landing.css`
- Lenis setup: `client/src/components/providers/SmoothScroll/SmoothScroll.tsx`
- Metadata, fonts, and global style imports: `client/src/app/layout.tsx`
