import { test, expect } from '@playwright/test';

const apodLinkText = "View images from Astronomy Picture of the day";

test.describe('homepage', () => {
  test('has required content',
    async ({ page }) => {

      await page.goto('./');

      // Page title 
      await expect(page).toHaveTitle(/Nasa Image Gallery/);

      // Page heading
      await expect(page.getByRole("heading", { name: "NASA image galleries" })).toBeVisible();

      // APOTD Call to action
      await expect(page.getByRole("link", { name: apodLinkText })).toBeVisible();
    });

  test('can navigate to APOD page',
    async ({ page }) => {

      await page.goto('./');

      await page.getByRole("link", { name: apodLinkText }).click();

      // assert that url is correct format 
      await expect(page).toHaveURL(/.*picture-of-the-day\/\d{4}-\d{2}-\d{2}/)
    });
});
