const { By, Key} = require("selenium-webdriver");
const sleep = require("await-sleep");

async function approve(driver, account){
    await driver.get(process.env.ADMIN_SITE + "/kelola-payment/waiting");
    await driver.findElement(By.xpath("//input[@class='form-control input-sm'][1]")).sendKeys(account.hp);
    await sleep(2000);
    await driver.findElement(By.className('btn btn-default dropdown-toggle')).click();
    await driver.findElement(By.className('submit-form')).click();
}
module.exports = approve;