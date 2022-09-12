// Before ES6
function newUser(name, age, country) {
    this.name = name || 'Oscar';
    this.age = age || 19;
    this.country = country || 'Colombia';
    this.showProperties = function() {
        console.log(this.name, this.age, this.country);
    }
}

let user1 = new newUser();
user1.showProperties();

let user2 = new newUser('Kevin', 20, 'México');
user2.showProperties();

// After ES6
function newUser(name = 'Oscar', age = 19, country = 'Colombia') {
    this.name = name;
    this.age = age;
    this.country = country;
    this.showProperties = function() {
        console.log(this.name, this.age, this.country);
    }
}

let user1 = new newUser();
user1.showProperties();

let user2 = new newUser('Kevin', 20, 'México');
user2.showProperties();
