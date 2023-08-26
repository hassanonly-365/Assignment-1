let currentUsers = [`Sisyphus`,`Astrid`,`CyberSorcerer`,`ValorViper`,`NeonSpecter`]
let newNames = [`Sisyphus`,`ThunderStorm`,`SilentReaper`,`IronClad`,`CyborgNinja`,]
let check : boolean = true;
let lowCase_currentUsers= currentUsers.map(name =>name.toLowerCase());
let lowCase_newUsers = newNames.map(name =>name.toLowerCase());
lowCase_currentUsers.forEach(name => {
    if (lowCase_newUsers.includes(name)){
        check = true;
        console.log(`${name} is already taken! Please choose a different username...`)
    }
    else{
        console.log (`Username is  availabe`)
    }
}
)
