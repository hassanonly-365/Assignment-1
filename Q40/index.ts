interface music {
    name: string;
    title: string;
    num?: number;
}
function album(name: string, title:string, num?:number): music{
    return {name, title, num}
}
let music1: music = album(`Gumman`,`Talha Anjum`,3);
let music2: music = album(`Off Shore`, `Shubh `,4)
let music3:music = album( `The Last Ride`, `Sidhu Moose Wala`,5)


console.log(music1);
console.log(music2);
console.log(music3);
