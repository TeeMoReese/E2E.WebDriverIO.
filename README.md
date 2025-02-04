# Test Automation (Urban.Routes)

## Project Description
Project 8 is an automated testing project that covers the end-to-end process of ordering a taxi using a simulated platform with WebdriverIO and Visual Studio. The project tests the full flow of placing a taxi order, including selecting options, filling out forms, and interacting with modal windows. This project automates various user interactions, ensuring that the system responds as expected to specific input scenarios.

## Features Tested:
1. **Setting the Address** – Automates input for both pickup and drop-off addresses.  
2. **Selecting a Supportive Plan** – Chooses a supportive service plan option during the taxi booking process.  
3. **Filling in the Phone Number** – Simulates entering the user's phone number.  
4. **Adding a Credit Card** – Handles credit card input, including the tricky behavior of enabling the "link" button when the card CVV input loses focus.  
5. **Writing a Message for the Driver** – Inputs a custom message for the driver.  
6. **Ordering a Blanket and Handkerchiefs** – Ensures proper selection and state validation of ordering additional items (blankets and handkerchiefs).  
7. **Ordering 2 Ice Creams** – Handles ordering two ice creams using clickable plus and minus icons.  
8. **Car Search Modal** – Tests for the appearance of the car search modal.  
9. **Waiting for the Driver Info to Appear** – Optionally waits for driver details to be displayed after a car has been assigned.  

---

## Technologies and Techniques Used

### Technologies:
- **WebdriverIO** – The testing framework used to automate browser interactions.  
- **Node.js** – For setting up and running the WebdriverIO tests.  
- **Visual Studio Code (VS Code)** – The development environment used to write and manage the code.  
- **JavaScript** – The language used to create the test scripts.  
- **Mocha** – Testing framework integrated into WebdriverIO.  

### Key Techniques:
- **Waiting for Elements** – Used `waitForDisplayed` to ensure that modal windows or input fields are ready for interaction.  
- **Handling Modal Dialogs** – Automated interactions with modals like the "car search" and "credit card" modals.  
- **Simulating User Input** – Used WebdriverIO's commands to simulate clicking, typing, and tabbing to mimic real user interactions.  
- **Form Field Validation** – Automatically inputs data and verifies if the expected actions (such as enabling buttons or showing modals) happen accordingly.  

---

## Setup Instructions

### Prerequisites:
- **Node.js (v14 or higher)** should be installed on your system.  
- **Visual Studio Code (VS Code)** for writing and managing the test scripts.  
- **npm (Node Package Manager)** – Installed with Node.js, used to install dependencies.  

### Project Structure:
- `test/specs/` – Contains the end-to-end test scripts such as `createAnOrder.e2e.js`.  
- `test/pageobjects/` – Includes page object models such as `page.js` which encapsulate logic for interacting with the web elements.  
- `wdio.conf.js` – The configuration file for WebdriverIO.  

---

## Running Tests in Visual Studio Code

1. Open the project folder in VS Code.  
2. Run tests directly using the terminal by executing the command below.  
3. You can also use the VS Code terminal to debug or step through individual test cases.  

### To run all the tests:
```sh
npm run wdio
