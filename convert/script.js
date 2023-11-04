function convertTemperature() {
    let tempInput = document.getElementById("temperature").value;
    let fromUnit = document.getElementById("fromUnit").value;
    let toUnit = document.getElementById("toUnit").value;

    if (isNaN(tempInput)) {
        alert("Please enter a valid temperature.");
        return;
    }

    let temperature = parseFloat(tempInput);
    let convertedTemperature;

    if (fromUnit === "celsius") {
        if (toUnit === "fahrenheit") {
            convertedTemperature = (temperature * 9 / 5) + 32;
        }
        else {
            convertedTemperature = temperature;
        }
    } 
    else if (fromUnit === "fahrenheit") {
        if (toUnit === "celsius") {
            convertedTemperature = (temperature - 32) * 5 / 9;
        } else {
            convertedTemperature = temperature;
        }
    }

    let resultElement = document.getElementById("result");
    resultElement.textContent = convertedTemperature.toFixed(2) + " " + toUnit;
}


