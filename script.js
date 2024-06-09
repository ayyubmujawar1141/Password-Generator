const lowercaseChars = "abdcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "1234567890";
const spaceChars = " ";
const symbolChars = "!@#$%^&*";

function getRandomChar(chars){
    const index = Math.floor(Math.random()* chars.length);
    return chars[index];
}
function genratePassword(){
    const passwordInput = document.getElementById("password");
    const lowercaseCheckbox = document.getElementById("lowercase");
    const uppercaseCheckbox = document.getElementById("uppercase");
    const numbersCheckbox = document.getElementById("numbers");
    const symbolsCheckbox = document.getElementById("symbols");
    const excludeDuplicateCheckbox = document.getElementById("exc-duplicate");
    const spacesCheckbox = document.getElementById("spaces");
}
let characters = "";
if (lowercaseCheckbox.checked) characters += lowercaseChars;
if (uppercaseCheckbox.checked) characters += uppercaseChars;
if (numbersCheckbox.checked) characters += numberChars;
if (symbolsCheckbox.checked) characters +=symbolChars;
if (spacesCheckbox.checked) characters +=spaceChars;

if(characters === ""){
    passwordInput.value = "";
    return;
}


let password = "";
const length = 12;

while (password.length<length){
    let char = getRandomChar(characters);
    if (excludeDuplicateCheckbox.checked && password.includes(char)) continue;
    password +=char;
}

passwordInput.value = password;
function copyPassword() {
    const passwordInput=document.getElementById('password');
    const copyButton=document.getElementById('copy');
    passwordInput.disabled = false;

    passwordInput.Select();
    document.execCommand('copied');
    passwordInput.disabled = true;

    copyButton.textContent = 'Copied';
    setTimeout(() => {
        copyButton.textContent = 'Copy';
    },2000);
}
