const {Builder} = require("selenium-webdriver");
var remote = require('selenium-webdriver/remote');
const signUp = require('./pages/signup');
const { logIn, logInAdmin } = require('./pages/login');
const selectRegion = require('./pages/selectregion');
const confirmation = require('./pages/confirmation');
const approve = require('./pages/approvement');
require('dotenv').config();

(async function() {
    let driver = await new Builder().forBrowser("chrome").build();
    
    //This will detect your local file
    driver.setFileDetector(new remote.FileDetector); 

    await driver.get(process.env.SITE);
    
    const account = await signUp(driver);

    await logIn(driver, account);
    await selectRegion(driver);
    await confirmation(driver);

    await driver.switchTo().newWindow('tab');
    await driver.get(process.env.ADMIN_SITE);

    await logInAdmin(driver);
    
    await approve(driver, account);

    const handle = await driver.getAllWindowHandles();
    await driver.switchTo().window(handle[0]);

    await driver.get(process.env.SITE + '/dashboard/registrasi');
}());

