function Potion (name) {
  this.name = name,
  this.name === 'healing potion' ? this.value = 10 : this.value = 6
 }
 
 module.exports = Potion