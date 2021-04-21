let loginPage = function () {
  let userName = element(by.name("txtUsername"));
  let password = element(by.name("txtPassword"));
  let clickLogin = element(by.name("Submit"));
  let forgotPassword = element(by.linkText("Forgot your password?"));

  this.get = (url) => {
    browser.get(url);
  };

  this.enterUserName = (user) => {
    userName.sendKeys(user);
  };

  this.enterPassword = (userPass) => {
    password.sendKeys(userPass);
  };

  this.clickLogin = () => {
    clickLogin.click();
  };

  this.passwordReset = () => {
    forgotPassword.click();
  };
};

module.exports = new loginPage();
