# Install in Shadowrocket (iPhone / iOS 26)

The exact menu names may differ by Shadowrocket version.

## 1. Publish the files

1. Create a GitHub repository, for example `Locket-Gold-Inspector`.
2. Upload the files while preserving the folder structure.
3. Open `Scripts/Locket-Gold-Inspector.js` on GitHub and select **Raw**.
4. Confirm the Raw URL follows this form:

   `https://raw.githubusercontent.com/USERNAME/REPOSITORY/main/Scripts/Locket-Gold-Inspector.js`

5. Edit `Shadowrocket/Locket-Gold-Inspector.sgmodule` and replace:
   - `YOUR_GITHUB_USERNAME` with your GitHub username.
   - `YOUR_REPOSITORY` with the repository name.

## 2. Import the module

1. Open Shadowrocket.
2. Find its module or configuration import area.
3. Import the Raw URL of `Shadowrocket/Locket-Gold-Inspector.sgmodule`.
   If your version supports local module files, you can import that file instead.
4. Enable **Locket Gold Inspector** only when you intend to inspect the API.

## 3. HTTPS inspection warning

The module includes a MITM hostname entry for `api.revenuecat.com` so the proxy
can inspect the HTTPS response body. Only enable TLS interception if you
understand the risk and trust the proxy certificate. Never install a certificate
provided by an unknown person or repository.

## 4. Test and read logs

1. Open Shadowrocket's script/log view.
2. Launch Locket and perform an ordinary action that refreshes account/subscription
   information.
3. Look for log entries beginning with `[Locket Gold Inspector]`.
4. The script reports product IDs, entitlement IDs, store, ownership type, and
   expiration metadata when those fields exist.

A missing log does not prove that Gold is inactive: the app may not have made
the matching request, the endpoint may have changed, or the current proxy/app
version may handle the request differently.

## 5. Disable after debugging

Disable the module when finished. Remove the MITM hostname rule and proxy CA
certificate if you no longer need HTTPS inspection. Follow Shadowrocket and iOS
settings guidance for the exact certificate-removal steps.
