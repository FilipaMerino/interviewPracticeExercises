//1. Create a function to revert a string:
//1.1 First split the sentence
//1.2 Reverse sentence
//1.3 Join Sentence

function revertString(string){
  const splitString = string.split("");
  const reverseString = splitString.reverse();
  const finalString = reverseString.join(" ");

  return finalString;
};

console.log(revertString("Hello, Filipa!"));
