# Installation — Shadowrocket on iPhone / iOS 26

Menu names can vary slightly by Shadowrocket version.

## 1. Upload to GitHub

1. Create a repository, for example `Locket-Shadowrocket-Inspector`.
2. Upload these files to the repository root:
   - `Locket-Shadowrocket-Inspector.sgmodule`
   - `Locket-Subscription-Inspector.js`
3. Open the JavaScript file on GitHub and select **Raw**. Confirm its URL has
   this form:

   `https://raw.githubusercontent.com/USERNAME/REPOSITORY/main/Locket-Subscription-Inspector.js`

4. Edit the `.sgmodule`: replace `YOUR_GITHUB_USERNAME` and `YOUR_REPOSITORY`
   with your actual GitHub username and repository name.

## 2. Import the module

1. Copy the Raw HTTPS URL of `Locket-Shadowrocket-Inspector.sgmodule`.
2. Open Shadowrocket.
3. Go to **Configuration → Module → Add (+)** (wording may vary).
4. Paste the Raw URL and download/import the module.
5. Enable **Locket Subscription Inspector**.

## 3. HTTPS inspection

The module declares `api.revenuecat.com` under `[MITM]` so Shadowrocket can
inspect the HTTPS response body. HTTPS decryption requires Shadowrocket's own
certificate setup and trust on the device. Do not install certificates from
unknown sources. Only enable interception if you understand that the proxy
can inspect traffic to this host.

## 4. Check the logs

1. Open Shadowrocket's script/log view.
2. Launch Locket and perform an ordinary action that refreshes account data.
3. Look for messages beginning with `[Locket Inspector]`.
4. The script reports product IDs, entitlement IDs, store, ownership type,
   period type, and expiration dates when those fields are present.

No log may mean Locket did not make the matching request, the URL changed, or
HTTPS inspection is not active. It does not by itself establish whether Gold
is active.

## 5. Turn it off

Disable the module when finished. Remove the MITM hostname rule and revoke the
proxy certificate from iOS settings if you no longer need HTTPS inspection.
