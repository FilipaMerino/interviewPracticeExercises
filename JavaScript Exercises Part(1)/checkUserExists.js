const users = [
  {
    name: "Filipa",
    age: 29,
    isActive: true,
  },
  {
    name: "Bruno",
    age: 30,
    isActive: true,
  },
  {
    name: "Desconhecido",
    age:90,
    isActive: false,
  }
];


function findUser(array, userName){
  return array.some((user) => user.name === userName );
}


console.log(findUser(users, "Filipa"));
console.log(findUser(users, "Bruno"));
console.log(findUser(users, "Pipa"));


// some checks if at least one element of the array satisfies the condition
