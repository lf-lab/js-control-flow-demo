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

console.clear()

// For Loop

for(let i=0; i < 9;i++){
    console.log("we looping",i)
}
console.log("done looping")

console.clear()

let dogs = ["golden retriever", "poodle", "corgi", "pug", "husky"];

for (let i = 0; i < dogs.length; i++){
    console.log(dogs[i]);
    console.log(i);
}
console.log('done looping')

console.clear();
// While Loop
// DONT DO THIS! STUCK IN INFINITE LOOP!
// while (1<9){
//     console.log("let's dance");
// }


let number = Math.random();
let timesRun = 0;
console.log(number);

while (number < 0.9){
    number=Math.random();
    console.log(number);
    timesRun++;
}

console.log(timesRun);



for (let i = 0; i < dogs.length; i++){
    console.log("we looping");
    if (dogs[i] === "pug"){
    console.log(dogs[i]);
    break;
    }
}