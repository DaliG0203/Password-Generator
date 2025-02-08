
document.getElementById("generate-btn").addEventListener("click", generatePassword)

const randomChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
    "U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u",
    "v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*",
    "(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"];

let passLength = 12

function generatePassword() {
    let passOne = []
    let passTwo = []
    for (let i = 0; i< passLength; i++){
        let randomInt = Math.floor(Math.random()*randomChar.length)
        passOne.push(randomChar[randomInt])
        i+1
    }
    for (let i = 0; i< passLength; i++){
        let randomInt = Math.floor(Math.random()*randomChar.length)
        passTwo.push(randomChar[randomInt])
        i+1
    }
    let passOneString = passOne.join('')
    let passTwoString = passTwo.join('')
    document.getElementById("outputOne").textContent = passOneString
    document.getElementById("outputTwo").textContent = passTwoString
}


