const { By, Key} = require("selenium-webdriver");

async function logIn(driver, account){
    await driver.findElement(By.id('email')).sendKeys(account.email);
    await driver.findElement(By.id('password-login')).sendKeys(account.pass, Key.RETURN);
}

module.exports = logIn;