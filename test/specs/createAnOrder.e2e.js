const page = require('../../page');
const helper = require('../../helper')

describe('Create an order', () => {
    


    it('should save the phone', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
    });

    it('should set the address', async () => {
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st st');
        const address1 = await $(page.fromField)
        const address2 = await $(page.toField)
        await expect(address1).toHaveValue('East 2nd Street, 601');
        await expect(address2).toHaveValue('1300 1st st');
    });

    it('should select supportive', async () => {
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.selectSupportive();
        const supportiveButton = await $(page.supportiveButton);
        await expect(supportiveButton.parentElement()).toHaveElementClass('active');

    });

    it('should select business'), async () => {
        await browser.url('/');
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.selectBusiness();
        const businessButton = await $(page.businessButton);
        await expect(businessButton.parentElement()).toHaveElementClass('active')
    },

    it('should add a credit card', async () => {
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.addingCreditCard(123400004321, 21);
        const cardTitle = await $(page.addingACardTitle);
        await expect(cardTitle).toBeExisting();
    });
    

    it('should write a message for the driver', async () => {
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.addMessageToTheDriver('Hello');
        const messageDriver = await $(page.messageDriver);
        await expect(messageDriver).toHaveValue('Hello');

    });

    it('should order a blanket and handkerchiefs,', async () => {
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.selectSupportive();
        await page.orderBlanketAndHandkerchiefs ();
        const blanketandhankerchiefsCheckbox = await $(page.blanketandhankerchiefsCheckbox);
        await expect(blanketandhankerchiefsCheckbox).toBeSelected();

    });
    

    it('should order 2 ice creams', async () => {
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.selectSupportive();
        await page.ordericeCreams();
        const iceCreamCounter = await $(page.icecreamCounter);
        await expect(iceCreamCounter).toHaveTextContaining('2');

    });

    it('should have car search modal appear', async () => {
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.selectSupportive();
        await page.addMessageToTheDriver('Hello');
        await page.placeOrder();
        await expect($(`${page.carsearchModal}`)).toBeExisting();
    });
        
    it('should display driver search modal with countdown', async () => {
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.selectSupportive();
        await page.addMessageToTheDriver('Hello');
        const messageDriver = await $(page.messageDriver);
        await expect(messageDriver).toHaveValue('Hello');

        
    });

    it('should order sound proof curtain', async () => {
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.selectSupportive();
        await page.ordersoundproofCurtain();
        const soundproofCurtain = await $(page.soundproofCurtain);
        await expect(soundproofCurtain).toBeClickable();
    
    });

})