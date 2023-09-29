
for (let i = 2; i <= 10; i += 2) {
    console.log(i);
  }
console.log();

  for (let i = 5; i>=1; i--){
    console.log(i);
  }
console.log();
  const numbers = [1,2,3,4,5]

  for (const number of numbers){
    console.log(number);
  }
console.log();

const student = {
    name: 'John',
    age: '20',
    grade:'A',

};

for (const key in student){
    
    console.log(`${key}`)
}
console.log();

const book= {
    title: 'Harry Potter',
author: 'J.K. Rowling',
year: 1997
};

for (const key in book){
    
    console.log(`${book[key]}`)
}
console.log();

const colors = ['red', 'green', 'blue', 'yellow'];

colors.forEach(function(color){
    console.log(color);
});
console.log();
let num =0;
for (const number of numbers){
    num += number;
  }
  console.log(num);
console.log();
let temp = 0;
const temperatures = [32, 68, 75, 82, 56];
temperatures.forEach(function(t){
    temp = (t-32)* (5/9)
    console.log(temp);
});
console.log();
const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston'];
const populations = { 'New York': 8398748, 'Los Angeles': 3990456, 'Chicago': 2705994, 'Houston': 2320268 };

cities.forEach(function(city){

    console.log(`${city}: ${populations[city]}`)
})
console.log();


tri = "";
for(let i = 0; i<5; i++){
    tri +="*"
    console.log(tri)
}