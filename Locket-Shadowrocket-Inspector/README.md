# Locket Subscription Inspector for Shadowrocket

A standalone, read-only Shadowrocket module for inspecting the subscriber
response returned by RevenueCat for Locket.

**This module does not unlock Locket Gold, forge App Store purchases, create
entitlements, or alter subscription status.** It logs selected subscription
metadata and passes the original response through unchanged.

## Files

- `Locket-Shadowrocket-Inspector.sgmodule` — Shadowrocket module.
- `Locket-Subscription-Inspector.js` — read-only response inspector.
- `INSTALL.md` — setup guide.
- `PRIVACY.md` — privacy and HTTPS interception notes.

## Configure the GitHub URL

1. Create a GitHub repository (for example, `Locket-Shadowrocket-Inspector`).
2. Upload the `.sgmodule` and `.js` files.
3. In the `.sgmodule`, replace `YOUR_GITHUB_USERNAME` and `YOUR_REPOSITORY`.
4. Confirm the script URL points to the uploaded `Locket-Subscription-Inspector.js`.
5. Import the Raw HTTPS URL of the `.sgmodule` into Shadowrocket.

Use only code and certificates you trust. Disable the module when you finish
debugging.
