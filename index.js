const {Builder} = require("selenium-webdriver");
const signUp = require('./pages/signup');
const logIn = require('./pages/login');
const selectRegion = require('./pages/selectregion');
const confirmation = require('./pages/confirmation');

(async function() {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://demo.olimpiade.id/");
    
    //const account = await signUp(driver);
    const account = {
        'email' :  "Zita.Stehr1@hotmail.com",
        'pass' : "clrtpdXeKdzGuBm"
    };
    await logIn(driver, account);
    //await selectRegion(driver);
    await confirmation(driver);
}());

