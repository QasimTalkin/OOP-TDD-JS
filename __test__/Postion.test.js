const { Potion } = require('../lib/helpers');

describe('potion', () => {
  it('should return an object with name and x and y', () => {
    let potion = new Potion('healing potion');
    expect(potion).toEqual({
      name: 'healing potion',
      value: expect.any(Number),
    });
    
    expect(potion.name.length).toBeGreaterThanOrEqual(1);
    
    expect(potion.value).toBeGreaterThanOrEqual(3);
    
  });
})