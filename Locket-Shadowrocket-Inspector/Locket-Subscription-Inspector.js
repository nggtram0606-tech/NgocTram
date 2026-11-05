/*
 * Locket Subscription Inspector — Shadowrocket
 *
 * Read-only diagnostic script.
 * It reports selected RevenueCat subscription metadata to the script log.
 * It does not fabricate purchases, add entitlements, or modify the response.
 */

(function () {
  "use strict";

  var PREFIX = "[Locket Inspector]";

  function log(message) {
    console.log(PREFIX + " " + message);
  }

  function objectKeys(value) {
    return value && typeof value === "object" ? Object.keys(value) : [];
  }

  function display(value) {
    return value === null || typeof value === "undefined" || value === ""
      ? "(not provided)"
      : String(value);
  }

  function inspect(body) {
    var payload;

    try {
      payload = JSON.parse(body);
    } catch (error) {
      log("Response body is not valid JSON.");
      return;
    }

    var subscriber = payload && payload.subscriber;
    if (!subscriber || typeof subscriber !== "object") {
      log("No subscriber object found in response.");
      return;
    }

    var subscriptions = subscriber.subscriptions || {};
    var entitlements = subscriber.entitlements || {};
    var subscriptionIds = objectKeys(subscriptions);
    var entitlementIds = objectKeys(entitlements);

    log("RevenueCat subscriber response parsed.");
    log("Subscription products: " +
      (subscriptionIds.length ? subscriptionIds.join(", ") : "(none)"));
    log("Entitlements: " +
      (entitlementIds.length ? entitlementIds.join(", ") : "(none)"));

    subscriptionIds.forEach(function (productId) {
      var subscription = subscriptions[productId] || {};
      log(
        "Product " + productId +
        " | store=" + display(subscription.store) +
        " | ownership=" + display(subscription.ownership_type) +
        " | period=" + display(subscription.period_type) +
        " | expires=" + display(subscription.expires_date) +
        " | billing_issue=" +
          (subscription.billing_issues_detected_at ? "yes" : "no")
      );
    });

    entitlementIds.forEach(function (entitlementId) {
      var entitlement = entitlements[entitlementId] || {};
      log(
        "Entitlement " + entitlementId +
        " | product=" + display(entitlement.product_identifier) +
        " | expires=" + display(entitlement.expires_date)
      );
    });
  }

  try {
    if (typeof $response === "undefined" || !$response.body) {
      log("No response body received.");
    } else {
      inspect($response.body);
    }
  } catch (error) {
    log("Inspector failed: " + error.message);
  }

  // No body, header, or status override: preserve the original response.
  $done({});
})();
