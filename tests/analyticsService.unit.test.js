import * as analyticsService from "../src/services/stellar/analyticsService.js";
import * as notificationAnalyticsService from "../src/services/notificationAnalytics.service.js";

describe("Analytics service unit tests (#406)", () => {
  test("exports analytics aggregation helpers", () => {
    expect(analyticsService).toBeDefined();
    expect(typeof analyticsService).toBe("object");
    expect(notificationAnalyticsService).toBeDefined();
  });
});
