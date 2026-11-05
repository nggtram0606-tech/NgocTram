# Privacy and safety

This module inspects responses from `api.revenuecat.com` only.

- It does not log authorization headers, request bodies, emails, or app-user IDs.
- It does log product IDs, entitlement IDs, store/ownership metadata, and
  expiration timestamps. Keep logs private.
- HTTPS MITM gives the proxy visibility into inspected traffic. Use only a
  proxy and certificate you trust.
- Do not install certificates from strangers.
- Disable the module after debugging.
- This project does not bypass payment or change purchase/entitlement data.
