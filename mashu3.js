const { error } = require("node:console")

function divide(a, b) {
  try {
    console.log('Entering "try" block');
    if (a === 0 || b === 0) {
      throw new Error('Unable to divide by zero');
    } else {
      const result = a / b;
      console.log(`The result is: ${result}`);
    }
  } catch (error) {
    console.log(`Error: ${error.message}`);
  } finally {
    console.log('This will executed no matter what');
  }
}

divide(0, 10);


// Object Oriented Programming - OOP - תכנות מונחה עצמים

class Dog {
  breed
  size

  constructor(breed, size) {
    this.breed = breed
    this.size = size
  }

  details() {
    console.log(`My dog's breed is ${this.breed} and his size is ${this.size}`)
  }
}

const myDog = new Dog('German Shepard', 'Big')
myDog.details()

// example 2

class Dog {
  age = 5
  breed
  size

  constructor(breed, size) {
    this.breed = breed
    this.size = size
  }

  details() {
    console.log(`Breed: ${this.breed}\nSize: ${this.size}\nAge: ${this.age}\n`)
  }
}

const myDog = new Dog('German Shepard', 'Big')
myDog.details()

const dog2 = new Dog('Labrador', 'Medium')
dog2.details()

const dog3 = new Dog('Chihuahua', 'Small')
dog3.details()

const dog4 = new Dog('Golden Retriever', 'Big')
dog4.details()

/ Inheritance - ירושה

class Animal {
  constructor(name) {
    this.name = name
  }

  type() {
    console.log(`${this.name} is a type of an animal.`)
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name)
    this.breed = breed
  }

  bark() {
    console.log(`${this.name} barks! Woof Woof!`)
  }
}

const myDog = new Dog('Buddy', 'Golden Retriever')
myDog.type()
myDog.bark()
co