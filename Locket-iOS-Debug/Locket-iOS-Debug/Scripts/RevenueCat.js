/*
 * Locket / RevenueCat response inspector
 * Read-only: logs a minimal summary and leaves the response unchanged.
 *
 * Shadowrocket HTTP response script.
 */

(function () {
  const PREFIX = "[Locket Debug]";

  function log(message) {
    console.log(PREFIX + " " + message);
  }

  function safeKeys(value) {
    return value && typeof value === "object" ? Object.keys(value) : [];
  }

  function inspect(body) {
    let data;

    try {
      data = JSON.parse(body);
    } catch (error) {
      log("Response was not valid JSON.");
      return;
    }

    const subscriber = data && data.subscriber;
    if (!subscriber || typeof subscriber !== "object") {
      log("No subscriber object found in this response.");
      return;
    }

    const subscriptions = subscriber.subscriptions || {};
    const entitlements = subscriber.entitlements || {};

    log("Response parsed successfully.");
    log("Subscription keys: " + safeKeys(subscriptions).join(", "));
    log("Entitlement keys: " + safeKeys(entitlements).join(", "));

    safeKeys(subscriptions).forEach(function (productId) {
      const item = subscriptions[productId] || {};
      log(
        "Subscription " + productId +
        " | expires_date=" + (item.expires_date || "null") +
        " | period_type=" + (item.period_type || "unknown") +
        " | store=" + (item.store || "unknown")
      );
    });

    safeKeys(entitlements).forEach(function (entitlementId) {
      const item = entitlements[entitlementId] || {};
      log(
        "Entitlement " + entitlementId +
        " | product_identifier=" + (item.product_identifier || "unknown") +
        " | expires_date=" + (item.expires_date || "null")
      );
    });
  }

  try {
    if (typeof $response === "undefined" || !$response.body) {
      log("No response body was supplied.");
    } else {
      inspect($response.body);
    }
  } catch (error) {
    log("Inspector error: " + error.message);
  }

  // No body/header/status override: the original response is preserved.
  $done({});
})();
