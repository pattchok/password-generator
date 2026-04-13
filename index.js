const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


buttonEl = document.getElementById("btn")

function getRandomChar() {
    randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

let passwordLength = 15

function generatePassword() {
    let passwordOne = ""
    let passwordTwo = ""
    
    for (let i = 0; i < passwordLength; i++) {
        passwordOne += getRandomChar()
        passwordTwo += getRandomChar()
    }
    
    pwOneEl = document.getElementById("pw1")
    pwTwoEl = document.getElementById("pw2")
    
    pwOneEl.textContent = passwordOne
    pwTwoEl.textContent = passwordTwo

}
