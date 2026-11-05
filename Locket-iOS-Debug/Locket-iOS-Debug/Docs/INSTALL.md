# Install — Shadowrocket on iOS 26

## A. Publish the script

1. Create a GitHub repository named `Locket-iOS-Debug`.
2. Upload this folder while preserving its directory structure.
3. Open `Scripts/RevenueCat.js` on GitHub and choose **Raw**.
4. Copy its HTTPS raw URL.
5. In `Shadowrocket/Locket-Debug.sgmodule`, replace the placeholder
   `YOUR_GITHUB_USERNAME` with your GitHub username. Confirm the repository
   name, branch (`main`), and script path match your upload.

The script URL must be reachable over HTTPS. Do not use an unknown third-party
script host.

## B. Import the module

1. Open Shadowrocket.
2. Open the module/configuration area (the exact label can vary by app version).
3. Import the raw HTTPS URL of `Shadowrocket/Locket-Debug.sgmodule`, or import
   the local module file if your Shadowrocket version supports local imports.
4. Enable the module.
5. Enable MITM only if you understand and accept the TLS inspection implications.
6. If Shadowrocket asks to install/trust its own CA certificate, review the
   warning in `PRIVACY-AND-SAFETY.md` before proceeding.

## C. Test

1. Open Shadowrocket's script/log view.
2. Launch Locket and perform a normal action that causes the app to refresh
   subscriber information.
3. Look for `[Locket Debug]` log lines.
4. The script should report subscription and entitlement key names and selected
   metadata. It does not change the response or grant Gold.

## D. Disable / remove

Disable the module when finished. Remove the MITM hostname entry and revoke or
remove the proxy CA certificate from iOS settings if you no longer need TLS
inspection. Menu names can vary by iOS and Shadowrocket version.
