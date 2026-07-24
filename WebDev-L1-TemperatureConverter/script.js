document.getElementById('convertBtn').addEventListener('click', function () {
    const tempInput = document.getElementById('degrees').value;
    const unit = document.getElementById('unit').value;
    const resultBox = document.getElementById('resultBox');
    const resultText = document.getElementById('resultText');

    if (tempInput === '' || isNaN(tempInput)) {
        resultBox.classList.remove('hidden');
        resultText.style.color = '#dc2626';
        resultText.innerHTML = 'Please enter a valid numeric value.';
        return;
    }

    const temp = parseFloat(tempInput);
    resultText.style.color = '#0f172a';

    let res1, unit1, res2, unit2;

    if (unit === 'celsius') {
        res1 = (temp * 9 / 5) + 32;
        unit1 = '°F';
        res2 = temp + 273.15;
        unit2 = 'K';
    } else if (unit === 'fahrenheit') {
        res1 = (temp - 32) * 5 / 9;
        unit1 = '°C';
        res2 = (temp - 32) * 5 / 9 + 273.15;
        unit2 = 'K';
    } else if (unit === 'kelvin') {
        res1 = temp - 273.15;
        unit1 = '°C';
        res2 = (temp - 273.15) * 9 / 5 + 32;
        unit2 = '°F';
    }

    resultBox.classList.remove('hidden');
    resultText.innerHTML = `${res1.toFixed(2)} ${unit1} &nbsp;|&nbsp; ${res2.toFixed(2)} ${unit2}`;
});
