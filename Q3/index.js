var a = 'Eric';
//lowerCase
var lowercasea = a.toLocaleLowerCase();
console.log(lowercasea);
//upperCase
var uppercasea = a.toLocaleUpperCase();
console.log(uppercasea);
// title case
function toTitleCase(titleCase) {
    return titleCase.toLowerCase().replace(/(^|\s)\w/g, function (match) { return match.toUpperCase(); });
}
var titleCase = 'eRic';
titleCase = toTitleCase(titleCase);
console.log(titleCase);
