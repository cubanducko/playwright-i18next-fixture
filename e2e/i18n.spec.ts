import { test as baseTest, expect } from "@playwright/test";
import { createI18nFixture } from "../src/fixture";

const i18nFixture = createI18nFixture({
  options: {
    lng: "en",
    resources: {
      en: {
        translation: {
          playwrightTitle:
            "Fast and reliable end-to-end testing for modern web apps | Playwright",
          getStarted: "Get Started",
        },
      },
    },
  },
});

const test = baseTest.extend(i18nFixture);

test("homepage has Playwright in title and get started link linking to the intro page", async ({
  page,
  i18n,
  t,
}) => {
  await page.goto("https://playwright.dev/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(new RegExp(i18n.t("playwrightTitle")));

  // create a locator
  const getStarted = page.locator(`text=${t("getStarted")}`);

  // Expect an attribute "to be strictly equal" to the value.
  await expect(getStarted).toHaveAttribute("href", "/docs/intro");

  // Click the get started link.
  await getStarted.click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});
