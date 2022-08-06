// TARGETS
const tipBtns = document.querySelectorAll(".percentageBtn");
const customPercentageInput = document.querySelector(".customPercentageInput");
const tipAmountOutput = document.querySelector(".tipAmount");
const totalAmountOutput = document.querySelector(".totalAmount");
const resetBtn = document.getElementById("resetBtn")

const billTotalInput = document.getElementById("billTotalInput");
const noOfPersonsInput = document.getElementById("NoPersonsInput");

// Function for each button
tipBtns.forEach(button => {
    button.addEventListener('click', function () {
        // Get inputs
        let billValue = parseFloat(billTotalInput.value);
        let personsValue = parseInt(noOfPersonsInput.value);

        if (isNaN(billValue)) {
            inputError(billTotalInput);
        }
        if (isNaN(personsValue)) {
            inputError(noOfPersonsInput);
        } else {
            // Get percentage from btn
            let percentageSelect = parseInt(this.dataset.perc)
            // Sum 1 - tip per person
            let totalTip = billValue / 100 * percentageSelect
            let tipPerPerson = totalTip / personsValue;
            // Push tip per person to DOM
            tipAmountOutput.innerHTML = `&euro; ${tipPerPerson.toFixed(2)}`
            // Sum 2 - total per person
            let grandTotal = billValue + totalTip;
            let totalPerPerson = grandTotal / personsValue;
            // push total per person to DOM
            totalAmountOutput.innerHTML = `&euro; ${totalPerPerson.toFixed(2)}`;
        }

    })
});


// Function for custom percentage input

customPercentageInput.addEventListener('keyup', function () {
    // Get inputs
    let billValue = parseFloat(billTotalInput.value);
    let personsValue = parseInt(noOfPersonsInput.value);

    if (isNaN(billValue)) {
        inputError(billTotalInput);
    }
    if (isNaN(personsValue)) {
        inputError(noOfPersonsInput);
    }
    else {
        // Get percentage from input
        let customPercentage = parseInt(customPercentageInput.value);
        // Sum 1 - tip per person
        let totalTip = billValue / 100 * customPercentage;
        let tipPerPerson = totalTip / personsValue;
        // Push tip per person to DOM
        tipAmountOutput.innerHTML = `&euro; ${tipPerPerson.toFixed(2)}`
        // Sum 2 - total per person
        let grandTotal = billValue + totalTip;
        let totalPerPerson = grandTotal / personsValue;
        // push total per person to DOM
        totalAmountOutput.innerHTML = `&euro; ${totalPerPerson.toFixed(2)}`;
    }

})

// Reload button function

resetBtn.addEventListener('click', function () {
    location.reload();

})

// GLOBAL functions 

function inputError(inputfield) {
    inputfield.style.background = "red";
    setTimeout(() => {
        inputfield.style.background = "#dbeaeb";
    }, 1000);
}

// TO DO: REFACTOR Math sum

