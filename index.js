// Write your solution here!
// function cats (){
//  const cats = ["Milo", "Otis", "Garfield"];
// }
// // const cats = ["Milo", "Otis", "Garfield"];
// cats.length = 0;
// cats=("Milo", "Otis", "Garfield")
// cats.push('Ralph')
// const cats =["Milo", "Otis", "Garfield"];
// // cats.push("Milo", "Otis", "Garfield")
// function destructivelyAppendCat(cats){
//  console.log(cats);
// } 
// cats.push('Ralph')

const cats = ["Milo", "Otis", "Garfield"];
// const destructivelyAppendCat = cats.push('Ralph')/

function destructivelyAppendCat(name) {
 cats.push(name)
 // cats.unshift('Bob')
}
function destructivelyPrependCat(name) {
 cats.unshift(name)
}
function destructivelyRemoveLastCat(name) {
 cats.pop(name)
}
function destructivelyRemoveFirstCat(name) {
 cats.shift(name)
}
destructivelyAppendCat('Ralph')
destructivelyPrependCat('Bob')
destructivelyRemoveLastCat('Garfield')
destructivelyRemoveFirstCat('Milo')
// console.log(cats);
function appendCat(name) {
 return [...cats, name];
}
function prependCat(name) {
 return [name, ...cats];
}
// appendCat('Broom')
function removeLastCat() {
 // console.log(cats);
 // console.log(cats.slice(0, -1));
 // console.log(cats);
 return cats.slice(0, -1);
}
// removeLastCat();
function removeFirstCat() {
 return cats.slice(1, cats.length);
}
// // removefirstCat();

