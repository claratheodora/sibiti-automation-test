const { By, Key} = require("selenium-webdriver");

async function logIn(driver, account){
    await driver.findElement(By.id('email')).sendKeys(account.email);
    await driver.findElement(By.id('password-login')).sendKeys(account.pass, Key.RETURN);
}

async function logInAdmin(driver){
    await driver.findElement(By.name('email')).sendKeys(process.env.ADMIN_EMAIL);
    await driver.findElement(By.name('password')).sendKeys(process.env.ADMIN_PASSWORD, Key.RETURN);
}

module.exports = {
    logIn,
    logInAdmin
};