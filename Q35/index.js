"use strict";
let animals = [`Dog`, `Cat`, `Elephant`];
let index = 2;
let statement = `Any of these animals in the list would make a great pet!`;
for (let i = 0; i < animals.length; i++) {
    if (index === 0) {
        console.log(`A ${animals[0]} would make a great pet. ${statement}`);
        break;
    }
    else if (index === 1) {
        console.log(`${animals[1]}s like to hunt. ${statement}`);
        break;
    }
    else if (index === 2) {
        console.log(`${animals[2]}s have great memory. ${statement}`);
        break;
    }
}
