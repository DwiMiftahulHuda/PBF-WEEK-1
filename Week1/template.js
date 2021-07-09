let fname = 'Cristian';
let lname = 'Ronaldo';
let age = prompt("Masukkan uur Cristian Ronaldo");

// Cara lama
// let result = frame + ' ' + lname + 'is' + age + 'years old';
// alert(result);

// Memakai template strings
let result = `${fname} ${lname} is ${age} years old`;
alert(result);