//remove all duplicates from array

const elements = ["A","B","C","B","B"];

const uniqueElements = [];

function removeDuplicates(elements){

  elements.forEach((element) => {
    if (!uniqueElements.includes(element)) {
      uniqueElements.push(element);
    };
  });
  return uniqueElements;
};


console.log(removeDuplicates(elements));

console.log(elements);


// ____________________________________

function removeDuplicates2(array){
  return Array.from(new Set(array));
};

const numbers = [1,2,3,4,5,2,1,3];
const uniqueArray = removeDuplicates2(numbers);

console.log(uniqueArray);
console.log(numbers);

//________________________________

function duplicatesOut(array){
  return Array.from(new Set(array));
};

const arrayNames = ["Filipa", "Bruno", "Lena", "Lena", "Pipa", "Bruno"];
const uniqueNames = duplicatesOut(arrayNames);

console.log(uniqueNames);



