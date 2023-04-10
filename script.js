
//ARRAY PROMPT

let age = prompt ("Enter your age.");
const isHungry = false;

if(age>=12 && isHungry) {
    console.log('you are ${age} years old.You can cook for yourself.')
} else if (age<12 && isHungry) {
    console.log("you are too young.wait for your parents")
} else if (!isHungry) {
    console.log("Don't eat!")

}


let name = prompt("Enter your name");
const userName = Romeo;

if (userName === "Romeo"){
    return "I love you romeo";
} else {
    return "Hello" + userName;

}

//SWITCH STATEMENT

switch(userName) {
    case 'Romeo':
        console.log("Hello my love!")
        break;
        case "Julia":
            console.log("Hello Sister");
            break;
            default:
                console.log ("Hello ${userName}")
        
}

//TERNARY OPERATOR
let username = prompt ('What is your name?')

username === 'Romeo' ? console.log('Hello my love!') : console.log('Hello ${username}');




