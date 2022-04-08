const doGetPageTitle = (pageTitle) => {
  browser.waitUntil(() => (browser.getTitle() === pageTitle), 30000);
  return browser.getTitle();
};

const scrollTo = (element) => {
   element.waitForDisplayed({timeout:5000});
   element.scrollIntoView();
};

const doClick = (element) => {
   element.waitForDisplayed({timeout:5000});
   element.click();
};

const doSetValue = (element, value) => {
   element.waitForDisplayed();
   element.setValue(value);
};

const doGetText = (element) => {
   element.waitForDisplayed();
   element.getText();
};

const checkElementDisplayed = (element) => {
   element.waitForDisplayed();
   element.isDisplayed();
};

export default {
  doGetPageTitle,
  doClick,
  scrollTo,
  doSetValue,
  doGetText,
  checkElementDisplayed,
};

// export default elementsUtils;