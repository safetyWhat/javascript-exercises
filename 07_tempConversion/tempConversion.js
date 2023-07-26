const convertToCelsius = function(fTemp) {
  let cTemp = (fTemp - 32) * 5/9;
  if (Number.isInteger(cTemp)) {
    return cTemp;
  } else {
  let temp = cTemp.toFixed(1);
  return Number(temp);
  }
};

const convertToFahrenheit = function(cTemp) {
  let fTemp = (cTemp * 9/5 + 32);
  if (Number.isInteger(fTemp)) {
    return fTemp;
  } else {
  let temp = fTemp.toFixed(1);
  return Number(temp);
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
