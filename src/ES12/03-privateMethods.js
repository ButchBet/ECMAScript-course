class User {
    constructor(name = 'Kevin', age = 20, country = 'Colombia') {
        this._name = name;
        this._age = age;
        this._country = country;
    }

    #speak() {
        return 'Hello';
    }

    userGreetingFrom() {
        return `${this.speak()}, my name ${this._name}, I'm ${this._age} years old and I'm from ${this._country}, nice to meet you!.`;
    }

    userGreetingTo() {
        return `${this.speak()} ${this._name}, nice to meet you`;
    }

    get #name() {
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
