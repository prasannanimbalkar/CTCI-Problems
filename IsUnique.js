//Question

// Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you 
// cannot use additional data structures?


var allUniqueChars = function(string) {
  
    // O(n^2) approach, no additional data structures used
    // for each character, check remaining characters for duplicates
    for (var i = 0; i < string.length; i++) {
      for (var j = i + 1; j < string.length; j++) {
        if (string[i] === string[j]) {
          return false; // if match, return false
        }
      }
    }
    return true; // if no match, return true
};
 
console.log(allUniqueChars("abcde")) //true
console.log(allUniqueChars("aabcde")) //false