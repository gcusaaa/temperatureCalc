document.addEventListener("DOMContentLoaded", function () {
    function fahrenheitToCelsius(fahrenheit) {
        return ((fahrenheit - 32) *5) / 9;
    }

    function updateCelsius() {
        let fahrenheitInput = document.getElementById("slotFahrenheit");
        let celciusOutput = document.getElementById("outputCelcius");

        if(!Number.isNaN(parseFloat(fahrenheitInput.value))) {
            let fahrenheitValue = parseFloat(fahrenheitInput.value);
            let celciusValue = fahrenheitToCelsius(fahrenheitValue).toFixed(2);
            celciusOutput.textContent = celciusValue + " °C";
        } else {
            celciusOutput.textContent = "Invalid input";
        }
    }

    document.getElementById("slotFahrenheit").addEventListener("input", updateCelsius);
});