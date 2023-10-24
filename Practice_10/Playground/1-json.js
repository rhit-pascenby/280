const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday'
}
const bookJSON = JSON.stringify(book);
console.log(bookJSON.title)
const bookParsed = JSON.parse(bookJSON)
console.log(bookParsed.title)
const fs = require('fs');


const dataBuffer = fs.readFileSync('data.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
console.log(data.name, data.city)
data.name = "Olga";
data.city = "Terre Haute";
const updateDataJSON = JSON.stringify(data)
fs.writeFileSync('data.json', updateDataJSON)
