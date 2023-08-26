"use strict";
let magicians = [`Harry Houdini`, `David Copperfield`, `Criss Angel`, `Doug Henning`, `Shin Lim`];
function showMagicians(magic) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
function makeGreat(magic) {
    let greatmagic = [];
    for (let i = 0; i < magicians.length; i++) {
        greatmagic.push(`The Great ${magic[i]}.`);
    }
    return greatmagic;
}
magicians = makeGreat(magicians);
showMagicians(magicians);
