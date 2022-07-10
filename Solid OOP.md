# Solid OOP 
  Object oriented programming in JS

# Creating an Object 
```js
let person = {
  name: 'John',
  age: 30,
  isMarried: false,
  hobbies: ['Sports', 'Cooking'],
  points: 10,
  score: function () {
    return person.points * 10;
  }
};
person.score();
```
* this is encapsulation, we are adding all related properties and methods to the object.
  
# Object dot notation 
`person.job = 'developer';`
we can use dot notation to access the property of the object.
and add a new property to the object.

# Object.create
* built-in function to create a new object.
* it takes an object as a parameter and returns a new object.
```js
person = Object.create(null);
person.name = 'John';
person.age = 30;
person.isMarried = false;
person.hobbies = ['Sports', 'Cooking'];
person.points = 10;
person.score = function () {
  return person.points * 10;
}
```
