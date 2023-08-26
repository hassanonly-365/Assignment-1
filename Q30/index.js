"use strict";
let userName = [`Admin`, `Manager`, `Employee`, `Intern`, `Employii`];
let num = 0;
if (`Admin` === userName[num]) {
    console.log(`Hy ${userName[num]}, Would you like to see status report?`);
}
else if (`Admin` !== userName[num]) {
    console.log(`Hy, ${userName[num]}`);
}
