
let size = `Large`;
let text = `I Love .ts`
function tShirt(size:string, text: string): void{
    console.log(`You have ordered a shirt of size ${size}, with text message "${text}"`)
}
tShirt(size,text);
tShirt(`Medium`,text);
tShirt(`Small`,`I love Typescript.`);