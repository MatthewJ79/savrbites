SAVRBITES FIGMA IMPLEMENTATION RULES
====================================

Purpose
-------
Build SavrBites screens to match the supplied Figma/prototype PNGs first, then add
logic. Design accuracy is the release gate for this phase.

Core Rules
----------
1. Mobile and tablet only. Optimize first for 390px wide iPhone screens and keep a
   centered max-width frame for tablets.
2. New UI must be native React Native components, not one mono screenshot, unless
   intentionally using the existing prototype fallback.
3. Do not create a mono App.tsx/App.jsx. Keep screens in feature folders and shared
   UI in shared/components.
4. Match the Figma visual language: serif typography, black text, light linen/white
   backgrounds, muted sage green buttons, deep green active states, thin black or
   light gray dividers.
5. Preserve Figma spacing and hierarchy. Large page titles stay large; compact rows
   and cards use smaller text so labels do not clip.
6. Every screen with content taller than the viewport must scroll, with enough
   bottom padding so the bottom nav never covers content.
7. Preference icons are controls. Tapping heart, thumbs-up, IDK, or thumbs-down
   must mark that item's preference and show a selected state.
8. Category tabs switch categories only. Rating icons must never navigate to long
   list screens.
9. Bottom navigation stays fixed at the bottom and routes to Home, Preferences, and
   Meal Plan.
10. Avoid web-only APIs. Components must work in Expo on iOS and Android.

Asset Rules
-----------
1. Use existing assets only when they already exist in assets/.
2. If a final image asset is missing, use a simple colored placeholder View rather
   than adding unapproved packages or broken require() calls.
3. Logo changes must preserve the SavrBites mark proportions and brand hierarchy.

Verification
------------
Before reporting design work complete:
1. Run `npx.cmd tsc --noEmit`.
2. Open the web preview for a fast Chrome design check.
3. Check the target screen at phone width and tablet width.
4. Confirm tappable preference icons visibly toggle selected state.
5. Confirm long preference lists and recipe screens scroll above the bottom nav.
