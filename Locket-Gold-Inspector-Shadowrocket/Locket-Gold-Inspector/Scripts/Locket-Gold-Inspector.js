/*
 * Locket Gold Inspector — Shadowrocket HTTP response script
 *
 * READ-ONLY:
 * - Parses the RevenueCat subscriber response.
 * - Logs subscription and entitlement metadata.
 * - Does not change the response body, headers, or status.
 * - Does not fabricate purchases or grant entitlements.
 */

(function () {
  "use strict";

  var TAG = "[Locket Gold Inspector]";

  function log(message) {
    console.log(TAG + " " + message);
  }

  function keysOf(value) {
    return value && typeof value === "object" ? Object.keys(value) : [];
  }

  function inspectResponse(body) {
    var payload;

    try {
      payload = JSON.parse(body);
    } catch (error) {
      log("Could not parse response as JSON.");
      return;
    }

    if (!payload || !payload.subscriber || typeof payload.subscriber !== "object") {
      log("No subscriber object found. The API response format may have changed.");
      return;
    }

    var subscriber = payload.subscriber;
    var subscriptions = subscriber.subscriptions || {};
    var entitlements = subscriber.entitlements || {};

    var subscriptionIds = keysOf(subscriptions);
    var entitlementIds = keysOf(entitlements);

    log("Response parsed successfully.");
    log("Subscription product IDs: " +
      (subscriptionIds.length ? subscriptionIds.join(", ") : "(none)"));
    log("Entitlement IDs: " +
      (entitlementIds.length ? entitlementIds.join(", ") : "(none)"));

    subscriptionIds.forEach(function (productId) {
      var item = subscriptions[productId] || {};
      log(
        "Subscription " + productId +
        " | expires_date=" + (item.expires_date || "not supplied") +
        " | period_type=" + (item.period_type || "not supplied") +
        " | store=" + (item.store || "not supplied") +
        " | ownership_type=" + (item.ownership_type || "not supplied")
      );
    });

    entitlementIds.forEach(function (entitlementId) {
      var item = entitlements[entitlementId] || {};
      log(
        "Entitlement " + entitlementId +
        " | product_identifier=" + (item.product_identifier || "not supplied") +
        " | expires_date=" + (item.expires_date || "not supplied")
      );
    });
  }

  try {
    if (typeof $response === "undefined" || !$response.body) {
      log("No response body was provided to the script.");
    } else {
      inspectResponse($response.body);
    }
  } catch (error) {
    log("Inspector error: " + error.message);
  }

  // Empty completion preserves the original HTTP response.
  $done({});
})();
