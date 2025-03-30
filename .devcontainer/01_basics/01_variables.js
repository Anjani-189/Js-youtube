const accountId=144553
let acountEmail="anjani@gmail.com"
var accountPass="12345"
accountCity="Paradeep"
let accountState;
// accountId=123456   //not allowed
console.log(accountId);

/*
prefer not to use var
because of block or functional scope
*/
accountPass="23145"
accountCity="Bhubaneswar"
accountEmail="anjani2022@gift.edu.com"

console.table([accountId,accountPass,accountEmail,accountCity,accountState]);