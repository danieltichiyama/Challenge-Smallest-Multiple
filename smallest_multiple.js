/**
 * Build a function that finds the smallest positive number that is evenly
 * divisible by all of the numbers starting from 1 up to the value passed into your function.
 *
 * @param  { Number } ceiling This value will serve as your ceiling.
 * @return { Number }         Lowest Positive Number that is evenly divisible by all numbers
 *                            between 1 and `ceiling`
 */
module.exports = function(ceiling) {
  arrayOfArrays = [];

  for (i = 2; i < ceiling; i++) {
    let valueArray = [];
    valueArray[0] = i;
    arrayOfArrays.push(valueArray);
  }

  lowestCommonMultiple = null;
  multiple = 2;

  while (lowestCommonMultiple === null) {
    arrayOfArrays.forEach(function(element) {
      element[element.length] = element[0] * multiple;
    });

    if (
      arrayOfArrays.every(function(element) {
        return element.includes(arrayOfArrays[0][arrayOfArrays[0].length - 1]);
      })
    ) {
      lowestCommonMultiple = arrayOfArrays[0][arrayOfArrays[0].length - 1];
    }

    multiple++;
  }

  return lowestCommonMultiple;
};
