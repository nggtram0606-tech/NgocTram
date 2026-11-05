# Privacy and safety

This module performs TLS interception for one host: `api.revenuecat.com`.
TLS interception can expose data carried by the inspected connection to the
proxy environment and to any scripts you enable.

- Only use a script you have personally reviewed and trust.
- Do not share logs publicly. Subscriber responses may contain account-related
  identifiers or purchase metadata.
- This inspector intentionally does not log app user IDs, email addresses,
  authorization headers, API keys, or request bodies.
- Do not install certificates supplied by strangers.
- A trusted CA certificate can enable interception of HTTPS traffic; treat it
  as a sensitive security setting.
- Disable the module when debugging is complete.
- This project does not bypass payment, forge receipts, or alter entitlements.

The script logs selected product identifiers and expiration metadata. These
values can still reveal subscription information, so keep logs private.
