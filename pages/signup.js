const { By, Key} = require("selenium-webdriver");
const faker = require('faker');

async function signUp(driver){    
    const signup = await driver.findElement(By.id("signup-button"));
    await signup.click();

    // init fake account data
    const email = faker.internet.email();
    const pass = faker.internet.password();

    // input sign up form
    await driver.findElement(By.id('nama')).sendKeys('Automation Test');
    await driver.findElement(By.id('email-signup')).sendKeys(email);
    await driver.findElement(By.id('no_handphone')).sendKeys(faker.phone.phoneNumber());
    await driver.findElement(By.id('password')).sendKeys(pass);
    await driver.findElement(By.id('confirm_password')).sendKeys(pass, Key.RETURN);

    return {
        'email':email,
        'pass':pass
    };
}
module.exports = signUp;