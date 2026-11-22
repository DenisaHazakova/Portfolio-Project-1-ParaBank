// import from
// on what page to go
// title
// actions

import { test, expect } from "@playwright/test";

test("go to home page", async ({ page }) => {
  await page.goto("https://parabank.parasoft.com/parabank/index.htm", {
    // wait for page content to be loaded
    waitUntil: "domcontentloaded",
  });

  // Use the visible link name because ParaBank adds a dynamic JSESSIONID to the href.
  // use method getByrole to find the link with name Register
  // exact ensures that the link name is exactly "Register" and not a partial match
  await page.getByRole("link", { name: "Register", exact: true }).click();

  await expect(page).toHaveURL(/register\.htm/);
// Verifies that the browser URL now contains register.htm
  await page.screenshot({ path: "screenshots/registration.png", fullPage: true });

  await page.close();
});

