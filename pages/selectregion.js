const { By, Key} = require("selenium-webdriver");
const sleep = require("await-sleep");

async function selectRegion(driver){
    await driver.findElement(By.linkText('Pembayaran')).click();

    await driver.findElement(By.xpath("//input[@value='- Pilih Cabang / Kategori -']")).click();
    await sleep(2000);
    await driver.findElement(By.xpath("//li[@class=''][1]")).click();
    await sleep(2000);

    await driver.findElement(By.className("btn btn-primary btn-lg")).click();
    
}
module.exports = selectRegion;