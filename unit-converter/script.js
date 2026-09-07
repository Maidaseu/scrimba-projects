/*


 */

const inputValue = document.getElementById("input-value");
const button = document.getElementById("convert-btn");
const lengthResult = document.getElementById("length-result");
const volumeResult = document.getElementById("volume-result");
const massResult = document.getElementById("mass-result");

button.addEventListener("click", function () {
  const number = inputValue.value;
  console.log(number);

  convertLength(number);
  convertVolume(number);
  convertMass(number);
});

// convert meters to feet

function convertLength(inputNumber) {
  const metersToFeet = inputNumber * 3.28084;
  const feetToMeters = inputNumber * 0.3048;
  const roundedMetersToFeet = Math.round(metersToFeet * 1000) / 1000;
  const roundedFeetToMeters = Math.round(feetToMeters * 1000) / 1000;

  let stringResult = `${inputNumber} meters = ${roundedMetersToFeet} feet | ${inputNumber} feet = ${roundedFeetToMeters} meters`;
  lengthResult.textContent = stringResult;
}

// convert liters to gallons

function convertVolume(inputNumber) {
  const litersToGallons = inputNumber * 0.264172;
  const gallonsToLiters = inputNumber * 3.78541;
  const roundedLitersToGallons = Math.round(litersToGallons * 1000) / 1000;
  const roundedGallonsToLiters = Math.round(gallonsToLiters * 1000) / 1000;

  let stringResult = `${inputNumber} liters = ${roundedLitersToGallons} gallons | ${inputNumber} gallons = ${roundedGallonsToLiters} liters`;
  volumeResult.textContent = stringResult;
}

// convert kilograms to pounds

function convertMass(inputNumber) {
  const kilogramsToPounds = inputNumber * 2.20462;
  const poundsToKilograms = inputNumber * 0.453592;
  const roundedKilogramsToPounds = Math.round(kilogramsToPounds * 1000) / 1000;
  const roundedPoundsToKilograms = Math.round(poundsToKilograms * 1000) / 1000;

  let stringResult = `${inputNumber} kilograms = ${roundedKilogramsToPounds} pounds | ${inputNumber} pounds = ${roundedPoundsToKilograms} kilograms`;
  massResult.textContent = stringResult;
}
