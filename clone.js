// 1. Clone the array given below person into a new varibale named clonedPerson

let person = [
  {
    input: { name: 'Ryan' },
    output: { name: 'Ryan' },
  },
  {
    input: { name: { first: 'Ryan', last: 'Haskell-Glatz' } },
    output: { firstName: 'Ryan', lastName: 'Haskell-Glatz' },
  },
  {
    input: { name: 'Ryan', age: 24 },
    output: { name: 'Ryan', age: 24 },
  },
  {
    input: {
      name: { first: 'Ryan', last: 'Haskell-Glatz' },
      birthday: { year: 1993, month: 'Nov' },
    },
    output: {
      firstName: 'Ryan',
      lastName: 'Haskell-Glatz',
      birthdayYear: 1993,
      birthdayMonth: 'Nov',
    },
  },
];

var clonedPerson = JSON.parse(JSON.stringify(person));

console.log((clonedPerson[1].input.name)===(person[1].input.name)?true:false);  //false

console.log((person===clonedPerson)?"not cloned":"cloned") // cloned

// 2. Write a function named cloneObject that accepts an object and returns the clone of the object
function cloneObject(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// Run the test below to check your function

let user = {
  name: 'John',
  house: 'Stark',
  sisters: ['Arya', 'Sansa'],
};
let cloned = cloneObject(user);

let person = {
  firstName: 'John',
  lastName: 'Doe',
  address: {
    street: 'North 1st',
    city: 'San Jose',
    state: 'CA',
    country: 'USA',
  },
};

let clonedPerson = cloneObject(user);

console.log(
  `The user object is ${
    user == cloned ? `not clone` : `cloned successfully 😁👑`
  }`
); // The user object is cloned successfully 😁👑

console.log(
  `The person object is ${
    person == clonedPerson ? `not clone` : `cloned successfully 😁👑`
  }`
); //The person object is cloned successfully 😁👑


// 3. Clone the allBlogs variable into a new variable named allBlogsClone
var allBlogs = {
    id: 1,
    title: "Alamofire JSON Serialization",
    body: "All about serialization in Alamofire...",
    author: {
        id: 1,
        fullName: "Jeff Potter",
        username: "jpotts18"
    },
    comments: [
        {
          id: 1,
          body: "Thanks for the help Jeff, this saved me hours"
        },
        {
          id: 2,
          body: "Your welcome. I am happy to help!"
        }
    ]
}

let allBlogsClone = JSON.parse(JSON.stringify(allBlogs)); 

console.log((allBlogs !==allBlogsClone)?"Cloned":"Not Cloned");  // Cloned


// 4.Write a function getDeepClone that accepts any array or object. It can be multiple level nested.

function getDeepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

/*
For Shallow Clone:
1. Spread Method
let b = {...a}
Deep cloning by Spread Method
let b = {...a, ...a.obj, ...a.obj.array} 
2. Assign Method
let a = [1,2,3,4,5,6]
let b = Object.assign({},a);
console.log(a === b); // false

For Deep Clone
1. JSON.parse(JSON.stringify()) Method
*/
