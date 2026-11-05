# Privacy and security

This module observes one RevenueCat host: `api.revenuecat.com`.

- It does not log authorization headers, request bodies, email addresses, or
  app-user IDs.
- It does log product identifiers, entitlement identifiers, store metadata,
  ownership metadata, and expiration timestamps. Treat logs as private.
- HTTPS MITM can expose inspected traffic to the proxy environment. Only use
  trusted proxy settings and certificates.
- Do not share subscriber logs publicly.
- Disable the module when you finish debugging.
- This project does not forge purchases, change entitlement status, or bypass
  Locket's payment system.
