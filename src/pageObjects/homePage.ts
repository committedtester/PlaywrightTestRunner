import { Page } from '@playwright/test';

export class HomePage {
	readonly page;
	constructor(page: Page) {
		this.page = page;
	}

	idPolymerLink = 'text=Polymer';

	idPolymerWaitFor = '[placeholder="What needs to be done?"]';

	GotoTodosURL = async (): Promise<void> => {
		await this.page.goto('http://todomvc.com//');
	};

	ClickIntoPolymerPage = async (): Promise<void> => {
		await this.page.click(this.idPolymerLink);
		await this.page.waitForSelector(this.idPolymerWaitFor);
	};

	GetTitle = async (): Promise<string> => {
		return await this.page.title();
	};
}
