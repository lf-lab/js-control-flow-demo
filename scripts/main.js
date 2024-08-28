console.log("welcome to control flow!")


let amIHappy = true;
let iKnowIt = true;

if(amIHappy ===true){
    console.log("clap my hands")
    console.log("stomp my feet")
}

if(amIHappy ===true && iKnowIt===true){
    console.log("i'm happy and i know it")
}


if (true === true){
    console.log("that's true!!")
}

console.log("after if conditional")

// this will clear all the console.log above
console.clear()

let age = 100
let isAlive = true;


// if(age >= 18){
//     console.log("i vote that jack be fired immediately")
// } else{
//     console.log("live in the blissful ignorance of youth")
// }

// nested
if(isAlive){
    if(age >= 18){
        console.log("i vote that jack be fired immediately")
    } else{
        console.log("live in the blissful ignorance of youth")
    }
 } else{
    console.log("you dead")
}

console.clear()

let hour =12;
let action="code"

if (hour<=12){
    action="drink coffee and code"
}else if (hour<17){
    action="be tired,cry,and code"
}else if (17<=hour<20){
    action="go for a walka and keep coding"
}else{
    action="cry alot and don't stop coding"
}

console.log(action)