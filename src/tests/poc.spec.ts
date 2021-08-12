import { test, expect } from '@playwright/test';
import { HomePage } from './../pageObjects';

test.describe('TodoMvc Related Tests', () => {
	test('basic test', async ({ page }) => {
		const homePage = new HomePage(page);
		await homePage.GotoTodosURL();
		await homePage.ClickIntoPolymerPage();
		const name = await homePage.GetTitle();
		expect(name).toBe('Polymer • TodoMVC');
	});
});
