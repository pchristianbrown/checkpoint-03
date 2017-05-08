// Convert the following code to use `.map`

var peoplesAges = [];
var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]
people.forEach(function(person){
  peoplesAges.map(person.age)
});

// Convert the following code to use `.filter`

let peopleYoungerThan35 = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]
let age= peopleYoungerThan35.filter(person)=>
return peopleYoungerThan35.age>35;
  })

// Convert the following to use `.forEach`

var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]
var peopleWhoseNamesHaveTheLetterS = [];

 people.forEach(function(person){return person.name.match("s")});
