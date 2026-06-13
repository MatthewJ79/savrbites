# Figma Fidelity Rules

SavrBites is design-first. Do not build app logic before the core screens match Figma.

## Source

- Figma file: `https://www.figma.com/design/eDR9thARyi7MgwObj74OzM/SavrBites`
- Prototype: `https://www.figma.com/proto/eDR9thARyi7MgwObj74OzM/SavrBites`
- Current page: `Hi Fi Mock-ups 2`
- Sign-in frame: `574:9501`

## Rules

- Do not redesign unless the owner explicitly asks.
- Match Figma first, then build logic.
- Keep `App.tsx` tiny; no mono React files.
- Put screens in `src/features/<feature>/screens`.
- Put shared UI in `src/shared/components`.
- Put colors, layout, and typography in `src/theme`.
- Build for iPhone, iPad, Android phones, and Android tablets only.
- Web preview is a development shortcut only, never final design approval.

## UI Definition of Done

- Figma frame node is recorded in the screen or task summary.
- Screen visually matches Figma at phone size.
- Tablet behavior is intentional.
- Text does not clip or overlap.
- TypeScript passes.
