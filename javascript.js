class Mammal {
  constructor(age) {
    this.hair = true;
    this.age = age;
  }
}

class Person extends Mammal {
  constructor(name, nationality, age) {
    super(age);
    this.name = name;
    this.nationality = nationality;
  }
}

Person.prototype.secondNationality = function(purpleHippo) {
  this.secondNationality = purpleHippo;
};

var john = new Person("John Miller", "German", 23);
john.secondNationality("Argentinian");
console.log(john.age); 

// ------------------------------- account inheritance ---------------------------

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// function Account(firstName, lastName, openingBalance) {
//   Person.call(this, firstName, lastName)
//   this.balance = openingBalance;
//   this.status = "active";
// }

// Account.prototype = new Account();

// var test = new Account("Tuna", "Sandwich", 10000)
// console.log(test);

// ------------------------------ person inhertance -------------------------------


// function Mammal(age) {
//   this.hair = true;
//   this.blood = "warm";
//   this.age = age;
// }

// function Person(name, nationality, age) {
//   Mammal.call(this, age)
//   this.name = name;
//   this.nationality = nationality;
// }

// Person.prototype = new Mammal();

// Person.prototype.secondNationality = function(purpleHippo) {
//   this.secondNationality = purpleHippo;
// };

// var john = new Person("John Miller", "German", 23);
// john.secondNationality("Argentinian");
// console.log(john.age); 

//-------------------------------- change color ----------------------------------


// var clickBoxOne = (function() {
//   var colors = ["red", "orange", "green"];
//     var index = 0;
//     return function() {
//     document.getElementById('boxOne').style.background = colors[index%3];
//       index++;
//     }
// })();

// var clickBoxTwo = (function() {
//   var colors = ["red", "orange", "green"];
//     var index = 0;
//     return function() {
//     document.getElementById('boxTwo').style.background = colors[index%3];
//       index++;
//     }
// })();


//--------------------------------- counter ---------------------------------------

// var clickBoxOne = (function() {
//   var counter = 0;
//   return function() {
//     counter++;
//     return console.log("Box One clicked " + counter + " times.");
//   }
// })();

// var clickBoxTwo = (function() {
//   var counter = 0;
//   return function() {
//     counter++;
//     return console.log("Box One clicked " + counter + " times.");
//   }
// })();

// function Account(firstName, lastName, openingBalance) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.balance = openingBalance;
//   this.status = "active";
// }

// Account.prototype.closeAccount = function(closeAccount) {
//   this.status = "Account closed!"
//   this.balance = 0;
//   console.log("Account closed; difference in the mail");
// };

// var bank_account = new Account("Drizzy", "Dre", 10000);
// bank_account.closeAccount(0);
// console.log(bank_account);

var accounts = [];

function createAccount() {
  var firstName = document.getElementById('firstName');
  var lastName = document.getElementById('lastName');
  var openingBalance = document.getElementById('openingBalance');
  var account = new Account(firstName.value, lastName.value, openingBalance.value); // need to create constructor
  accounts.push(account);
  firstName.value = "";
  lastName.value = "";
  openingBalance.value = "";
}

window.accounts = accounts;

