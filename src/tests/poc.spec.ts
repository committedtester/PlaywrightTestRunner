import { test, expect } from '@playwright/test';
import {HomePage} from './../pageObjects';

test('basic test', async ({ page }) => {

  const homePage= new HomePage(page);
  await homePage.GotoTodosURL();



  await page.goto('https://playwright.dev/');
  const name = await page.innerText('.navbar__title');
  expect(name).toBe('Playwright');
});