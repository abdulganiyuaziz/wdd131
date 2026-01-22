// Footer dates
const yearSpan = document.querySelector("#year");
const modifiedSpan = document.querySelector("#modified");

yearSpan.textContent = new Date().getFullYear();
modifiedSpan.textContent = document.lastModified;

// Static weather values
const temperature = 30; // °C
const windSpeed = 10; // km/h

document.querySelector("#temp").textContent = temperature;
document.querySelector("#speed").textContent = windSpeed;

// Wind chill calculation (metric)
function calculateWindChill(temp, speed) {
  return (
    13.12 +
    0.6215 * temp -
    11.37 * Math.pow(speed, 0.16) +
    0.3965 * temp * Math.pow(speed, 0.16)
  ).toFixed(1);
}

// Conditions check
let windChill = "N/A";

if (temperature <= 10 && windSpeed > 4.8) {
  windChill = calculateWindChill(temperature, windSpeed) + " °C";
}

document.querySelector("#windchill").textContent = windChill;
