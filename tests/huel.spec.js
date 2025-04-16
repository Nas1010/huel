import { test, expect } from '@playwright/test';

test('navigating the Huel homepage to take the quiz and validate results.', async ({ page }) => {
  await page.goto('https://uk.huel.com/');
  await page.getByRole('button', { name: 'Required cookies only' }).click();
  await page.locator('#desktop-navbar').getByRole('link', { name: 'Take the quiz' }).click();
  await page.getByRole('button', { name: 'Get started' }).click();
  await page.getByText('Fitness goals.cls-1{fill:#').click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByText('Dinner').click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.locator('g > g:nth-child(2) > g > image').click();
  await page.getByText('Eating on the go').click();
  await page.getByRole('button', { name: 'No thanks, show me the' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.locator('huel-card').filter({ hasText: 'Ready-to-drinkFrom £38.00 . £' }).getByRole('link').click();
  const page1 = await page1Promise;
  await page1.getByRole('button', { name: 'Increase the quantity of Chocolate v1.0 by 1, current quantity is' }).click();
  await page1.getByTestId('add-to-cart-button').click();
  await page1.getByRole('button', { name: 'Go to basket' }).click();
});