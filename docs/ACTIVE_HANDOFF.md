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
- Fresh Expo web server on port 8099 returned HTML 200 and bundle 200 during
  Chrome screenshot QA.

Known QA Findings
-----------------
- Chrome headless at 390px shows the auth/sign-in Figma frame rendering as a
  440px-wide design surface, which clips the right side of the bottom nav in the
  screenshot. Tablet-width capture centers correctly. Do not treat 390px visual
  QA as passed until the web preview shell/frame sizing is fixed or verified on
  a real iPhone/Expo Go device.
- The screenshot issue is in the web preview layout shell, not a missing asset:
  the bundle resolves and the app paints after restarting Metro with `--clear`.

Important Safety Notes
----------------------
- Do not place provider API keys in `EXPO_PUBLIC_*` variables.
- The app client currently calls only `EXPO_PUBLIC_MEAL_PLAN_API_URL` when configured.
- Keep real AI provider calls behind a backend endpoint.
- `.env` is ignored and should stay out of git.

Next Best Tasks
---------------
1. Fix or validate the 390px web preview frame sizing issue above.
2. Visual QA every native screen in Chrome at 390px wide and tablet width.
3. Improve the long ingredient lists for exact Figma spacing and type scale after visual QA.
4. Replace any remaining color-only placeholders when approved source art exists.
5. Re-test Expo Go/iPhone after the visual pass.
6. Use `docs/MEAL_PLAN_API_CONTRACT.md` before wiring real AI generation.
