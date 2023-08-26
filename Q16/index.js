"use strict";
let guestList = ["Quds", "Huzii", "Amna"];
function inviteToDinner(guests) {
    for (let i = 0; i < guests.length; i++) {
        const guest = guests[i];
        console.log(`Dear ${guest}, you are cordially invited to dinner. `);
    }
}
inviteToDinner(guestList);
const absent = guestList[1];
guestList[1] = "Hadia";
console.log(`----> :(  Unfortunately, ${absent} can't make it to the dinner.`);
console.log("\n----------------Updated Guest List----------------");
inviteToDinner(guestList);
console.log("\n~~~~~~~~~~~~~~~~~~~~Just found a bigger table~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
let newGuest1 = `Ahmed`;
guestList = [newGuest1, ...guestList];
let newGuest2 = `Aisha`;
guestList.splice(2, 0, newGuest2);
let newGuest3 = `Talal`;
guestList.push(newGuest3);
inviteToDinner(guestList);
