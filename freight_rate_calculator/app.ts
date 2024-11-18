document.getElementById('freight-form')?.addEventListener('submit', function (event) {
    event.preventDefault();
    calculateFreightDifference();
});

document.getElementById('clear-form')?.addEventListener('click', function () {
    clearForm();
});

function calculateFreightDifference() {
    const oldRate = parseFloat((document.getElementById('old-rate') as HTMLInputElement).value);
    const currentRate = parseFloat((document.getElementById('current-rate') as HTMLInputElement).value);
    const usdRate = parseFloat((document.getElementById('usd-rate') as HTMLInputElement).value);
    const cbm = parseFloat((document.getElementById('cbm') as HTMLInputElement).value);
    const quantity = parseFloat((document.getElementById('quantity') as HTMLInputElement).value);

    if (isNaN(oldRate) || isNaN(currentRate) || isNaN(usdRate) || isNaN(cbm) || isNaN(quantity)) {
        displayResult("Please enter valid numbers in all fields.");
        return;
    }

    const containerCBM = 68;
    const freightDifference = ((currentRate - oldRate) * usdRate) / containerCBM * cbm / quantity;
    displayResult(`The extra freight rate difference is: ${freightDifference.toFixed(2)} PKR per unit.`);
}

function clearForm() {
    (document.getElementById('freight-form') as HTMLFormElement).reset();
    displayResult("");
}

function displayResult(message: string) {
    const resultDiv = document.getElementById('result');
    if (resultDiv) {
        resultDiv.textContent = message;
    }
}
