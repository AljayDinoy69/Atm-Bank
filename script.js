let balance = 10000;
let pin = "061004";
let enteredPin = "";
let isAuthenticated = false;

function updateScreen(message) {
    document.getElementById("message").textContent = message;
}

function updateBalance() {
    document.getElementById("balance").textContent = `Balance: $${balance.toFixed(2)}`;
}

function enterPin(digit) {
    if (enteredPin.length < 6) {
        enteredPin += digit;
        updateScreen("Enter PIN: " + "*".repeat(enteredPin.length));
    }
}

function clearPin() {
    enteredPin = "";
    updateScreen("Enter PIN:");
}

function submitPin() {
    if (enteredPin === pin) {
        isAuthenticated = true;
        updateScreen("PIN accepted. Choose an action.");
        updateBalance();
    } else {
        isAuthenticated = false;
        updateScreen("Incorrect PIN. Please try again.");
        enteredPin = "";
    }
}

function withdraw() {
    if (!isAuthenticated) {
        updateScreen("Please enter your PIN first.");
        return;
    }

    const amount = parseFloat(prompt("Enter withdrawal amount:"));
    if (isNaN(amount) || amount <= 0) {
        updateScreen("Invalid amount. Please try again.");
    } else if (amount > balance) {
        updateScreen("Insufficient funds.");
    } else {
        balance -= amount;
        updateScreen(`Withdrawn $${amount.toFixed(2)}`);
        updateBalance();
    }
}

function deposit() {
    if (!isAuthenticated) {
        updateScreen("Please enter your PIN first.");
        return;
    }

    const amount = parseFloat(prompt("Enter deposit amount:"));
    if (isNaN(amount) || amount <= 0) {
        updateScreen("Invalid amount. Please try again.");
    } else {
        balance += amount;
        updateScreen(`Deposited $${amount.toFixed(2)}`);
        updateBalance();
    }
}

function checkBalance() {
    if (!isAuthenticated) {
        updateScreen("Please enter your PIN first.");
        return;
    }

    updateScreen(`Your balance is $${balance.toFixed(2)}`);
}

function exit() {
    isAuthenticated = false;
    enteredPin = "";
    updateScreen("Thank you for using Dinoy ATM Bankrop. Goodbye!");
    document.getElementById("balance").textContent = "";
}

updateScreen("Welcome! Please enter your PIN.");