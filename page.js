module.exports = {
    // Inputs
    fromField: '#from',
    toField: '#to',
    phoneNumberField: '#phone',
    codeField: '#code',
   
    // Buttons
    callATaxiButton: 'button=Call a taxi',
    phoneNumberButton: '//div[starts-with(text(), "Phone number")]',
    nextButton: 'button=Next',
    confirmButton: 'button=Confirm',
    blanketandhankerchiefsButton: '//*[@id="root"]/div/div[3]/div[3]/div[2]/div[2]/div[4]/div[2]/div[1]/div/div[2]/div/span',
    ordercardButton: '//*[@id="root"]/div/div[3]/div[4]/button',

    //Elements
    supportiveButton: 'div=Supportive',
    businessButton: '//*[@id="root"]/div/div[3]/div[3]/div[2]/div[1]/div[1]',
    paymentMethod: '//*[@id="root"]/div/div[3]/div[3]/div[2]/div[2]/div[2]/div[1]',
    addCard: '//*[@id="root"]/div/div[2]/div[2]/div[1]/div[2]/div[3]/div[2]',
    addCardNumber:'//*[@id="number"]',
    addCvvNumber: '/html/body/div[1]/div/div[2]/div[2]/div[2]/form/div[1]/div[2]/div[2]/div[2]/input',
    addingACardTitle: '//*[@id="root"]/div/div[2]/div[2]/div[2]/div',
    selectLink:'//*[@id="root"]/div/div[2]/div[2]/div[2]/form/div[3]/button[1]',
    messageDriver: '#comment',
    inputMessage: '/html/body/div[1]/div/div[3]/div[3]/div[2]/div[2]/div[3]/div/input',
    orderblanketandHandkerchiefs: '//*[@id="root"]/div/div[3]/div[3]/div[2]/div[2]/div[4]/div[2]/div[1]/div/div[1]',
    selectblanketandHankerchiefs: '/html/body/div[1]/div/div[3]/div[3]/div[2]/div[2]/div[4]/div[2]/div[1]/div/div[2]/div/span',
    blanketandhankerchiefsCheckbox: '//*[@id="root"]/div/div[3]/div[3]/div[2]/div[2]/div[4]/div[2]/div[1]/div/div[2]/div/input',
    icecreamOption: '//*[@id="root"]/div/div[3]/div[3]/div[2]/div[2]/div[4]/div[2]/div[3]/div/div[2]/div[1]/div/div[1]',
    icecreamMinus: '//*[@id="root"]/div/div[3]/div[3]/div[2]/div[2]/div[4]/div[2]/div[3]/div/div[2]/div[1]/div/div[2]/div/div[1]',
    icecreamPlus: '//*[@id="root"]/div/div[3]/div[3]/div[2]/div[2]/div[4]/div[2]/div[3]/div/div[2]/div[1]/div/div[2]/div/div[3]',
    icecreamCounter: '//*[@id="root"]/div/div[3]/div[3]/div[2]/div[2]/div[4]/div[2]/div[3]/div/div[2]/div[1]/div/div[2]/div',
    ordercardButton: '//*[@id="root"]/div/div[3]/div[4]/button',
    soundproofCurtain: '//*[@id="root"]/div/div[3]/div[3]/div[2]/div[2]/div[4]/div[2]/div[2]/div/div[2]/div/span',


    // Modals
    phoneNumberModal: '.modal',
    carsearchModal: '.modal',
    driversearchModal: '.modal',
    creditcardModal: './/*[@id="root"]/div/div[2]/div[2]/div[2]/form',

    // Functions
    fillAddresses: async function(from, to) {
        const fromField = await $(this.fromField);
        await fromField.setValue(from);
        const toField = await $(this.toField);
        await toField.setValue(to);
        const callATaxiButton = await $(this.callATaxiButton);
        await callATaxiButton.waitForDisplayed();
        await callATaxiButton.click();
    },

    selectSupportive: async function() {
        const supportiveButton = await $(this.supportiveButton);
        await supportiveButton.click();
    },

    selectBusiness: async function() {
        const businessButton = await $(this.businessButton);
        await businessButton.click();
    },

    fillPhoneNumber: async function(phoneNumber) {
        const phoneNumberButton = await $(this.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const phoneNumberModal = await $(this.phoneNumberModal);
        await phoneNumberModal.waitForDisplayed()
        const phoneNumberField = await $(this.phoneNumberField);
        await phoneNumberField.waitForDisplayed();
        await phoneNumberField.setValue(phoneNumber);
    },
    submitPhoneNumber: async function(phoneNumber) {
        await this.fillPhoneNumber(phoneNumber);
        // we are starting interception of request from the moment of method call
        await browser.setupInterceptor();
        await $(this.nextButton).click();
        // we should wait for response
        // eslint-disable-next-line wdio/no-pause
        await browser.pause(2000);
        const codeField = await $(this.codeField);
        // collect all responses
        const requests = await browser.getRequests();
        // use first response
        await expect(requests.length).toBe(1)
        const code = await requests[0].response.body.code
        await codeField.setValue(code)
        await $(this.confirmButton).click()
    },
    // Add Credit Card
    addingCreditCard: async function(cardnumber,cvvcode) {
        const paymentMethod = await $(this.paymentMethod);
        await paymentMethod.waitForDisplayed();
        await paymentMethod.click();

        const addCard = await $(this.addCard);
        await addCard.click(); 

        const addCardNumber = await $(this.addCardNumber);
        await addCardNumber.setValue(cardnumber)

        const addCvvNumber = await $(this.addCvvNumber);
        await addCvvNumber.setValue(cvvcode)

        const creditcardModal = await $(this.creditcardModal);
        await creditcardModal.click ();
        const selectLink = await $(this.selectLink);
        await selectLink.click();


    },

    //Writing a message for the driver
    addMessageToTheDriver: async function (message) {
        const messageDriver = await $(this.messageDriver);
        await messageDriver.setValue(message);
        
    },

    // Placing Orders
    orderBlanketAndHandkerchiefs: async function () {
        const blanketandhankerchiefs = await $(this.selectblanketandHankerchiefs);
        await blanketandhankerchiefs.click();
    },

    // Ordering 2 ice creams
    ordericeCreams: async function (quantity = 2) {
        const iceCreamPlus = await $(this.icecreamPlus);  // Selector for plus icon
        await iceCreamPlus.click();  // Click the plus icon to increase the count to 1
        await iceCreamPlus.click();  // Click again to increase the count to 2};
    },

    // Ordering Soundproof curtain
    ordersoundproofCurtain: async function () {
        const soundproofcurtain = await $(this.soundproofCurtain);
        await soundproofcurtain.click();
    },

   
    placeOrder: async function () {
        const orderButton = await $(this.ordercardButton);
        await orderButton.waitForDisplayed();
        await orderButton.click();

    },

    // Driver Search Modal
    waitForDriverInfo: async function () {
        const driverSearchModal = await $('#driversearchModal');  
        await driverSearchModal.waitForDisplayed({ timeout: 10000 });  
        const driverInfo = await $('#driver-info');  
        await driverInfo.waitForDisplayed({ timeout: 10000 });  
        await expect(driverInfo).toBeDisplayed();  
    }
}