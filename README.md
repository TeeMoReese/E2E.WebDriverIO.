Test Automation (Urban.Routes)

Project Description
Project 8 is an automated testing project that covers the end-to-end process of ordering a taxi using a simulated platform with WebdriverIO and Visual Studio. The project tests the full flow of placing a taxi order, including selecting options, filling out forms, and interacting with modal windows. This project automates various user interactions, ensuring that the system responds as expected to specific input scenarios.

Features Tested:
1.  Setting the address: Automates input for both pickup and drop-off addresses.
2.  Selecting a Supportive Plan: Chooses a supportive service plan option during the taxi booking process.
3.  Filling in the phone number: Simulates entering the user's phone number.
4.  Adding a credit card: Handles credit card input, including the tricky behavior of enabling the "link" button when the card CVV input loses focus.
5.  Writing a message for the driver: Inputs a custom message for the driver.
6.  Ordering a blanket and handkerchiefs: Ensures proper selection and state validation of ordering additional items (blankets and handkerchiefs).
7.  Ordering 2 Ice Creams: Handles ordering two ice creams using clickable plus and minus icons.
8.  Car search modal: Tests for the appearance of the car search modal.
9.  Waiting for the driver info to appear: Optionally waits for driver details to be displayed after a car has been assigned.

Technologies and Techniques Used
•   WebdriverIO: The testing framework used to automate browser interactions.
•   Node.js: For setting up and running the WebdriverIO tests.
•   VS Studio (Visual Studio Code): The development environment used to write and manage the code.
•   JavaScript: The language used to create the test scripts.
•   Mocha: Testing framework integrated into WebdriverIO.


Key Techniques:
•   Waiting for elements: Used waitForDisplayed to ensure that modal windows or input fields are ready for interaction.
•   Handling modal dialogs: Automated interactions with modals like the "car search" and "credit card" modals.
•   Simulating user input: Used WebdriverIO's commands to simulate clicking, typing, and tabbing to mimic real user interactions.
•   Form field validation: Automatically inputs data and verifies if the expected actions (such as enabling buttons or showing modals) happen accordingly.

Setup Instructions
Prerequisites
•   Node.js (v14 or higher) should be installed on your system.
•   Visual Studio Code (VS Code) for writing and managing the test scripts.
•   npm (Node Package Manager): Installed with Node.js, used to install dependencies.

Project Structure
•   test/specs/: Contains the end-to-end test scripts such as createAnOrder.e2e.js.
•   test/pageobjects/: Includes page object models such as page.js which encapsulate logic for interacting with the web elements.
•   wdio.conf.js: The configuration file for WebdriverIO.



Running Tests in Visual Studio Code
1.  Open the project folder in VS Code.
2.  Run tests directly using the terminal by executing the commands listed above.
3.  You can also use the VS Code terminal to debug or step through individual test cases.

To run all the tests:
Open terminal and copy code: npm run wdio


Test Cases Overview
1. Setting the Address
•   Inputs pickup and drop-off locations using the address form.
2. Selecting Supportive Plan
•   Simulates selecting a supportive service plan during the booking process.
3. Filling in the Phone Number
•   Enters the phone number +13135901477 into the corresponding input field.
4. Adding a Credit Card
•   Enters card details and simulates tabbing out of the CVV field to activate the "link" button.
5. Writing a Message for the Driver
•   Inputs a custom message in the message box for the driver.
6. Ordering a Blanket and Handkerchiefs
•   Automates the selection of blankets and handkerchiefs, ensuring that the selection states are properly validated.
7. Ordering 2 Ice Creams
•   Simulates clicking on the plus button twice to order two ice creams and verifies the ice cream counter.
8. Car Search Modal
•   Verifies that the car search modal appears during the driver search process.
9. Waiting for Driver Info
•   Optionally waits for the driver info to be displayed in the modal once a car is found.

