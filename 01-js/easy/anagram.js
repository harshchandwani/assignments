/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const newStr1 = str1.toLowerCase().replace(/\s/g, '');
  const newStr2 = str2.toLowerCase().replace(/\s/g, '');
  if(newStr1.length != newStr2.length){
    return false;
  } 

  const charCount = {};
  for(let char of newStr1){
    charCount[char] = (charCount[char] || 0) + 1;
  }
  for(let char of newStr2){
    if(!charCount[char]){
      return false;
    }
    charCount[char]--;
  }
  return true;
}

module.exports = isAnagram;

