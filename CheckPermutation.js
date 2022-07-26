//Question

// Check Permutation: Given two strings, write a method to decide if one is a permutation of the 
// other. Check Permutation: Given two strings, write a method to decide if one is a permutation of the 
// other. 


var checkPermute = function(stringOne, stringTwo) {
    // if different lengths, return false
    if (stringOne.length !== stringTwo.length) {
      return false;
    // else sort and compare 
    // (doesnt matter how it's sorted, as long as it's sorted the same way)
    } else {
      var sortedStringOne = stringOne.split('').sort().join('');
      var sortedStringTwo = stringTwo.split('').sort().join('');
      return sortedStringOne === sortedStringTwo;
    }
  };
  

  // Tests
  console.log(checkPermute('aba', 'aab'), true);   //true true
  console.log(checkPermute('aba', 'aaba'), false);  //false false
  console.log(checkPermute('abaa', 'aaba'), false);  //true true