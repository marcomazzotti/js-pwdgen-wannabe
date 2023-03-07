// userName
const userName = prompt('Inserisci il tuo nome')
console.log(userName, typeof userName)

// surname
const surname = prompt('Inserisci il tuo cognome')
console.log(surname, typeof surname)

// color
const color = prompt('Inserisci il tuo colore preferito')
console.log(color, typeof color)

//test
const message = `${userName}${surname}${color}21`
console.log(message);

//password
document.getElementById('result').innerHTML = message