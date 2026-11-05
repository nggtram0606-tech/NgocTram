# Troubleshooting

## No logs appear

- Confirm the module is enabled.
- Confirm the script URL opens in Safari and returns JavaScript, not an HTML page.
- Confirm the raw URL matches your repository, branch, and file path.
- Confirm Locket actually made a request to the RevenueCat subscriber endpoint.
- Confirm your Shadowrocket version supports HTTP response scripts.

## Script download error

- Replace `YOUR_GITHUB_USERNAME`.
- Check repository visibility and the `main` branch name.
- Use the GitHub **Raw** URL over HTTPS.
- Check for typos in `Scripts/RevenueCat.js`.

## No response body / JSON parse error

The app may have changed its API path or response format, the response may be
compressed/empty, or the request may not match the rule. Do not broaden the
hostname or intercept unrelated domains just to force a match.

## Locket stops connecting

Disable this module first. Remove the MITM hostname entry if needed, then retry
Locket. Do not disable certificate validation in the app or install unknown
certificates.
