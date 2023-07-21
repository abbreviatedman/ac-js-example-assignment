// removes spaces from anywhere in the string
function removeSpaces(userInput) {
  return userInput.replaceAll(" ", "");
}

function getMeasurement(userInput) {
  userInput = removeSpaces(userInput);

  return userInput[userInput.length - 1];
}

function getDegrees(userInput) {
  userInput = removeSpaces(userInput);
  if (userInput.endsWith("C") || userInput.endsWith("F")) {
    userInput = userInput.slice(0, -1);
  }

  return Number(userInput);
}

// removeSpaces tests

// removeSpaces should remove any spaces from the start of the string
console.assert(
  removeSpaces(" AnnieCannons") === "AnnieCannons" &&
    removeSpaces("  AnnieCannons") === "AnnieCannons" &&
    removeSpaces("   AnnieCannons") === "AnnieCannons",
  "removeSpaces should remove any spaces from the start of the string"
);

// removeSpaces should remove any spaces from the end of the string
console.assert(
  removeSpaces("AnnieCannons ") === "AnnieCannons" &&
		removeSpaces("AnnieCannons  ") === "AnnieCannons" &&
		removeSpaces("AnnieCannons   ") === "AnnieCannons",
	"removeSpaces should remove any spaces from the end of the string"
);

// getMeasurement tests

console.assert(
  getMeasurement("30C") === "C" && getMeasurement("60F") === "F",
  "getMeasurement should return the measurement type"
);

console.assert(
  getMeasurement(" 30C") === "C" &&
    getMeasurement(" 30 C") === "C" &&
    getMeasurement(" 60 F") === "F",
  "getMeasurement should return the measurement type from a string with spaces"
);

console.assert(
  getMeasurement("-30C") === "C" && getMeasurement("-60F") === "F",
  "getMeasurement should return the measurement type from a string with a negative number in it"
);

console.assert(
  getMeasurement("- 30C") === "C" && getMeasurement("- 60F") === "F",
  "getMeasurement should return the measurement type from a string with a negative number and spaces in it"
);

console.assert(
  getMeasurement("30") === "" && getMeasurement("60") === "",
  "getMeasurement should return an empty string if there is no measurement type"
);

console.assert(
  getMeasurement.toString().includes("removeSpaces"),
  "getMeasurement should call removeSpaces"
);

// getDegrees tests

console.assert(
  getDegrees("30") === 30 && getDegrees("60") === 60,
  "getDegrees should convert a string to a number"
);

console.assert(
  getDegrees("30C") === 30 && getDegrees("30F") === 30,
  "getDegrees should remove the degree type from the string"
);

console.assert(
  getDegrees("-30") === -30 && getDegrees("-10") === -10,
  "getDegrees should handle negative numbers"
);

console.assert(
  getDegrees(" 30") === 30 &&
    getDegrees("30 ") === 30 &&
    getDegrees(" 30 ") === 30,
  "getDegrees should remove any spaces from the string"
);

console.assert(
  getDegrees("C") === "" && getDegrees("F") === "" && getDegrees("") === "",
  "getDegrees should return an empty string if there is no number"
);

console.assert(
  getDegrees(" 30C") === 30 &&
    getDegrees(" 60F") === 60 &&
    getDegrees("30C ") === 30 &&
    getDegrees("-30C") === -30 &&
    getDegrees(" -60F") === -60 &&
    getDegrees("-40C ") === -40 &&
    getDegrees(" -40C ") === -40,
  "getDegrees should handle combinations of issues"
);
