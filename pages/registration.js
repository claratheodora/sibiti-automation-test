const { By, Key} = require("selenium-webdriver");
const sleep = require("await-sleep");
const faker = require('faker');

async function registration(driver){
    //data sekolah
    await driver.findElement(By.name('asal_sekolah')).sendKeys(faker.random.word());
    await driver.findElement(By.className('btn btn-primary btn-lg')).click();

    //data peserta
    await driver.findElement(By.name('nama_ketua')).sendKeys(faker.name.firstName());
    await driver.findElement(By.className('select-dropdown')).click();
    await driver.findElement(By.xpath("//li[@class=''][1]")).click();
    await driver.findElement(By.xpath("//label[@for='jenis_kelamin_radioPerempuan']")).click();
    await driver.findElement(By.xpath("//label[@for='mapel_lomba_mescMatematika']")).click();
    await driver.findElement(By.id('gambar')).sendKeys('C:/Users/HP/Downloads/huh.png');
    await driver.findElement(By.xpath("/html/body/section[2]/div/div/div/form/div[7]/button")).click();

    //konfirmasi
    await driver.findElement(By.className('btn btn-primary btn-lg')).click(); 
    
    //cetak kartu peserta
    await driver.findElement(By.linkText('Cetak Kartu Peserta')).click();

};

module.exports = registration;