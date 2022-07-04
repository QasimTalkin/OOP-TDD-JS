
let sum = (a,b) => a+b;
let randomNumberUpToTen = () => Math.ceil(Math.random()*10)

function Potion (name) {
 this.name = name,
 this.name === 'healing potion' ? this.value = 10 : this.value = randomNumberUpToTen()
}

console.log( new Potion('healing potion') );
module.exports = {
  sum,
  randomNumberUpToTen,
  Potion
}