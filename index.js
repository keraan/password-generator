let characters = [];
let passwordLength = document.getElementById('passwordLength').value;
let tempPassword = '';
let password = []

let passwordOne = document.getElementById("passwordOne")

for (let i=33; i<127; i++) {
    characters.push( String.fromCharCode(i) );
}


function getRandomPassword() {
    password = []
    document.getElementById('copiedToClipboard').textContent = ''
    for (u=0; u<4; u++) {
        for (i = 0; i < passwordLength; i++) {
            let randomCharacter = characters[Math.floor(Math.random()*characters.length)];
            tempPassword += randomCharacter;
        }
        password.push(tempPassword);
        tempPassword = '';
    }
    
}

function implementPassword() {
    passwordOne.textContent = password[0]
    passwordTwo.textContent = password[1]
    passwordThree.textContent = password[2]
    passwordFour.textContent = password[3]
}


function copyToClipboard(password) {
    var copyText = document.getElementById(password).innerText;
    console.log(copyText)
    navigator.clipboard.writeText(copyText).then(() => {
        document.getElementById('copiedToClipboard').textContent = 'Copied to Clipboard!'
    });
  }

