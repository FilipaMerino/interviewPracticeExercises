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

//1. Create a new array
const activeUsers=[];

//2. Create a function to get all the active users
function getActive(users){

  users.forEach(user => {
    if (user.isActive){
      activeUsers.push(user.name);
    };
  });
  return activeUsers;
};

const active = getActive(users);
console.log(active);
