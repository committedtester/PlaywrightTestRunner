// playwright.config.ts
import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
	use: {
		headless: !true,
		video: { mode: 'retain-on-failure', size: { width: 1920, height: 1080 } },
		trace: 'on',
		screenshot: 'on'
	},
	retries: 0,
	projects: [
		{
			name: 'Chrome_Stable',
			use: {
				browserName: 'chromium',
				viewport: { width: 1920, height: 1080 },
				// Test against Chrome Stable channel.
				channel: 'chrome'
			}
		},
		{
			name: 'Desktop Safari',
			use: {
				browserName: 'webkit',
				viewport: { width: 1200, height: 750 }
			}
		},
		// Test against mobile viewports.
		{
			name: 'Mobile Chrome',
			use: devices['Pixel 5']
		},
		{
			name: 'Mobile Safari',
			use: devices['iPhone 12']
		},
		{
			name: 'Desktop Firefox',
			use: {
				browserName: 'firefox',
				viewport: { width: 800, height: 600 }
			}
		}
	]
};
export default config;
