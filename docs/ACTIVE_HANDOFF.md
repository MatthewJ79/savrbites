SAVRBITES ACTIVE HANDOFF
========================

Current State
-------------
- Native Navigator is live through `index.ts -> App.tsx -> src/core/AppRoot.tsx`.
- The image prototype remains in `src/features/prototype/` as reference/fallback code.
- Mobile/tablet screens are constrained through `ScreenFrame` and shared max-width bars.
- Preference rating icons toggle state and do not navigate to long-list screens.
- Web preview is available on the local Expo web server when running.

Latest Codex Checkpoints
------------------------
- `69cd747` Improve native screen framing and taste tabs
- `c47473d` Draw meal plan tab icons natively
- `02970ac` Polish shopping list native controls
- `ec8d8aa` Smooth meal plan preview flow
- `b8a5e55` Use Figma images on home preference cards
- `c5cbe3b` Use Figma meal thumbnails in meal cards
- `ddfddec` Use Figma images on allergy and cuisine cards
- `3c26cbd` Polish ingredient preference rows

Verified Gates
--------------
- `npx.cmd tsc --noEmit`
- `npx.cmd expo export --platform web`

Important Safety Notes
----------------------
- Do not place provider API keys in `EXPO_PUBLIC_*` variables.
- The app client currently calls only `EXPO_PUBLIC_MEAL_PLAN_API_URL` when configured.
- Keep real AI provider calls behind a backend endpoint.
- `.env` is ignored and should stay out of git.

Next Best Tasks
---------------
1. Visual QA every native screen in Chrome at 390px wide and tablet width.
2. Improve the long ingredient lists for exact Figma spacing and type scale after visual QA.
3. Replace any remaining color-only placeholders when approved source art exists.
4. Re-test Expo Go/iPhone after the visual pass.
5. Use `docs/MEAL_PLAN_API_CONTRACT.md` before wiring real AI generation.
