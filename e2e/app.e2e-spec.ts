import { ContactlistWebPage } from './app.po';

describe('contactlist-web App', function() {
  let page: ContactlistWebPage;

  beforeEach(() => {
    page = new ContactlistWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
