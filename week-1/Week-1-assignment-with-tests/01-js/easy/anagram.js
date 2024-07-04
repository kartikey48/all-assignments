/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  // Function to create a character count object
  function createCharObject(string) {
    let charObject = {};
    for (let char of string) {
      if (charObject[char]) {
        charObject[char]++;
      } else {
        charObject[char] = 1;
      }
    }
    return charObject;
  }

  // Create character count objects for both strings
  const charObject1 = createCharObject(str1);
  const charObject2 = createCharObject(str2);

  // Compare the two character count objects
  for (let char in charObject1) {
    if (charObject1[char] !== charObject2[char]) {
      return false;
    }
  }

  return true;
}

// Example usage
console.log(isAnagram("kartikey", "keyarti")); // Should print: false
console.log(isAnagram("listen", "silent")); // Should print: true

module.exports = isAnagram;
