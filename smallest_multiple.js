/**
 * Build a function that finds the smallest positive number that is evenly
 * divisible by all of the numbers starting from 1 up to the value passed into your function.
 *
 * @param  { Number } ceiling This value will serve as your ceiling.
 * @return { Number }         Lowest Positive Number that is evenly divisible by all numbers
 *                            between 1 and `ceiling`
 */
module.exports = function(ceiling) {
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

  arrayOfArrays = [];

  for (i = 2; i < ceiling; i++) {
    arrayOfArrays.push(primeFactorization(i));
  }

  return lowestCommonMultiple;
};

//college try

//4.5ms to beats
