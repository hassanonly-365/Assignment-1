"use strict";
let ordinalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < ordinalNumbers.length; i++) {
    let numbers = ordinalNumbers[i];
    let ordinal;
    if (numbers === 1) {
        ordinal = "st.";
    }
    else if (numbers === 2) {
        ordinal = "nd.";
    }
    else if (numbers === 3) {
        ordinal = "rd.";
    }
    else {
        ordinal = "th.";
    }
    console.log(`${numbers}${ordinal}..`);
}
