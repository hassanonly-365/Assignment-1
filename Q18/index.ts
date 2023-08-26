
let visitPlaces = [
    `calgery`, 
    `berlin`,
    `bishkek`,
    `toronto`,
    `florida`
]

console.log(`Initally:`,visitPlaces)

//[...visitPlaces] creates a new array using the previous array.
let sort = [...visitPlaces].sort()
console.log(`Alphabetically sorted:`,sort)
console.log(`Original order of visitplaces:`,visitPlaces)

let reverse = [...sort].reverse()
console.log(`Reverse of Alphabetical list:`,reverse)
console.log(`Showing that original list isn't changed`,visitPlaces)

let reverseVisitplaces= [...visitPlaces].reverse()
console.log(`Reverse of the Original list:`,reverseVisitplaces)

let againReverse = [...reverseVisitplaces].reverse()
console.log(`Double reverse of Orignial list that is same as original list`,againReverse)

let againReversealphabetical = [...againReverse].sort()
console.log(`Alphabetical order of the above array`,againReversealphabetical)
