"use strict";
let magic = [`Harry Houdini`, `David Copperfield`, `Criss Angel`, `Doug Henning`, `Shin Lim`];
function show_magicians(magai) {
    for (let i = 0; i < magai.length; i += 1) {
        console.log(magai[i]);
    }
}
function make_great(magai) {
    const greatMagicians = [];
    for (let i = 0; i < magai.length; i += 1) {
        greatMagicians.push(`The Great ${magai[i]}`);
    }
    return greatMagicians;
}
const original = magic.slice();
const modified = make_great(original);
show_magicians(original);
console.log(`\n________________Modified Magicians________________`);
show_magicians(modified);
