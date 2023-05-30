//write a function which can concatenate 2 arrays

function concatenation(array1, array2){
  return array1.concat(...array2);
};

const array1 = [1, 2];
const array2 = ["Filipa", "Bruno"];
console.log(concatenation(array1, array2));


console.log(concatenation([1,2,3,4],[5,6,7,8]));
