const { By, Key} = require("selenium-webdriver");
const sleep = require("await-sleep");

async function confirmation(driver){
    await driver.findElement(By.linkText('Pembayaran')).click();
    await sleep(2500);
    await driver.findElement(By.css('.btn')).click();

    await driver.findElement(By.name('account_name')).sendKeys('Test');
    await driver.findElement(By.name('bank_name')).sendKeys('TestBank');
    await driver.findElement(By.id('date')).click();
    await driver.findElement(By.className('picker__today')).click();
    await driver.findElement(By.className('picker__close')).click();
    
    const upload = await driver.findElement(By.className('btn'));
    await upload.click();
    await sleep(2500);
    //await upload.sendKeys('C:\Users\HP\Downloads\huh.png');
}
module.exports = confirmation;