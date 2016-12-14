import { browser, element, by } from 'protractor';

export class ReportPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('rprt-root h1')).getText();
  }
}
