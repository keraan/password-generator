let characters = [];
let passwordLength = 10;
let tempPassword = '';
let password = []

let passwordOne = document.getElementById("passwordOne")

for (let i=33; i<127; i++) {
    characters.push( String.fromCharCode(i) );
}


function getRandomPassword() {
    password = []
    for (u=0; u<4; u++) {
        for (i = 0; i < passwordLength; i++) {
            let randomCharacter = characters[Math.floor(Math.random()*characters.length)];
            tempPassword += randomCharacter;
        }
        password.push(tempPassword);
        tempPassword = '';
    }
    console.log(password)
}

function implementPassword() {
    passwordOne.textContent = password[0]
    passwordTwo.textContent = password[1]
    passwordThree.textContent = password[2]
    passwordFour.textContent = password[3]
}





