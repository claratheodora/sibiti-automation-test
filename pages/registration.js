const { By, Key} = require("selenium-webdriver");
const faker = require('faker');

async function registration(driver){
    //data sekolah
    await driver.findElement(By.name('asal_sekolah')).sendKeys(faker.random.word());
    await driver.findElement(By.name('alamat_sekolah')).sendKeys(faker.address.streetAddress());
    await driver.findElement(By.name('no_telp_sekolah')).sendKeys(faker.phone.phoneNumber());

    await driver.findElement(By.xpath("//input[@value='Ya atau tidak']")).click();
    await driver.findElement(By.xpath("//li[@class=''][1]")).click();

    await driver.findElement(By.className('btn btn-primary btn-lg')).click();

    //data peserta
    await driver.findElement(By.name('nama_ketua')).sendKeys(faker.name.firstName());

    await driver.findElement(By.xpath("//label[@for='jenis_kelamin_radioPerempuan']")).click();
    await driver.findElement(By.xpath("//label[@for='mapel_lombaMatematika']")).click();

    await driver.findElement(By.name('foto')).sendKeys('C:/Users/HP/Downloads/huh.png');
    await driver.findElement(By.name('kartu_pelajar_ketua')).sendKeys('C:/Users/HP/Downloads/huh.png');

    await driver.findElement(By.name('nomor_telepon')).sendKeys(faker.phone.phoneNumber());
    await driver.findElement(By.name('nama_pembina')).sendKeys(faker.name.firstName());
    await driver.findElement(By.name('email_ketua')).sendKeys(faker.internet.email());

    await driver.findElement(By.xpath("//button[normalize-space() ='Simpan Data Peserta']")).click();

    //konfirmasi
    await driver.findElement(By.className('btn btn-primary btn-lg')).click(); 
    
    //cetak kartu peserta
    await driver.findElement(By.linkText('Cetak Kartu Peserta')).click();

};

module.exports = registration;