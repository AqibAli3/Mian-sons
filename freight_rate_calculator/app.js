var _a, _b;
(_a = document.getElementById('freight-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    calculateFreightDifference();
});
(_b = document.getElementById('clear-form')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    clearForm();
});
function calculateFreightDifference() {
    var oldRate = parseFloat(document.getElementById('old-rate').value);
    var currentRate = parseFloat(document.getElementById('current-rate').value);
    var usdRate = parseFloat(document.getElementById('usd-rate').value);
    var cbm = parseFloat(document.getElementById('cbm').value);
    var quantity = parseFloat(document.getElementById('quantity').value);
    if (isNaN(oldRate) || isNaN(currentRate) || isNaN(usdRate) || isNaN(cbm) || isNaN(quantity)) {
        displayResult("Please enter valid numbers in all fields.");
        return;
    }
    var containerCBM = 68;
    var freightDifference = ((currentRate - oldRate) * usdRate) / containerCBM * cbm / quantity;
    displayResult("The extra freight rate difference is: ".concat(freightDifference.toFixed(2), " PKR per unit."));
}
function clearForm() {
    document.getElementById('freight-form').reset();
    displayResult("");
}
function displayResult(message) {
    var resultDiv = document.getElementById('result');
    if (resultDiv) {
        resultDiv.textContent = message;
    }
}
