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
- `7b92ccb` Fix web phone preview framing
- `0546371` Match auth button styling to Figma
- `1d348b4` Add web QA screen links and fix home logo
- `d09721d` Polish taste preference rows

Verified Gates
--------------
- `npx.cmd tsc --noEmit`
- `npx.cmd expo export --platform web`
- Fresh Expo web server on port 8103 returned HTML 200 and bundle 200 during
  Chrome screenshot QA.
- A later fresh Expo web server on port 8104 was used for direct screen QA with
  `?screen=home` and `?screen=beefHome`.

Known QA Findings
-----------------
- The 390px Chrome headless clipping issue was addressed by scaling the shared
  Figma canvas for web phone preview. Auth/sign-in and bottom nav now render
  fully visible in the phone-width screenshot.
- The next QA pass should inspect every screen at phone and tablet widths for
  exact Figma spacing, especially preference lists and meal-plan scrolling.
- Web-only QA shortcuts are available with `?screen=<screenKey>`, for example
  `http://127.0.0.1:8104/?screen=home` and
  `http://127.0.0.1:8104/?screen=beefHome`.

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
