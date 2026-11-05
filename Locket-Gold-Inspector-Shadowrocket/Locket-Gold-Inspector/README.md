# Locket Gold Inspector — Shadowrocket

A standalone, read-only Shadowrocket module template for inspecting the
subscription/entitlement metadata returned by RevenueCat for Locket.

**This does not unlock Locket Gold, forge an App Store purchase, alter
subscription records, or modify API responses.** It only reports selected
metadata to the Shadowrocket script log.

## Files

- `Shadowrocket/Locket-Gold-Inspector.sgmodule` — Shadowrocket module template.
- `Scripts/Locket-Gold-Inspector.js` — read-only response inspector.
- `Docs/INSTALL.md` — setup guide.
- `Docs/PRIVACY.md` — privacy and certificate guidance.

## Before importing

1. Upload this repository to a GitHub repository you control.
2. Replace `YOUR_GITHUB_USERNAME` and `YOUR_REPOSITORY` in the `.sgmodule`.
3. Make sure the JavaScript file is available at the corresponding GitHub Raw URL.
4. Import the `.sgmodule` using the Raw URL of the module file, or import the local
   file if your Shadowrocket version supports it.

The script only matches the RevenueCat subscriber endpoint on
`api.revenuecat.com`. Keep the module disabled when you are not debugging.
