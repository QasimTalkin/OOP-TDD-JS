const Player = require('../lib/Player.js');
const Potion = require('../lib/Potion');

jest.mock('../lib/Potion.js');



describe('Player', () => {

  let player = new Player('Player 1', 100, 10, 10);
  test('Should return player stats', () => {
   
   expect(player.getStats()).toEqual('Player 1 has 100 health, 10 strength, and 10 agility.');
   expect(player.isAlive()).toBe(true);
   expect(player.name).toBe('Player 1');
   expect(player.strength).toEqual(expect.any(Number));
  
  });
  
  test('Should return player inventory', () => {
  
    expect(player.getInventory()).toEqual(expect.any(Array));
    player.inventory = [];
    expect(player.getInventory()).toEqual(false);
    
   });
  
   test('Player health', () => {
  
    expect(player.getHealth()).toEqual(expect.stringContaining(player.health.toString()));

   });
  
   test('Player is alive', () => {
  
    expect(player.isAlive()).toBeTruthy();

    player.health = 0;
  
    expect(player.isAlive()).toBeFalsy();
   });

});

