var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var visitPlaces = [
    "calgery",
    "berlin",
    "bishkek",
    "toronto",
    "florida"
];
console.log("Initally:", visitPlaces);
//[...visitPlaces] creates a new array using the previous array.
var sort = __spreadArray([], visitPlaces, true).sort();
console.log("Alphabetically sorted:", sort);
console.log("Original order of visitplaces:", visitPlaces);
var reverse = __spreadArray([], sort, true).reverse();
console.log("Reverse of Alphabetical list:", reverse);
console.log("Showing that original list isn't changed", visitPlaces);
var reverseVisitplaces = __spreadArray([], visitPlaces, true).reverse();
console.log("Reverse of the Original list:", reverseVisitplaces);
var againReverse = __spreadArray([], reverseVisitplaces, true).reverse();
console.log("Double reverse of Orignial list that is same as original list", againReverse);
var againReversealphabetical = __spreadArray([], againReverse, true).sort();
console.log("Alphabetical order of the above array", againReversealphabetical);
