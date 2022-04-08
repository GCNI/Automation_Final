import secrets from '../pages/secrets';
import CernerAssociateLoginPage from '../pages/cernerAssociateLoginPage';
import WikiLoginPage from '../pages/wikiLoginPage';
import DomainStrategyPage from '../pages/cernerWiki/domainStrategyPage';
import CssaLoginPage from '../pages/cssa/cssaLoginPage';
import NewRequestPage from '../pages/cssa/newRequestPage';

const associateLoginPage = new CernerAssociateLoginPage();
const wikiLoginPage = new WikiLoginPage();
const domainsPage = new DomainStrategyPage();
const cssaLoginPage = new CssaLoginPage();
const newRequestPage = new NewRequestPage();

describe('Testing CSSA Login', () => {
  
  beforeEach(() => {
    // Open Wiki and login
    browser.url(domainsPage.url);
    wikiLoginPage.scrollToCernerAssociateBtn();
    wikiLoginPage.clickCernerAssociateBtn();
    if (browser.getTitle() === associateLoginPage.title) { // TestData.Associate_Login_Page_Title) {
      associateLoginPage.login(secrets.bwlUser, secrets.bwlUserPass);
    }
    expect(browser).toHaveTitle(domainsPage.title);

    // Click M1941 Cert link
    domainsPage.clickAcceptCookiesBtn();
    domainsPage.clickM1941CertLink();
    //expect(browser.getTitle()).toEqual("Test")
    expect(browser).toHaveTitle(cssaLoginPage.title);
    
  });

  afterEach(() => {
    browser.refresh()
  });

  xit('should navigate to CSSA Domain\'s page, log in to Cerner Wiki, click link to CSSA and log in', () => {
    // Login with invalid user
    cssaLoginPage.login(secrets.invalidUser, secrets.invalidUserPass);
    const errorMessage = cssaLoginPage.errorMessageText();
    expect(errorMessage).toEqual(cssaLoginPage.errorMessage);  
  })

  it('Valid User Login', async() => {
    // Login with valid user
    cssaLoginPage.login(secrets.user, secrets.userPass);
    expect(browser).toHaveTitle(newRequestPage.title);
    expect(browser).toHaveUrlContaining(newRequestPage.url);
    browser.pause(8000);  
  });

xit("Check for presence of elements", function(){
    expect(newRequestPage.newRequestBtnLocator).toBeDisplayed()
    expect(newRequestPage.myRequestBtnLocator).toBeDisplayed()
    expect(newRequestPage.descriptionFieldLocator).toBeDisplayed()
  })
  
});
