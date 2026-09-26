# ByteBin website design

This guide defines the current ByteBin homepage visual system and interaction patterns. The page follows the supplied CodeNest-style reference: a warm white canvas, black product typography, soft lavender panels, small lime labels, dark product previews, and expressive transparent illustrations from `client/public/assets`. It keeps ByteBin's identity and product story.

## Brand direction

- **Clear, capable, and maker-friendly.** Explain useful code tools in plain language.
- **Bright and capable.** Use generous light space, dark text, quiet borders, and vivid accents.
- **Product first.** Show the repo, code, and review workflow directly in interface previews.

## Color tokens

| Token | Value | Use |
| --- | --- | --- |
| Warm canvas | `#FFFEFA` | Main page background |
| White surface | `#FFFFFF` | Feature, article, and pricing cards |
| Ink | `#10131B` | Headings, controls, and primary text |
| Muted slate | `#596274` | Supporting copy and metadata |
| Soft lime | `#D9FF84` | Labels and small highlights |
| Lavender | `#F1EFFF` | AI workspace and FAQ panels |
| Violet | `#9650F3` | AI details and pricing emphasis |
| Preview navy | `#0D111D` | Code editor preview |

Tokens and page-level styling live in `client/src/app/landing.css`; global resets live in `client/src/app/globals.css`.

## Typography

- Use Geist Sans for body copy and interface labels.
- Use a heavy condensed system fallback for the large uppercase display headings.
- Keep headlines short and broken into deliberate lines. Scale them responsively with `clamp()`.
- Keep paragraph measure moderate and line height generous. Use small labels sparingly for section markers and metadata.

## Page structure

The homepage is composed from focused section components in `client/src/components/organisms/Landing/`, assembled by `client/src/components/templates/HomeTemplate/HomeTemplate.tsx`:

1. Sticky navigation with a compact mobile menu
2. Two-column hero with transparent product artwork and quick links to core tools
3. Six feature cards with supplied image assets
4. AI code review explanation and dark workspace preview
5. Developer article cards with supplied illustrations
6. Pricing cards and native expandable FAQ rows
7. Dark community call to action and multi-column footer

Use centered max-width containers on a warm white background. The desktop hero places copy left and the supplied robot/code illustration right; the features section pairs an intro with a three-column card grid. The AI workspace uses a lavender band and dark interface preview. On narrow screens, stack columns and reduce card density while keeping all content readable.

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
