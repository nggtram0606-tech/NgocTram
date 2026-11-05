# Locket iOS Debug Module (iOS 26)

A read-only debugging starter kit for inspecting the shape of Locket's RevenueCat
subscriber response in Shadowrocket. It does **not** unlock Locket Gold, create
purchases, alter entitlements, or modify API responses.

## Contents

- `Shadowrocket/Locket-Debug.sgmodule` — Shadowrocket module template.
- `Scripts/RevenueCat.js` — read-only response inspector.
- `Docs/INSTALL.md` — setup instructions.
- `Docs/PRIVACY-AND-SAFETY.md` — TLS interception and privacy notes.
- `Docs/TROUBLESHOOTING.md` — common issues.
- `Surge/Locket-Debug.sgmodule` — equivalent Surge script template.

## Before you start

1. Use a current version of Shadowrocket that supports HTTP response scripts.
2. Keep a legitimate Locket account and subscription state; this tool only observes.
3. Host `Scripts/RevenueCat.js` at a trusted HTTPS raw-file URL, or use a hosting
   method supported by your Shadowrocket version.
4. Replace `YOUR_GITHUB_USERNAME` in the module with your own GitHub username
   after uploading this repository.

## Scope

The module matches only RevenueCat subscriber endpoints on `api.revenuecat.com`.
It logs a small summary (entitlement names, product identifiers, and expiration
timestamps) and returns the original response unchanged.

This is an unofficial debugging aid and is not affiliated with Locket or RevenueCat.
