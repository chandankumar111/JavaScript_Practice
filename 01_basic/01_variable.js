const accountId = 12354
let accountEmail = "chandan@google.com"
var accountPassword = "54515"
accountCity = "BodhGaya"
let accountState;

// accountId = 2 // not allowed


accountEmail = "cc@cc.com"
accountPassword = "32123231"
accountCity = "Thailand"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])