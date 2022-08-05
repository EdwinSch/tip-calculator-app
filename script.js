// TARGETS
const tipBtns = document.querySelectorAll(".percentageBtn");
const customPercentageInput = document.querySelector(".customPercentageInput");
const tipAmountOutput = document.querySelector(".tipAmount");
const totalAmountOutput = document.querySelector(".totalAmount");
const resetBtn = document.getElementById("resetBtn")


// Function for each button
tipBtns.forEach(button => {
    button.addEventListener('click', function () {
        // Get inputs
        let billTotalInput = parseFloat(document.getElementById("billTotalInput").value);
        let noOfPersonsInput = parseInt(document.getElementById("NoPersonsInput").value);
        // Get percentage from btn
        let percentageSelect = parseInt(this.dataset.perc)
        // Sum 1 - tip per person
        let totalTip = billTotalInput / 100 * percentageSelect
        let tipPerPerson = totalTip / noOfPersonsInput;
        // Push tip per person to DOM
        tipAmountOutput.innerHTML = `&euro; ${tipPerPerson.toFixed(2)}`
        // Sum 2 - total per person
        let grandTotal = billTotalInput + totalTip;
        let totalPerPerson = grandTotal / noOfPersonsInput;
        // push total per person to DOM
        totalAmountOutput.innerHTML = `&euro; ${totalPerPerson.toFixed(2)}`;


    })
});


// Function for custom percentage input

customPercentageInput.addEventListener('keyup', function () {
    // Get inputs
    let billTotalInput = parseFloat(document.getElementById("billTotalInput").value);
    let noOfPersonsInput = parseInt(document.getElementById("NoPersonsInput").value);
    // Get percentage from input
    let customPercentage = parseInt(customPercentageInput.value);
    // Sum 1 - tip per person
    let totalTip = billTotalInput / 100 * customPercentage;
    let tipPerPerson = totalTip / noOfPersonsInput;
    // Push tip per person to DOM
    tipAmountOutput.innerHTML = `&euro; ${tipPerPerson.toFixed(2)}`
    // Sum 2 - total per person
    let grandTotal = billTotalInput + totalTip;
    let totalPerPerson = grandTotal / noOfPersonsInput;
    // push total per person to DOM
    totalAmountOutput.innerHTML = `&euro; ${totalPerPerson.toFixed(2)}`;

})

// Reload button function

resetBtn.addEventListener('click', function () {
    location.reload();

})

// TO DO: Responsive CSS
// TO DO: Error No of people input when empty
// TO DO: REFACTOR Math sum
