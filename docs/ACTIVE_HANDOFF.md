SAVRBITES ACTIVE HANDOFF
========================

Current State
-------------
- `AppRoot` now routes to `MainFlowPrototypeApp` for design approval.
- The active preview is image-backed and uses only the 7 approved main-flow Figma
  screens from `docs/MAIN_FLOW_FIGMA_REBUILD_PLAN.txt`.
- Native Navigator/native rebuild work is paused until the 7-screen Figma flow is
  approved.
- Beef preference icons, Allergy cards, Cuisine cards, and Nutrition options have
  selectable overlay hotspots.
- Beef preference icon taps do not navigate to long-list reference screens.
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
- `381d5cf` Document main flow Figma rebuild plan

Verified Gates
--------------
- `npx.cmd tsc --noEmit`
- `npx.cmd expo export --platform web`
- Expo web export currently bundles exactly 7 approved prototype assets:
  sign in, Home, Beef home, Allergies home, Cuisines home, Nutrition home,
  and Meal Plan-meals-Monday.
- Fresh Expo web server on port 8105 returned HTML 200 and bundle 200.
- Chrome screenshots were captured and visually inspected for all 7 approved
  screens at 440px Figma frame width.

Known QA Findings
-----------------
- The current preview intentionally uses the approved Figma PNGs as the visual
  layer. This is a design-approval prototype, not the final native component
  implementation.
- Selection overlays are intentionally subtle so they do not visually redesign
  the Figma screens.
- Tablet-width QA still needs a full pass after the phone/Figma-width flow is
  approved.

Important Safety Notes
----------------------
- Do not place provider API keys in `EXPO_PUBLIC_*` variables.
- The app client currently calls only `EXPO_PUBLIC_MEAL_PLAN_API_URL` when configured.
- Keep real AI provider calls behind a backend endpoint.
- `.env` is ignored and should stay out of git.

Next Best Tasks
---------------
1. Get user approval on the 7-screen Figma-backed main flow.
2. Test hotspot flow manually in preview:
   Sign In -> Home -> Beef/Allergies/Cuisines/Nutrition -> Save -> Home,
   and Home -> Meal Plan Monday.
3. Run tablet-width visual QA for the same 7 screens.
4. After approval, rebuild the 7 screens natively one at a time while comparing
   against the Figma image-backed fallback.
5. Use `docs/MEAL_PLAN_API_CONTRACT.md` before wiring real AI generation.
