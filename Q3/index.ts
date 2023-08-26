
let a='Eric';

//lowerCase
let lowercasea= a.toLocaleLowerCase();
console.log(lowercasea);

//upperCase
let uppercasea= a.toLocaleUpperCase();
console.log(uppercasea);

// title case
function toTitleCase(titleCase:string): string {
    return titleCase.toLowerCase().replace(/(^|\s)\w/g, (match) => match.toUpperCase());
}
let titleCase: string = 'eRic'
titleCase = toTitleCase(titleCase)
console.log(titleCase)
