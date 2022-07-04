const inquirer = require('inquirer');
const Player = require('./Player');
const Enemy = require('./Enemy');


function Game ()  {
  this.roundNumber = 0;
  this.isPlayerTurn = false;
  this.enemies = [];
  this.currentEnemy;
  this.player;
};


Game.prototype.initializeGame = function() {

  this.enemies.push(new Enemy('Goblin', 'sword'));
  this.enemies.push(new Enemy('Orc', 'baseball bat'));
  this.enemies.push(new Enemy('Troll', 'axe'));
  this.currentEnemy = this.enemies[0];
  
  inquirer.prompt({
    type:'text',
    name:"playerName",
    message:"What is your name?"
  })
  .then(({playerName}) => {
    this.player = new Player(playerName, 100, 10, 10);  
    console.log(`Welcome to the game, ${this.player.name}!`,
    `You are currently at round ${this.roundNumber}`, 
    `You have ${this.player.health} health, ${this.player.strength} strength, and ${this.player.agility} agility.`);
    console.log(`Your enemy is a ${this.currentEnemy.name} holding a ${this.currentEnemy.weapon}`);

  });

}


module.exports = Game;