/**
 * Build a function that finds the smallest positive number that is evenly
 * divisible by all of the numbers starting from 1 up to the value passed into your function.
 *
 * @param  { Number } ceiling This value will serve as your ceiling.
 * @return { Number }         Lowest Positive Number that is evenly divisible by all numbers
 *                            between 1 and `ceiling`
 */
console.time("test");

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

  console.timeEnd("test");

  return lowestCommonMultiple;
};

//college try
function primeFactorization(num, arr = []) {
  var primeFactors = arr;
  if (num === 2) {
    return primeFactors.push(num);
  }

  var isItPrime = true;

  for (i = 2; i < num; i++) {
    if (num % i === 0) {
      var y = num / i;
      isItPrime = false;
      primeFactorization(i, primeFactors);
      primeFactorization(y, primeFactors);
    }
  }
  if (isItPrime) {
    primeFactors.push(num);
  }

  return primeFactors;
}

function (number){

}

//4.5ms to beats

console.log(primeFactorization(100));
