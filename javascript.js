var clickBoxOne = (function() {
  var colors = ["red", "orange", "green"];
    var index = 0;
    return function() {
    document.getElementById('boxOne').style.background = colors[index%3];
      index++;
    }
})();

var clickBoxTwo = (function() {
  var colors = ["red", "orange", "green"];
    var index = 0;
    return function() {
    document.getElementById('boxTwo').style.background = colors[index%3];
      index++;
    }
})();


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

