const { By, Key} = require("selenium-webdriver");

async function selectRegion(driver){
    await driver.findElement(By.linkText('Pembayaran')).click();

    await driver.findElement(By.xpath("//input[@value='- Pilih Cabang / Kategori -']")).click();
    await driver.findElement(By.xpath("//li[@class=''][1]")).click();
    
    //await driver.findElement(By.css("input:contains('Surabaya')")).click();
    //await driver.findElement(By.xpath("//input[@class='.select-dropdown'][2]")).click();
    //await driver.findElement(By.xpath("//li[@class='']")).click();

}
module.exports = selectRegion;