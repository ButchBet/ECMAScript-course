// Declaration
class User {}  

// Creating an instance
const newUser = new User(); 

// Methods: work to make changes and calculus in/with the class's values
class User {
    greeting() {
        return 'Hello World';
    }
}

// n different instances from the same class
const newUser = new User();
console.log(newUser.greeting());
const bebeloper = new User();
console.log(bebeloper.greeting());

// Constructor
class User {
    constructor() {
        console.log('New user created')
    }

    greeting() {
        return 'Hello world';
    }
}

const newUser = new User();
console.log(newUser.greeting());

// this reference: makes a reference to the parent element
class User {
    constructor(name = 'Kevin', age = 20, country = 'Colombia') {
        this.name = name;
        this.age = age;
        this.country = country;
    }

    speak() {
        return 'Hello';
    }

    userGreetingFrom() {
        return `${this.speak()}, my name ${this.name}, I'm ${this.age} years old and I'm from ${this.country}, nice to meet you!.`;
    }

    userGreetingTo() {
        return `${this.speak()} ${this.name}, nice to meet you`;
    }
}

const ana = new User('Ana', 22, 'México');
console.log(ana.userGreetingFrom());
console.log(ana.userGreetingTo());

// Getter: mode of get element and Setter: mode of save element
class User {
    constructor(name = 'Kevin', age = 20, country = 'Colombia') {
        this._name = name;
        this._age = age;
        this._country = country;
    }

    speak() {
        return 'Hello';
    }

    userGreetingFrom() {
        return `${this.speak()}, my name ${this._name}, I'm ${this._age} years old and I'm from ${this._country}, nice to meet you!.`;
    }

    userGreetingTo() {
        return `${this.speak()} ${this._name}, nice to meet you`;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get age() {
        return this._age;
    }

    set age(age) {
        this._age = age;
    }

    get country() {
        return this._country;
    }

    set country(country) {
        this._country = country;
    }
}

const bebeloper = new User('David', 15, 'Argentina');
console.log(bebeloper.name, bebeloper.age, bebeloper.country);

bebeloper.name = 'Ricardo';
bebeloper.age = 30;
bebeloper.country = 'Argentina';

console.log(bebeloper.name, bebeloper.age, bebeloper.country);

// Static
class Punto {
    constructor ( x , y ){
      this.x = x;
      this.y = y;
    }
  
    static distancia ( a , b) {
      const dx = a.x - b.x;
      const dy = a.y - b.y;
  
      return Math.sqrt ( dx * dx + dy * dy );
    }
  }
  
  const p1 = new Punto(5, 5);
  const p2 = new Punto(10, 10);
  
  console.log (Punto.distancia(p1, p2)); // 7.0710678118654755

