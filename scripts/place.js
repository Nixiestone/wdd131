document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = new Date(document.lastModified).toLocaleDateString();

function calculateWindChill(temp, windSpeed) {
    // Formula for wind chill in Fahrenheit: 35.74 + 0.6215*T - 35.75*(V^0.16) + 0.4275*T*(V^0.16)
    return 35.74 + (0.6215 * temp) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temp * Math.pow(windSpeed, 0.16));
}

const tempElement = document.getElementById('temp');
const windSpeedElement = document.getElementById('wind-speed');
const windChillElement = document.getElementById('wind-chill');

const temp = parseFloat(tempElement.textContent);
const windSpeed = parseFloat(windSpeedElement.textContent);

if (temp <= 50 && windSpeed > 3) {
    const windChill = calculateWindChill(temp, windSpeed);
    windChillElement.textContent = windChill.toFixed(1) + "°F";
} else {
    windChillElement.textContent = "N/A";
}