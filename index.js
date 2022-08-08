//create a function that returns an object with the letter and the length of the longest substring of that letter.

//create an array of words
var words = ["aaaab", "bbgg", "ghjj"];
//add the array of words in order and bind it to a variable 
var addAll = words[0] + words[1] + words[2];
//console log it 
console.log(addAll);

//all of them added together in somewhat order === "aaaabbbggghjj"
//the most frequent letter === a
// the length of a === 4

//write a function that displays it as an object 



function longestSubstring(str){
  //create an object to list the characters
  let counter = {};
  //make the characters lowercase
  let lowerCase = str.toLowerCase();
  //create a for loop to loop over the lowercase string
  for(let char of lowerCase) {
    //create key/value for counter 
    counter[char] = counter[char] + 1 || 1;
  };
  //return the object with letters and number of characters
  return counter
};
//console log the function and check the string "aaaabbbggghjj"
console.log(longestSubstring("aaaabbbggghjj"));
