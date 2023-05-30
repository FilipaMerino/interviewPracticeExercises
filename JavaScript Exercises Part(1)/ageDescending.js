const users = [
  {id: 1,
  name: "Jack",
  isActive: true,
  age: 23,
  },
  {
    id:2,
    name: "John",
    isActive: true,
    age: 17,
  },
  {
    id: 3,
    name: "Mike",
    isActive: false,
    age: 29,
  }
];


function sortUsersAge(users){

  //1 Sort by age

  const sortedAge = users.sort((user1,user2) => user1.age < user2.age ? 1:-1);

  //2. Get users name by age

  const sortedUsers = sortedAge.map((user) => user.name);

  return sortedUsers
};

const ageSorted = sortUsersAge(users);

console.log(ageSorted);
