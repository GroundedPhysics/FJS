console.log('%c🤫️', "font-size: 20px");

// let n = Number(prompt("Inputs length"))
let names = [];
let compareNames = 20;
for (let i = 0; i < 5; i++) {
    let element = names.push(prompt("add Names: "))
    if (compareNames < names[i].length) {
        alert("wrong input")
    }

    // console.log(compareNames);
    console.log(element, names[i], names[i].length, names);
}
