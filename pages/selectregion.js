const { By, Key} = require("selenium-webdriver");

async function selectRegion(driver){
    await driver.findElement(By.linkText('Pembayaran')).click();

    await driver.findElement(By.id('cabang')).click();
    await driver.findElement(By.css('#cabang > option:nth-child(1)')).click();

}
module.exports = selectRegion;