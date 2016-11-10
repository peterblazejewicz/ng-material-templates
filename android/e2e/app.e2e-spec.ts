import { AndroidPage } from './app.po';

describe('android App', function() {
  let page: AndroidPage;

  beforeEach(() => {
    page = new AndroidPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
