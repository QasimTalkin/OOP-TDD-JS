const Potion = require('./Potion');

function Player(name, health, strength, agility) {
  this.name = name;
  this.health = health;
  this.strength = strength;
  this.agility = agility;
  this.getStats = function() {
    return {
      potions: this.inventory.length,
      health: this.health,
      strength: this.strength,
      agility: this.agility
    };
  };
 this.isAlive = function() {
  return this.health > 0;
 }
 this.addPotion = function(potion) {
  this.health += potion.value;
 }
 this.inventory = [new Potion('health'), new Potion()];

};

Player.prototype.getInventory = function() {
  if (this.inventory.length) {
    return this.inventory;
  }
  return false;
};




module.exports = Player;