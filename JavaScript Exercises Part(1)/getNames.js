const users = [
  {id: 1,
  name: "Jack",
  isActive: true,
  },
  {
    id:2,
    name: "John",
    isActive: true,
  },
  {
    id: 3,
    name: "Mike",
    isActive: false,
  }
];

// 1. Start a new array
const names = [];

//2. Get only the names of the users
function getNames(users){

  users.forEach(user => {
    names.push(user.name);
  });
  return names;
};


const result = getNames(users);
console.log(result);
