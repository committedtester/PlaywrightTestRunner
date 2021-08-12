import { Page } from "@playwright/test";

export class HomePage {

    page;
    constructor(page:Page){
        this.page= page;
    }

    idPolymerLink = "a[data-source='http://polymer-project.org']";

    idPolymerWaitFor = "div[class='todoapp'] h1";

    GotoTodosURL = async ():Promise<void> => {
		await this.page.goto("http://todomvc.com//");
	};

    GetTitle = async (): Promise<string> => {
        return await this.page.innerText('.navbar__title');
    }


}


