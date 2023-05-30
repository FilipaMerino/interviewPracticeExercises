// Write a function which gets an array and an element and returns an array with this element at the end

const numbers= [1,2,3,4,5,6,7,8,9,10];


function elementToArray(array, element){
  return [...array, element] // => creating a copy of the array so we don't mess the old one
};

const newNumbers = elementToArray(numbers, 4);
