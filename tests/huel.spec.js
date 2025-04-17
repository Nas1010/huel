import { test, expect } from '@playwright/test';

test('navigate the Huel homepage to take the quiz and validate results.', async ({ page }) => {

  try {
    // Go to the Huel homepage
    await page.goto('https://uk.huel.com/');

    // Accept cookies
    await page.getByRole('region', { name: 'Cookie banner' }).click();
    await page.getByRole('button', { name: 'Required cookies only' }).click();

    // Click on the "Take the quiz" link
    await page.locator('#desktop-navbar').getByRole('link', { name: 'Take the quiz' }).click();
    await page.getByRole('button', { name: 'Get started' }).click();

    //Select fitness goal
    await page.getByText('Eat healthier.cls-1{fill:#').click();
    await page.getByRole('button', { name: 'Continue' }).click();

    //Select meal preference
    await page.getByText('Dinner.cls-1{fill:#0a0b0b;}').click();
    await page.getByRole('button', { name: 'Continue' }).click();

    //Select preferred meal time
    await page.getByText('I’m not picky').click();
    await page.getByText('Eating on the go.cls-1{fill:#').click();

    //Skip sign-up and view recommendations
    const resultButton = page.getByRole('button', { name: 'No thanks, show me the' });
    await expect(resultButton).toBeVisible({ timeout: 5000 });
    await resultButton.click();

    // Validate that at least one product card is visible
    const productCards = page.locator('huel-card');
    await expect(productCards.first()).toBeVisible({ timeout: 10000 });
  } catch (error) { 
    console.error('❌ Error during test execution:', error);
    throw error; // Ensures the test is marked as failed
  }
});
