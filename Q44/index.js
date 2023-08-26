"use strict";
function sandwich(...items) {
    console.log(`Sandwich Order:`);
    if (items.length === 0) {
        console.log("NO items to display :(");
    }
    else {
        console.log(items);
    }
}
sandwich();
sandwich(`tomato`, `mayo`, `cheese`, `Beef`, `Lattis`, `onion`);
