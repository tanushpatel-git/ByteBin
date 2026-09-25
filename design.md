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

