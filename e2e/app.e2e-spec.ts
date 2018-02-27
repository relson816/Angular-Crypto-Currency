import { AngularCryptoPage } from './app.po';

describe('angular-crypto App', function() {
  let page: AngularCryptoPage;

  beforeEach(() => {
    page = new AngularCryptoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
