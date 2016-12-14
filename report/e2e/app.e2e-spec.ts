import { ReportPage } from './app.po';

describe('report App', function() {
  let page: ReportPage;

  beforeEach(() => {
    page = new ReportPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('rprt works!');
  });
});
